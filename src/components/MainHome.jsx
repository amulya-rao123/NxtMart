import React, { useEffect, useState } from "react";
import CategorySidebar from "./CategorySidebar";
import ProductList from "./ProductList";
import Loader from "./Loader";
import Footer from "./Footer";

const MainHome = ({ searchQuery = "", setSearchQuery }) => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch("https://apis2.ccbp.in/nxt-mart/category-list-details")
      .then((res) => res.json())
      .then((data) => {
        let cats = data.categories || [];

        // Flatten all products
        const flattened = cats.flatMap((c) => c.products || []);
        setAllProducts(flattened);

        // Add "All" category
        const allCategory = { name: "All", products: flattened };
        cats = [allCategory, ...cats];
        setCategories(cats);

        // Restore last selected or default to "All"
        const savedName = localStorage.getItem("lastCategoryName");
        let initial = cats.find((c) => c.name === savedName) || allCategory;
        setSelectedCategory(initial);

        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        const allCategory = { name: "All", products: [] };
        setCategories([allCategory]);
        setSelectedCategory(allCategory);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col pt-16">
        <Loader />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Mobile search bar */}
      <div className="flex md:hidden items-center justify-between px-4 py-2 bg-gray-200">
        <img
          src="https://i.postimg.cc/5NJgcQ2k/Logo-2.png"
          alt="Logo"
          className="h-10"
        />
        <input
          type="text"
          placeholder="🔎 Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border-2 border-gray-300 focus:border-green-500 rounded px-3 py-1 w-2/3"
        />
      </div>

      {/* Sidebar + product list */}
      <div className="flex flex-1 overflow-hidden flex-col md:flex-row p-2">
        <CategorySidebar
          categories={categories}
          selectedCategory={selectedCategory}
          onSelect={(cat) => {
            setSelectedCategory(cat);
            localStorage.setItem("lastCategoryName", cat.name);
          }}
        />

        <div className="flex-1 p-4 overflow-y-auto pb-24 md:pb-6 md:ml-64">
          {selectedCategory && (
            <>
              {/* ✅ Desktop-only heading */}
              <h2 className="hidden md:block text-2xl font-bold text-gray-800 mb-4 sticky top-0 bg-white py-2 z-10 shadow-sm">
                {selectedCategory.name} Products
              </h2>

              <ProductList
                category={selectedCategory}
                allProducts={allProducts}
                searchQuery={searchQuery}
              />
            </>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MainHome;
