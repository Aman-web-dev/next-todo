'use client'

import {useState,useEffect}from 'react'
import TodoCards from './todoCards'
import { fetchTodoData } from '../serverActions/serverActions';


function TodoDisplay(props) {
  const [todoList, setTodoList] = useState([]);

  const getData=async()=>{
    console.log("getting")
    const res=await fetchTodoData()
    setTodoList(res)
  }
  useEffect(()=>{
    console.log("checking")
      getData()
  },[])

  return (
    <div className='grid grid-cols-4'>
      {
        todoList.map((elem,index)=>{
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
