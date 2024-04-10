'use client'

import {useState} from "react";
import TodoInput from "./components/TodoInput";
import TodoDisplay from "./components/TodoDisplay";

function Page() {
  const [todoList, settodoList] = useState([]);

  const handletodoList = (data) => {
    settodoList(data);
  };
  return (
    <div className="bg-white ">
      <div className="text-center my-4">
        <h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-black md:text-5xl lg:text-6xl">
          <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            Better Data
          </span>{" "}
          Scalable AI.
        </h1>
        <p class="text-lg font-normal text-gray-500 lg:text-xl dark:text-black">
          Here at Flowbite we focus on markets where technology, innovation, and
          capital can unlock long-term value and drive economic growth.
        </p>
      </div>

      <div className="flex flex-row">
      <TodoInput datafromInput={handletodoList}/>
      <TodoDisplay todos={todoList}/>
      </div>
    </div>
  );
}

export default Page;
