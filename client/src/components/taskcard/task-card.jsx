import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './task-card.css'


const TaskCard = ({task,onClick}) => {
    const {title,description} = task;
    
  return (
    <Card className="card-main" onClick={onClick}  >
    <Card.Body>
      <Card.Title className="card-title">{title}</Card.Title>
      <hr />
      <Card.Text>
       <p className="card-description">{description}</p>
      </Card.Text>
    </Card.Body>
  </Card>
);
}

export default TaskCard