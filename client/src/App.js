// import { Router, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import { Home } from './Components/Home';
import { Fragment } from 'react';
import Footer from "./Components/Footer/Footer";
import Latest from './Components/Latest/Latest';

function App() {

  return (

    <Fragment>
      <NavBar />
      <Home />
      <Latest />
      <Footer/>
    </Fragment>
  );
};

export default App;
