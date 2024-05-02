import React, { useContext, useState } from 'react';
import "./drop-zone.css";
import { DataContext } from '../../context/DataContext';

const DropZone = ({status,dropPosition}) => {
  const {handleDrop} = useContext(DataContext)
  const [showDrop,setShowDrop] = useState(false)
  return (
    <div className={showDrop?'drop-zone':'hide-drop'} onDragEnter={()=>setShowDrop(true) } onDragLeave={()=>setShowDrop(false)} onDrop={()=>{handleDrop(status,dropPosition);setShowDrop(false)}} onDragOver={(e)=>e.preventDefault()} >..Drop here..</div>
  )
}

export default DropZone;