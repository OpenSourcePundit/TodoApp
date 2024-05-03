import React, { useContext } from 'react'
import Card from 'react-bootstrap/Card';
import './task-card.css'
import DropZone from '../drop-zone/drop-zone';
import { DataContext } from '../../context/DataContext';


const TaskCard = ({task,onClick,index}) => {
    const {title,description,status} = task;
    const {setActiveCard} = useContext(DataContext)
    
  return (
    <React.Fragment>
      <Card className="card-main" onClick={onClick}  
    draggable
    onDragStart={() => setActiveCard(task)} onDragEnd={()=>setActiveCard(null)} >
    <Card.Body>
      <Card.Title className="card-title">{title}</Card.Title>
      <hr />
      <Card.Text>
       <span className="card-description">{description}</span>
      </Card.Text>
    </Card.Body>
  </Card>
  <DropZone status={task.status} dropPosition={index+1} />
    </React.Fragment>
);
}

export default TaskCard