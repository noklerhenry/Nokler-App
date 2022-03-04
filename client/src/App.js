// import { Router, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import { Home } from './components/Home';

function App() {
  return (
    <div>
      <header className="App-header">
        <NavBar />
        <Home />
      </header>
    </div>
  );
};

export default App;
