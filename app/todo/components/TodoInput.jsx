"use client";

import { useEffect, useState } from "react";
import { addTodoInDb,fetchTodoData } from "../serverActions/serverActions";
import TodoDisplay from "./TodoDisplay";


function TodoInput(props) {
  const [todo, setTodo] = useState({ title: "",description:"", status: "" });
  const [todoList, setTodoList] = useState([]);
  const [loading,setLoading]=useState(false)



  const handleTodoInput =async (e) => {
    e.preventDefault();
    console.log("putting",loading)
    addTodoInDb(todo,'/api/post')
    getData()
    setTodo({ title: "",description:"", status: "" });
  };

  const getData=async()=>{
    setLoading(true)
    console.log("getting")
    const res=await fetchTodoData()
    setTodoList(res)
    setLoading(false)
  }


  useEffect(()=>{
    console.log("checking")
      getData()
  },[])

  useEffect(()=>{
    console.log("list",todoList)
    console.log("setting")
    props.datafromInput(todoList)
  },[todoList])

  

  return (
    <div class="w-full max-w-xs mx-4 my-auto" onSubmit={(e)=>handleTodoInput(e)}> 
      <form class="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 mb-4 ">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="Todo">
            Todo
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="todo"
            type="text"
            placeholder="Todo"
            value={todo.title}
           
            onChange={(e)=>{setTodo({...todo,title:e.target.value})}}
          />
        </div>
        <section className="my-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="Todo">
            Description
          </label>
          <textarea
            id="message"
            minLength={40}
            rows="4"
            class="block p-2.5 w-full text-sm text-gray-900  rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  dark:border-gray-600  dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Write your thoughts here..."
            value={todo.description}
            onChange={(e)=>{setTodo({...todo,description:e.target.value})}}
          ></textarea>
        </section>

        
<section className="my-4">
<label class="block text-gray-700 text-sm font-bold mb-2" for="Todo">
            Status
          </label>
  <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
  value={todo.status}
  onChange={(e)=>{setTodo({...todo,status:e.target.value})}}
  >
    <option value="todo">Todo</option>
    <option value="done">Done</option>
    <option value="cancelled">Cancelled</option>
    <option value="postponed">postponed</option>
  </select>

  </section>



        <div class="flex items-center justify-between">
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            {loading?"Wait...":"Add Todo"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default TodoInput;
