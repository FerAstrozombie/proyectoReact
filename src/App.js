import './App.css';
import "./components/navBar"
import NavBar from './components/navBar';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <header className="App-header">
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
