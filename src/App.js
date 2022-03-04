// import { Router, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import { Home } from './Components/Home';

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
