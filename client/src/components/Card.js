import React from 'react';

const Card = props => {
  return (
    <div className='card'>
      <span>Name: {props.players.name}</span>
      <br></br>
      <span>Country: {props.players.country}</span>
    </div>
  );
};

export default Card;
