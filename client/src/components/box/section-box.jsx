import React,{ useContext, useState } from 'react'
import "./section-box.css"
import TaskCard from '../taskcard/task-card'
import TodoModal from '../modal/Modal'
import DropZone from '../drop-zone/drop-zone'
import { DataContext } from '../../context/DataContext'


const SectionBox = ({head}) => {

  const {activeCard,setActiveCard,tasks} = useContext(DataContext)

  const [showModal, setShowModal] = useState(false); //to toggle modal
  

  const handleCardClick = (e,{title, description,status,id}) => {
    e.preventDefault()
   
    setActiveCard({ title, description,status,id });
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };


  return (
    <div className="section-box"   >
        <div className="section-box-header">
            <h5>{head}</h5>
            <button onClick={(e)=>handleCardClick(e,{title:"",description:"",status:head})}>Add</button>
        </div>
        <hr />
        <div className="section-box-body">
          <DropZone status={head} dropPosition={0}/>
          {tasks?.map((task,index)=>task.status===head && <TaskCard key={index} index={index} task={task} onClick={(e)=>handleCardClick(e,task)} />)}
          {<TodoModal show={showModal} handleClose={handleCloseModal} title={activeCard?.title} description={activeCard?.description} status={activeCard?.status}        />}

        </div>

    </div>
  )
}

export default SectionBox