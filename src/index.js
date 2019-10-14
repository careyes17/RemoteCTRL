import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './views/Example/App'; // an example
import Home from './views/Home/Home';
import Crane from './views/Crane/Crane';
import PrinterInterface from './views/PrinterInterface/PrinterInterface';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
