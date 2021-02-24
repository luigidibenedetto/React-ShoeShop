import logo from './logo.svg';
import './App.css';

function printInConsole() {
  const consola = require('consola')
  return consola.info('Hello, this is my first react app!')
}

function App() { 
  return (
    <div className="App">
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
      <main className="App-main">
        <h1 className="App-main-h1">My First React App</h1>

        <button onClick={printInConsole}>Print in console</button>

      </main>
      <footer className="App-footer">copyright by Me {(new Date().getFullYear())}</footer>
    </div>
  );
}
export default App;
