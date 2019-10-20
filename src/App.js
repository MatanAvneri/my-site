import React, { useEffect } from 'react';
import Particles from './Particles'
import logo from './logo.png';
import SocialBar from './SocialBar'
import Links from './LINKS'
import './App.css';

const App = () => {
  useEffect(() => {
    console.log(`Checkout my GitHub at ${Links.gitHub}`)
  }, [])

  return (
    <div className="App">
      <Particles />
      <header className="App-header">
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
      <SocialBar />
    </div>
  );
}

export default App;
