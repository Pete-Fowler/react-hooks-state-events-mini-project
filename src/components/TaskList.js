import React from "react";
import Task from './Task';

function TaskList({ tasks, deleteTask }) {
  
  return (
    <div className="tasks">
      {tasks.map(task => <Task key={task.text} category={task.category} text={task.text} deleteTask={deleteTask}/>)}
    </div>
  );
}

export default TaskList;
