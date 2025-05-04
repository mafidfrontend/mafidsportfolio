require('@babel/register')({
    presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    ignore: [/node_modules/],
  });
  require('ignore-styles');
  
  const express = require('express');
  const fs = require('fs');
  const path = require('path');
  const ReactDOMServer = require('react-dom/server');
  const React = require('react');
  
  const { renderApp } = require('./src/server-entry');
  
  const app = express();
  const PORT = process.env.PORT || 3000;
  
  app.use(express.static(path.resolve(__dirname, 'build')));
  
  app.get('*', (req, res) => {
    const appHtml = ReactDOMServer.renderToString(renderApp(req.url));
  
    const indexFile = path.resolve('./build/index.html');
    fs.readFile(indexFile, 'utf8', (err, htmlData) => {
      if (err) {
        console.error('HTML topilmadi:', err);
        return res.status(500).send('Xatolik yuz berdi');
      }
  
      return res.send(htmlData.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`));
    });
  });
  
  app.listen(PORT, () => {
    console.log(`SSR server http://localhost:${PORT} da ishlayapti`);
  });