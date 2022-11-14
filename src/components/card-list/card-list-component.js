import React from 'react';
import Card from '../card/card';
import './card-list-style.css';

const CardList = ({ monsters }) => (
  <div className="card-list">
    {monsters.map((monster) => (
      <Card monster={monster} />
    ))}
  </div>
);

export default CardList;
