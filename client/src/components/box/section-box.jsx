import React from 'react'
import "./section-box.css"
import TaskCard from '../taskcard/task-card'
const SectionBox = ({head,dataArr}) => {



  return (
    <div className="section-box">
        <div className="section-box-header">
            <h5>{head}</h5>
            <button>+</button>
        </div>
        <div className="section-box-body">
          {dataArr.map((task,index)=><  TaskCard key={index}  task={task} />)}


        </div>

    </div>
  )
}

export default SectionBox