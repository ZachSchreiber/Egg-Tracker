import React from 'react';
import { render } from 'react-dom';
import './styles/main.css';
import App from './components/App';
import NotFound from './components/NotFound';





// Everthing in the app is rendered into #main.
render(<App/>, document.querySelector('#main'));
