import React, { Component } from 'react';
import NavBar from './components/NavBar';
import Jumbotron from './components/Jumbotron';
import GameBody from './components/GameBody';
import CharCard from './components/CharCard';
import Footer from './components/Footer';
import characters from './characters.json';
import './App.css';

const allChars = characters;

class App extends Component {
  state = {
    allChars,
    score: 0,
    topScore: 0,
    selectedChars: []
  };

  componentDidMount() {
    // console.log('App mounted'); --> working...
    this.randomize(allChars);
  }

  randomize = allChars => {
    // for now, trying to get images to populate on client side
    this.setState({
      selectedChars: allChars
    });
  };

  handleClick = e => {
    const clickedArray = { ...this.state };
    console.log(clickedArray);
  };

  render() {
    return (
      <div className="App">
        <NavBar />
        <Jumbotron />
        <GameBody>
          {this.state.selectedChars.map(allChars => (
            <CharCard
              handleClick={this.handleClick}
              id={allChars.id}
              key={allChars.id}
              name={allChars.name}
              image={allChars.image}
            />
          ))}
        </GameBody>
        <Footer />
      </div>
    );
  }
}

export default App;
