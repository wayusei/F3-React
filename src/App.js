import logo from './logo.svg';
import image from './github.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={image} className="App-github" alt="logo-github" />
        <p>
          BEDU-leando el código en React
        </p>
        <img src={logo} className="App-logo" alt="logo-react" />
        <a
          className="App-link"
          href="https://github.com/wayusei"
          target="_blank"
          rel="noopener noreferrer"
        >
          Wayusei's Github profile
        </a>
      </header>
    </div>
  );
}

export default App;
