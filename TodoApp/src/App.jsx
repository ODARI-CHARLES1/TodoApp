 import React from 'react'
import Header from './Components/Header'
import InputForm from './Components/InputForm'
import TodoList from './Components/TodoList'
import Filter from './Components/Filter'
import { useUser } from './Hooks/userHook'

 const App = () => {
  const {theme}=useUser()
   return (
     <div className={`w-full ${theme==="dark"?"dark:bg-[hsl(235,21%,11%)] main-dark":"dark:bg-white main-light"} h-screen flex flex-col lg:pt-40 pt-20 lg:gap-10 gap-2.5 items-center  `}>
       <Header/>
       <InputForm/>
       <TodoList/>
       <Filter/>
       <h1 className="text-gray-600 t">Drag and drop to reorder list</h1>
     </div>
   )
 }
 
 export default App
 