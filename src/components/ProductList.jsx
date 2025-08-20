import React from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ category, allProducts, searchQuery }) => {
  let displayedProducts = [];

  if (category.name === "All") {
    displayedProducts = allProducts;
  } else {
    displayedProducts = category.products || [];
  }

  
  if (searchQuery.trim() !== "") {
    displayedProducts = displayedProducts.filter((prod) =>
      prod.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  return (
    <div>
      
      <h2 className=" text-lg sm:text-xl md:text-2xl font-bold mb-4 sticky top-0  py-3 z-10  text-green-800 ">
        {category.name} Products
      </h2>

      {displayedProducts.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-4">
          {displayedProducts.map((prod) => (
            <ProductCard key={prod.id} product={prod} />
          ))}
        </div>
      ) : (
        <p className="text-gray-500 text-sm sm:text-base">No products found.</p>
      )}
    </div>
  );
};

export default ProductList;
