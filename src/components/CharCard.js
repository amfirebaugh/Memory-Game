import React from 'react';

const cardStyle = {
  maxHeight: '200px',
  objectFit: 'cover',
  objectPosition: '0 0'
};

const CharCard = props => {
  return (
    <div className="col-md-3">
      <div
        className="card border-dark mb-4"
        key={props.id}
        onClick={() => props.handleClick(props)}
      >
        <img
          className="card-img"
          alt={props.name}
          src={props.image}
          data-clicked={props.isClicked}
          style={cardStyle}
        />
      </div>
    </div>
  );
};

export default CharCard;
