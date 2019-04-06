import React, { Component } from 'react';
import NavBar from './components/NavBar';
import Jumbotron from './components/Jumbotron';
import GameBody from './components/GameBody';
import CharCard from './components/CharCard';
import Footer from './components/Footer';
import characters from './characters.json';
import './App.css';

// randomize characters from json
var randomize = function(array) {
  // store the current array length in this variable so we make sure it's not empty
  var currentIndex = array.length;
  // temporaryValue is just a placeholder, as well as randomIndex
  var temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
};

randomize(characters);

class App extends Component {
  state = {
    characters,
    score: 0,
    topScore: 0
  };

  handleClick = e => {
    console.log('e is:' + e);
    // clickedArray is being declared as a copy of the state, which is necessary for line the line below where we change the isClicked attribute to true
    const clickedArray = { ...this.state };
    // if "isClicked" is false (default in json) is true... (keep in mind we're inside our handleClick method...)
    if (!e.isClicked) {
      // changing the card property isClicked to true
      clickedArray.characters[e.id - 1].isClicked = true;
      console.log(clickedArray);
      // setState of App to this new array as character cards are clicked
      this.setState(clickedArray);
      console.log('state:' + this.state.clickedArray);
      this.handleScore();
    } else {
      this.gameReset();
    }
    randomize(characters);
  };

  handleScore = () => {
    if (this.state.score === 12) {
      this.gameReset();
    } else {
      this.setState({
        score: this.state.score + 1
      });
    }
  };

  storeTopScore = () => {};

  gameReset = () => {
    alert('Game Over! Click ok to keep playing...');
    this.setState({
      score: 0
    });
  };

  render() {
    return (
      <div className="App">
        <NavBar score={this.state.score} handleScore={this.handleScore} />
        <Jumbotron />
        <GameBody>
          {this.state.characters.map(character => (
            <CharCard
              handleClick={this.handleClick}
              id={character.id}
              key={character.name}
              image={character.image}
            />
          ))}
        </GameBody>
        <Footer />
      </div>
    );
  }
}

export default App;
