import { useState } from 'react'
import Note from './components/Note'
function App() {
  const [notes, setNotes] = useState([
    {
      id: 1,
      text: 'my name is jamil afzal',
    },
    {
      id: 2,
      text: 'Hello World !',
    },
  ])

  return (
    <>
      <div>
        <Note notes={notes} setNotes={setNotes} />
      </div>
    </>
  )
}

export default App
