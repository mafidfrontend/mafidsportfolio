import { StaticRouter } from 'react-router-dom/server';
import App from './App';

export const renderApp = (url: string) => {
  return (
    <StaticRouter location={url}>
      <App />
    </StaticRouter>
  );
};