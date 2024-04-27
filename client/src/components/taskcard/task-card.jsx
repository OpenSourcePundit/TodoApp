import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './task-card.css'


const TaskCard = ({task}) => {
    const {title,description} = task;
    
  return (
    <Card >
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>
       {description}
      </Card.Text>
      <Button variant="primary">Delete</Button>
    </Card.Body>
  </Card>
);
}

export default TaskCard