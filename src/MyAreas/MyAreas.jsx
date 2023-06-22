import React from 'react';
import CardAreas from './CardAreas';
import './MyAreas.css';

function MyAreas() {
  return (
    <div className="MyAreas">
      <h1 className="h1_areas">Áreas de atuação</h1>

      <CardAreas />
    </div>
  );
}

export default MyAreas;
