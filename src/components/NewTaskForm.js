import React from "react";

function NewTaskForm({ categories }) {
  
  const options = categories.map(cat => cat === 'All' ? null : <option key={cat}>{cat}</option>)
  
  return (
    <form className="new-task-form">
      <label>
        Details
        <input type="text" name="text" />
      </label>
      <label>
        Category
        <select name="category">
          {options}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
