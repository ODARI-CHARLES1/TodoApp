import React, { createContext, useEffect, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");
  const [todos, setTodos] = useState([]);
  const [activeId, setActiveId] = useState(0);
  const [filter, setFilter] = useState(["All", "Active", "Completed"]);
  const [markDone, setMarkDone] = useState([]);
  const [newTodo, setNewTodo] = useState("");
 


  const handleSubmit = (e) => {
    e.preventDefault();

    if (newTodo.trim() === "") return; 

    const newTask = {
      id: Date.now(), 
      text: newTodo.trim(),
    };

    setTodos((prev) => [...prev, newTask]);
    setNewTodo(""); 
  };
  useEffect(() => {
    const savedTodos = localStorage.getItem("todos");
    const savedMarkDone = localStorage.getItem("markDone");

    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    } else {
      setTodos([
        { id: 1, text: "Job around the park" },
        { id: 2, text: "Buy groceries" },
        { id: 3, text: "Complete React project" },
        { id: 4, text: "Read 10 pages of a book" },
      ]);
    }

   console.log(markDone)
     
    if (savedMarkDone) {
      setMarkDone(JSON.parse(savedMarkDone));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    localStorage.setItem("markDone", JSON.stringify(markDone));
  }, [markDone]);

  const handleCompleted = (id) => {
    setMarkDone((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    );
  };

  const handleDelete = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
    setMarkDone((prev) => prev.filter((doneId) => doneId !== id));
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

  const handleActiveId = (id) => {
    setActiveId(id);
    localStorage.setItem("activeId", id);
  };

  useEffect(() => {
    const savedId = localStorage.getItem("activeId");
    if (savedId) {
      setActiveId(Number(savedId));
    }
  }, []);

  return (
    <UserContext.Provider
      value={{
        theme,
        changeTheme,
        todos,
        setTodos,
        handleDelete,
        filter,
        setFilter,
        activeId,
        handleActiveId,
        handleCompleted,
        markDone,
        handleSubmit,
        setNewTodo,
        newTodo,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
