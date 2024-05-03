import React from 'react'
import './app.css'
import SectionBox from '../box/section-box'
import { sections} from '../../utils/constants'
const AppWrapper = () => {    
  return (
    <div className="container">
    <header className="header">TO DO App</header>
    <div className="body">
        {sections?.map((sec,index)=><SectionBox key={index} head={sec.head}/>)}
    </div>
  </div>
  )
}

export default AppWrapper