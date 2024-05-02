import React,{ useContext, useState } from 'react'
import "./section-box.css"
import TaskCard from '../taskcard/task-card'
import TodoModal from '../modal/Modal'
import DropZone from '../drop-zone/drop-zone'
import { DataContext } from '../../context/DataContext'


const SectionBox = ({head}) => {

  const {activeCard,setActiveCard,tasks} = useContext(DataContext)

  const [showModal, setShowModal] = useState(false); //to toggle modal
  

  const handleCardClick = ({title, description}) => {
    setActiveCard({ title, description });
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };


  return (
    <div className="section-box"   >
        <div className="section-box-header">
            <h5>{head}</h5>
            <button onClick={()=>handleCardClick({title:"",description:""})}>Add</button>
        </div>
        <div className="section-box-body">
          <DropZone status={head} dropPosition={0}/>
          {tasks?.map((task,index)=>task.status===head && <TaskCard key={index} index={index} task={task} onClick={()=>handleCardClick(task)} />)}
          {<TodoModal show={showModal} handleClose={handleCloseModal} title={activeCard?.title} description={activeCard?.description}         />}

        </div>

    </div>
  )
}

export default SectionBox