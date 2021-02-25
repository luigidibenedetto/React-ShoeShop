// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';


// function printInConsole() {
//   const consola = require('consola')
//   return consola.info('Hello, this is my first react app!')
// }

function App() { 

  const data = {
    name: 'HappyShoes',
    logo: 'https://logoipsum.com/logo/logo-16.svg',
    company: 'SZH Inc.',
    cover: 'https://images.pexels.com/photos/4123897/pexels-photo-4123897.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    title: 'Welcome to our brand new HappyShoes website!',
    description: 'Lorem ipsum velit cillum excepteur adipisicing voluptate mollit. Laboris deserunt reprehenderit commodo id id minim non voluptate irure pariatur nulla.',
  };

  return (
    <div className="App">
      <Header logo={data.logo} name={data.name}/>
      <Body cover={data.cover} title={data.title} description={data.description} />
        {/* <h1 className="App-main-h1">My First React App</h1> */}
        {/* <button onClick={printInConsole}>Print in console</button> */}
        {/* <footer className="App-footer">copyright by Me {(new Date().getFullYear())}</footer> */}
      <Footer company={data.company} />
    </div>
  );
}
export default App;
