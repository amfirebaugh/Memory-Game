import React from 'react';
import black_background from '../images/black_background.jpg';

const sectionStyle = {
  width: '100%',
  height: '300px',
  backgroundImage: `url(${black_background})`
};

const Jumbotron = () => {
  return (
    <div className="jumbotron jumbotron-fluid" style={sectionStyle}>
      <div className="container">
        <h1 className="display-4 text-white">Doug Funnie Memory Game!</h1>
        <p className="lead text-white">
          Click on the images to earn points, but be careful! Don't click on a
          character twice, or your score will be reset! Highest possible score
          is 12.
        </p>
      </div>
    </div>
  );
};

export default Jumbotron;
