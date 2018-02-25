import ReactDOMServer from 'react-dom/server';
import * as React from 'react';
import App from './components/app';

export default function Index(options, done) {
  const markup = ReactDOMServer.renderToStaticMarkup(<App />);
  const html = `<!DOCTYPE html>${markup}`;
  if (!done) return html;
  done(null, html);
}
