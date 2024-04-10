'use client'

import React from 'react'
import TodoCards from './todoCards'

function TodoDisplay(props) {

console.log(" i am chnaged so rendering")
console.log(props.todos)

  return (
    <div className='grid grid-cols-3'>
      {
        props.todos.map((elem,index)=>{
          {console.log(elem,index)}
          return(
          <div key={index} className='m-2'>
          <TodoCards title={elem.title} desc={elem.description} status={elem.status}/>
          </div>
        )
        })
      }
    </div>
  )
}

export default TodoDisplay
