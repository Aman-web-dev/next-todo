'use client'

import { fetchTodoData ,addTodoInDb ,UpdateTodoStatus ,deleteTodo} from '@/app/todo/serverActions/serverActions';
import React, { createContext, useState, useContext } from 'react';



const TodoContext = createContext({
  todos: [],
  addTodo: (todo) => {},
  updateTodo: (todo_id, updatedData) => {},
  deleteOneTodo: (todo_id) => {},
  fetchTodo:()=>{},
});

export const useTodos = () => useContext(TodoContext);

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  const addTodo = async (newTodo) => {
    const result = await addTodoInDb(newTodo, "api/post")
    console.log(result)
    fetchTodo()
  };

  const updateTodo = async (todo_id, updatedData) => {
  const res=await   UpdateTodoStatus("api/put", todo_id, updatedData);
    fetchTodo()
  };

  const deleteOneTodo = async (todo_id) => {
   const res= await  deleteTodo("api/delete", todo_id);
    fetchTodo()
  };
  


  const fetchTodo=async()=>{
    const data = await fetchTodoData("api/get");
    setTodos(data)
  }

  return (
    <TodoContext.Provider
      value={{ todos, addTodo, updateTodo, deleteOneTodo,fetchTodo }}
    >
      {children}
    </TodoContext.Provider>
  );
};