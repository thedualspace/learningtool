import React from 'react';
import logo from './logo.svg';
import './App.css';
import XSS from './components/XSS';
import SQL from './components/SQL';
import MCQ from './components/MCQ'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <MCQ questions={XSS.questions} />
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
