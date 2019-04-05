import React from 'react';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-sm py-3">
      <div className="container-fluid">
        <div className="col-lg-4">
          <span className="navbar-brand">Doug Funnie Memory Game</span>
        </div>
        <div className="col-lg-4">
          <span className="navbar-brand">Click an image to begin!</span>
        </div>
        <div className="col-lg-4">
          <span className="navbar-brand">Score: 0 | Top Score: 0</span>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
