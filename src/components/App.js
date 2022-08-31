import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [ tasks, setShownTasks] = useState(TASKS);



  function deleteTask(text) {
    setShownTasks(tasks => tasks.filter(task => 
      task.text !== text))
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter />
      <NewTaskForm />
      <TaskList tasks={tasks} deleteTask={deleteTask}/>
    </div>
  );
}

export default App;
