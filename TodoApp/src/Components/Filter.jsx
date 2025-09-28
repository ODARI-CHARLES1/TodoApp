import React from 'react'
import { useUser } from '../Hooks/userHook'

const Filter = () => {
  const {filter,activeId,handleActiveId}=useUser()
    const {theme}=useUser()
  return (
      <div className={`md:w-[500px] shadow-md  ${theme==="dark"?"dark:bg-[hsl(235,21%,19%)]":"dark:bg-white"} w-[90vw] flex items-center justify-center gap-5 md:hidden    h-fit-content py-5  rounded-md`}>
              {
                filter.map((item,id)=>(
                  activeId==id?<p key={id} onClick={()=>handleActiveId(id)}  className='hover:text-white text-blue-500 cursor-pointer'>{item}</p>
                  : <p key={id} onClick={()=>handleActiveId(id)}  className='hover:text-white text-gray-600 cursor-pointer'>{item}</p>
                ))
              }     
       </div>
  )
}
export default Filter