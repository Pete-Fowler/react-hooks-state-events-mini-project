import React, { useState } from "react";

function NewTaskForm({ categories, setTasks }) {
  const [ formData, setFormData ] = useState({text: '', category: 'Code'});

  const options = categories.map(cat => cat === 'All' ? null : <option key={cat}>{cat}</option>)
  
  function formChange(e) {
    const key = e.target.name;
    const value = e.target.value;
    setFormData({ ...formData, [key]: value });
  }

  function onTaskFormSubmit(e) {
    e.preventDefault();
    setTasks(tasks => [...tasks, formData]);
  }

  return (
    <form className="new-task-form" onSubmit={onTaskFormSubmit}>
      <label>
        Details
        <input type="text" name="text" value={formData.text} onChange={formChange} />
      </label>
      <label>
        Category
        <select name="category" value={formData.category} onChange={formChange}>
          {options}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
