import React from 'react'
import { useState } from 'react'

function Input({taskList, setTaskList}) {
    const [input, setInput] = useState("")

    const handleAddTask = (e) => {
      e.preventDefault()
      setTaskList([...taskList, input])
      setInput("")
    }

  return (
    <div className='flex flex-row items-center justify-center gap-3'>
      <input 
      className="border rounded-lg px-2.5 py-1.5 text-lg" 
      type='text' 
      placeholder='Add a task' 
      value={input} 
      onChange={(e)=> setInput(e.target.value)}
      />
      <button className='bg-blue-500 text-white py-1 px-3.5 rounded-lg font-semibold hover:opacity-70'
       onClick={handleAddTask}
       >Add</button>

      
    </div>
    
  )
}

export default Input
