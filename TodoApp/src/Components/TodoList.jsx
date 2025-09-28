import React from "react";
import { useUser } from "../Hooks/userHook";
import Lists from "./Lists";
const TodoList = () => {
  const { theme,setTodos,todos ,filter,handleActiveId,activeId} = useUser();
  return (
    <div
      className={`${
        theme === "dark" ? "bg-[hsl(235,21%,19%)]" : "bg-white"
      } md:w-[500px] shadow-md w-[90vw] flex justify-between gap-5 items-center flex-col h-fit-content py-5 rounded-md`}
    >
     
     <Lists/>

      
      <div className="w-full px-4 flex items-center justify-between">
        <p className="text-[18px] text-gray-600 cursor-pointer">
          {todos.length} items left
        </p>
        <div className="md:flex hidden bottom-0 items-center gap-4 justify-center">
          {
                filter.map((item,id)=>(
                  activeId==id?<p key={id} onClick={()=>handleActiveId(id)}  className={`${theme=="dark"?"hover:text-white":"hover:text-gray-300"} text-blue-500 cursor-pointer`}>{item}</p>
                  : <p key={id} onClick={()=>handleActiveId(id)}  className={`${theme=="dark"?"hover:text-white":"hover:text-gray-300"} text-gray-600 cursor-pointer`}>{item}</p>
                ))
              } 
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
