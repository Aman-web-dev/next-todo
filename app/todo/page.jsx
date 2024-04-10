"use client";

import { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoDisplay from "./components/TodoDisplay";
import Modal from "./components/Modal";
import UploadButton from "./components/uploadButton";

function Page() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="bg-white ">
      <div className="text-center my-4">
        <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-black md:text-5xl lg:text-6xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            Manage Your Todo
          </span>{" "}
          with Next-Todo
        </h1>
        <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-black">
          Here at next Todo You can Login and manage Your Todo Data by simply
          adding them to the list and later delete or update them as Per Your
          needs{" "}
        </p>

        <section className="w-[30vw] mx-auto my-12">
          <UploadButton onClick={() => setShowModal(true)} />
        </section>
      </div>

      <div className="flex flex-row">
        {showModal ? <Modal closeModal={() => setShowModal(false)} /> : ""}
        <TodoDisplay />
      </div>
    </div>
  );
}

export default Page;