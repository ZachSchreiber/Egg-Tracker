import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import './styles/main.css';

// Everthing in the app is rendered into #main.
render(
  <App />, document.querySelector('#main'));
