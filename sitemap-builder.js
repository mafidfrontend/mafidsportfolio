const Sitemap = require('react-router-sitemap').default;
const path = require('path');

function generateSitemap() {
  return new Sitemap(require('./src/App').default)
    .build('https://mafid.uz')
    .save(path.resolve(__dirname, 'public', 'sitemap.xml'));
}

generateSitemap();