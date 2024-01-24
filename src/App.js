import logo from './logo.svg';
import './App.css';
import TestComp from './components/Functionalcomponents/Testcomponents';
import CompEx from './components/Classcomponents/classtest';
function App() {
  return (
    <div className="App">
      <TestComp></TestComp>
      <header className="App-header">
        <CompEx></CompEx>
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
