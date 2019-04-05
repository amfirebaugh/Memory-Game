import React, { Component } from 'react';
import NavBar from './components/NavBar';
import Jumbotron from './components/Jumbotron';
import Footer from './components/Footer';
// import characters from './characters.json';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Jumbotron />
        <Footer />
      </div>
    );
  }
}

export default App;
