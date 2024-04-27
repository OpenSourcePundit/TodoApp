import React from 'react'
import './app.css'
import SectionBox from '../box/section-box'
import { sections } from '../../utils/constants'
const AppWrapper = () => {

    const toDo = [{ id: 1, title: 'Task 1', description: 'Description for Task 1' },
    { id: 2, title: 'Task 2', description: 'Description for Task 2' },]

  return (
    <div className="container">
    <header className="header">Header</header>
    <div className="body">
        {sections.map((sec,index)=><SectionBox key={index} head={sec.head} dataArr={toDo} />)}
    </div>
  </div>
  )
}

export default AppWrapper