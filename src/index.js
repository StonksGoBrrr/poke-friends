import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './containers/App';
import Card from './components/Card';
import reportWebVitals from './reportWebVitals';
import 'tachyons';
import { pokemon } from './pokemon';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App pokemon={pokemon} />
);

reportWebVitals();
