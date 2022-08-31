import React from "react";

function CategoryFilter({ categories, selectedCategory, clickCategory }) {
  
  const buttons = categories.map(category => 
    <button 
      key={category} 
      className={selectedCategory ? 'selected' : ''}>
      {category}
    </button>);

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {buttons}
    </div>
  );
}

export default CategoryFilter;
