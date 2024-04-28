import React,{ useState } from 'react'
import "./section-box.css"
import TaskCard from '../taskcard/task-card'
import TodoModal from '../modal/Modal'


const SectionBox = ({head,dataArr}) => {

  const [showModal, setShowModal] = useState(false);
  const [selectedCard, setSelectedCard] = useState({ title: '', description: '' });

  const handleCardClick = ({title, description}) => {
    console.log("title/desc",title,description)
    setSelectedCard({ title, description });
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };



  return (
    <div className="section-box">
        <div className="section-box-header">
            <h5>{head}</h5>
            <button onClick={()=>handleCardClick({title:"empty",description:"empty"})}>Add</button>
        </div>
        <div className="section-box-body">
          {dataArr.map((task,index)=><  TaskCard key={index}  task={task} onClick={()=>handleCardClick(task)} />)}
          {<TodoModal show={showModal} handleClose={handleCloseModal} title={selectedCard.title} description={selectedCard.description}         />}

        </div>

    </div>
  )
}

export default SectionBox