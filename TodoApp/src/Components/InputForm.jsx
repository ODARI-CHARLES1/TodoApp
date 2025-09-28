import React from 'react'
import { useUser } from '../Hooks/userHook'

const InputForm = () => {
  const {theme}=useUser()
  return (
    
    <>
       <form action="" className={`${theme=="dark"?"bg-[hsl(235,21%,19%)]":"dark:bg-white"}  md:w-[500px] w-[90vw] flex gap-5 items-center  h-[45px] pl-5  rounded-md bg-[hsl(235,24%,19%)]`}>
          <span className='w-5 h-5 rounded-full border-gray-600 cursor-pointer  text-center border-2 p-1' ></span>
          <input type="text" className={`${theme=="dark"?"text-white":"text-gray-600"} text-[18px] w-95 p-1 h-full border-0 outline-0 placeholder='Enter todo list`}/>
        </form>
    </>
  )
}

export default InputForm
