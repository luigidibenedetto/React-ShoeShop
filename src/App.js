import logo from './logo.svg';
import LogoImg from './components/LogoImg';
import Product from './components/Product'
import './App.css';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <LogoImg alternativeText="React Header Logo" imageSrc={logo} />
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
      <main>
        <ul>
         <Product name="Red Shoe" price={23.5} />
         <Product name="Blue Shoe" price={98.3} />
         <Product name="Black Shoe" price={52.7} />
        </ul>
      </main>
      <footer><LogoImg alternativeText="Edgemony Footer Logo" imageSrc="https://edgemony.com/wp-content/uploads/2020/03/cropped-Logo-edgemony_TeBIANCO-04.png" /></footer>
    </div>
  );
}

export default App;
