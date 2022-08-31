import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [ tasks, setTasks] = useState(TASKS);
  const [ selectedCategory, setSelectedCategory ] = useState('All');

  function clickCategory(category) {
    setSelectedCategory(selectedCategory => category);
  }

  function deleteTask(text) {
    setTasks(tasks => tasks.filter(task => 
      task.text !== text))
  }

  const shownTasks = tasks.filter(task => selectedCategory === 'All' || task.category === selectedCategory)

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selectedCategory={selectedCategory} clickCategory={clickCategory}/>
      <NewTaskForm categories={CATEGORIES} setTasks={setTasks}/>
      <TaskList tasks={shownTasks} deleteTask={deleteTask}/>
    </div>
  );
}

export default App;
