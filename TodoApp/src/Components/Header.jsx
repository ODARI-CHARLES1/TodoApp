import React from 'react'
import { useUser } from '../Hooks/userHook'

const Header = () => {

  const {theme,changeTheme}=useUser()
  return (
    <>
      <div className='flex ${theme==="dark"?"dark:bg-[hsl(235,21%,19%)]":"dark:bg-white"} md:w-[500px] w-[90vw] items-center justify-between'>
          <h1 className='text-white text-4xl'>TODO</h1>
          {
            theme=="dark"? 
           <img className='cursor-pointer' onClick={()=>changeTheme()} src="../src/Assets/Images/icon-sun.svg" alt="theme-icon" />:
           <img className='cursor-pointer' onClick={()=>changeTheme()} src="../src/Assets/Images/icon-moon.svg" alt="theme-icon" />
          }
        </div>
    </>
  )
}

export default Header
