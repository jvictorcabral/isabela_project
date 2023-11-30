import React from 'react';
import './CardAreas.css';
import Areas from './Areas';

function CardAreas() {
  const myAreas = Areas.map((area) => (
    <div className="card" key={area.id}>
      <h1 className="h1_card">{ area.nameArea }</h1>
      <ul className="ul_card">
        {
          area.ulArea.map((liArea, id) => (
            <li key={id}>{ liArea }</li>
          ))
        }
      </ul>
    </div>
  ));

  return (
    <div className="cards">
      {myAreas}
    </div>
  );
}

export default CardAreas;
