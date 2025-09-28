import React, { useState } from 'react'
import { useUser } from '../Hooks/userHook'

const Lists = () => {
    const [hoveredId,setHoveredId]=useState()
    const {todos,handleCompleted,markDone,handleDelete,theme}=useUser()
  return (
    <>
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
              } w-90% flex items-center justify-start gap-6 ${markDone.includes(todo.id)?"line-through text-gray-600":""}`}
            >
              <span onClick={()=>handleCompleted(todo.id)} className={`w-5 h-5 flex items-center justify-center ${markDone.includes(todo.id)?"mark-done":""}  rounded-full border-gray-600 cursor-pointer text-center border-2`}>
                <img className={`${markDone.includes(todo.id)?"":"hidden"}`} src="/icon-check.svg" alt="mark-icon" />
              </span>
              {todo.text}
            </p>
            <img
              src="/icon-cross.svg"
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
    </>
  )
}

export default Lists
