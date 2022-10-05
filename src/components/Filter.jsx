import React from 'react'

const Filter = ({switchFilter , checkTodos, unCheckTodos}) => {

  return (
    <div className='todo-container '>
    <button onClick={()=>switchFilter("ALL")} className='filter-btn'>
      Show All
    </button>
    <button onClick={()=>switchFilter("COMPLETED")} className='filter-btn'>
      Show Completed
    </button>
    <button onClick={()=>switchFilter("UNCOMPLETED")} className='filter-btn'>
      Show Uncompleted
    </button>
    <button onClick={()=>checkTodos()} className='filter-btn'>
      Check all
    </button>
    <button onClick={()=>unCheckTodos()} className='filter-btn'>
      UnCheck all
    </button>
    </div>
    
  )
}

export default Filter