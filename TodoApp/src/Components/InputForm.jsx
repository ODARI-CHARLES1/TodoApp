import React from "react";
import { useUser } from "../Hooks/userHook";

const InputForm = () => {
  const { theme,handleSubmit,setNewTodo,newTodo } = useUser(); 
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className={`${
          theme === "dark"
            ? "bg-[hsl(235,21%,19%)]"
            : "bg-white"
        } md:w-[500px] w-[90vw] flex gap-5 items-center h-[45px] pl-5 rounded-md shadow-md`}
      >
        <span className="w-5 h-5 rounded-full border-gray-600 cursor-pointer text-center border-2 p-1"></span>

        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Enter todo"
          className={`${
            theme === "dark" ? "text-white" : "text-gray-600"
          } text-[18px] w-full p-1 h-full border-0 outline-0 bg-transparent`}
        />
      </form>
    </>
  );
};

export default InputForm;
