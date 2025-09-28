import React, { createContext, useEffect, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");
  const [todos, setTodos] = useState([
    { id: 1, text: "Job around the park" },
    { id: 2, text: "Buy groceries" },
    { id: 3, text: "Complete React project" },
    { id: 4, text: "Read 10 pages of a book" },
  ]);
  
   const handleDelete = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      localStorage.setItem("theme", "dark");
    }
  }, []);

  const changeTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <UserContext.Provider value={{ theme, changeTheme,todos,setTodos,handleDelete}}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
