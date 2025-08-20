import React from "react";

const CategorySidebar = ({ categories, selectedCategory, onSelect }) => {
  return (
    <div
      className="
        bg-gray-100 
        md:w-64 
        flex md:flex-col flex-row 
        overflow-x-auto md:overflow-y-auto
        whitespace-nowrap md:whitespace-normal
        p-2 md:p-4
        md:fixed md:top-18 md:bottom-0 md:left-0
      "
    >
      {categories.map((category) => (
        <button
          key={category.name}
          onClick={() => {
            onSelect(category);
            localStorage.setItem("lastCategoryName", category.name);
          }}
          className={`
            px-2 py-1 text-xs      
            md:px-4 md:py-2 md:text-base 
            rounded-lg mr-2 md:mr-0 mb-0 md:mb-2
            ${
              selectedCategory?.name === category.name
                ? "bg-green-600 text-white"
                : "bg-green-200 text-gray-900"
            }
          `}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
};

export default CategorySidebar;
