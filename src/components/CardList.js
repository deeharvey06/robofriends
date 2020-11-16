import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {

  const renderList = () => {
    return robots.map((robot, i) => <Card key={i} id={robot.id} name={robot.name} email={robot.email} />)
  }

  return(
    <div>
      {renderList()}
    </div>
  );
}

export default CardList;