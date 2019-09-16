import React from 'react';

const Card = props => {
  return (
    <div className='card'>
      <h3>Name: {props.players.name}</h3>
      <h3>Country: {props.players.country}</h3>
    </div>
  );
};

export default Card;
