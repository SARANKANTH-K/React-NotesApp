import React from 'react'
import './Notes.css'

const Note = ({id,text,editHandler,deleteHandler}) => {
  return (
    
    <div className='note'>
        <div className='note-body'>{text}</div>
        <div className='note_footer' style={{justifyContent: "flex-end"}}></div>
        <button className='note_save' onClick={()=>deleteHandler(id)}>Delete</button>
        <button className='note_save' onClick={()=>editHandler(id,text)}>Edit</button>
    </div>
  )
}

export default Note