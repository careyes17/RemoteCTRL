import React from 'react';
import logo from './logo.svg';
import ExampleComponent from "./components/example-component/example-component"
import "./components/example-component/example-component.css"
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <div className="member-counter">
          <ExampleComponent />
        </div> */}
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
