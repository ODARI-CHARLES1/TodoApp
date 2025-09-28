import React from 'react'
import { useUser } from '../Hooks/userHook'

const Filter = () => {

    const {theme}=useUser()
  return (
      <div className={`md:w-[500px] shadow-md  ${theme==="dark"?"dark:bg-[hsl(235,21%,19%)]":"dark:bg-white"} w-[90vw] flex items-center justify-center gap-5 md:hidden    h-fit-content py-5  rounded-md`}>
              <p  className='hover:text-white text-blue-500 cursor-pointer'>All</p>
              <p className='hover:text-white text-gray-600 cursor-pointer'>Active</p>
              <p className='hover:text-white text-gray-600 cursor-pointer'>Completed</p>
       </div>
  )
}
export default Filter
