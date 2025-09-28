import React, { useState } from "react";
import { useUser } from "../Hooks/userHook";

const TodoList = () => {
  const { theme,setTodos,todos ,handleDelete} = useUser();
  const [hoveredId, setHoveredId] = useState(null);
  return (
    <div
      className={`${
        theme === "dark" ? "bg-[hsl(235,21%,19%)]" : "bg-white"
      } md:w-[500px] shadow-md w-[90vw] flex justify-between gap-5 items-center flex-col h-fit-content py-5 rounded-md`}
    >
     
      {todos.map((todo) => (
        <div key={todo.id} className="w-full flex flex-col items-center">
          <div
            onMouseEnter={() => setHoveredId(todo.id)}
            onMouseLeave={() => setHoveredId(null)}
            className="w-full px-5 flex items-center justify-between mb-1 text-start h-[40px]"
          >
            <p
              className={`${
                theme === "dark" ? "text-gray-300" : "text-gray-600"
              } w-90% flex items-center justify-start gap-6`}
            >
              <span className="w-5 h-5 rounded-full border-gray-600 cursor-pointer text-center border-2"></span>
              {todo.text}
            </p>
            <img
              src="./src/Assets/Images/icon-cross.svg"
              className={`size-3 cursor-pointer ${
                hoveredId === todo.id ? "block" : "hidden"
              }`}
              alt="delete"
              onClick={() => handleDelete(todo.id)}
            />
          </div>
          <hr className="w-full h-1 text-gray-600" />
        </div>
      ))}

      
      <div className="w-full px-4 flex items-center justify-between">
        <p className="text-[18px] text-gray-600 cursor-pointer">
          {todos.length} items left
        </p>
        <div className="md:flex hidden bottom-0 items-center gap-4 justify-center">
          <p className="hover:text-gray-300 text-blue-500 cursor-pointer">All</p>
          <p className="hover:text-gray-300 text-gray-600 cursor-pointer">
            Active
          </p>
          <p className="hover:text-gray-300 text-gray-600 cursor-pointer">
            Completed
          </p>
        </div>
        <p
          className="hover:text-gray-300 text-gray-600 cursor-pointer"
          onClick={() => setTodos([])}
        >
          Clear Completed
        </p>
      </div>
    </div>
  );
};

export default TodoList;
