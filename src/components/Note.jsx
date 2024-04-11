import React from 'react'
import Notes from './Notes'

const Note = ({ notes = [], setNote = () => {} }) => {
  return (
    <div>
      {notes.map((notes) => {
        return <Notes key={notes.id} content={notes.text} />
      })}
    </div>
  )
}

export default Note
