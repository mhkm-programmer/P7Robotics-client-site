import React, { useState, useEffect } from "react";
import CategoryToysCard from "./CategoryToysCard";

const ProductsTab = () => {
  const [activeTab, setActiveTab] = useState("Robotic Pets");
  const [products, setProducts] = useState([]);

  //   console.log(products);
  useEffect(() => {
    fetch("https://toy-marketplace-server-side-mu.vercel.app/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  const filterProductsByCategory = (toyCategory) => {
    if (toyCategory === "toyCategory") {
      return products;
    } else {
      return products.filter((product) => product.toyCategory === toyCategory);
    }
  };

  const handleTabChange = (toyCategory) => {
    setActiveTab(toyCategory);
  };

  return (
    <div className="text-center">
      <h1 className="h3 text-center pb-8">
        Unlock Joy and Imagination with Fun Toys and Games
      </h1>
      <h3 className="h5 mb-16">
        Entertaining and Educational Options for Kids of All Ages
      </h3>
      <div className="flex gap-5 rounded-lg justify-center">
        <div
          className={`py-2 px-4 cursor-pointer ${
            activeTab === "Robotic Pets"
              ? "bg-green-500 text-white rounded-lg hover:shadow-lg"
              : "bg-gray-200 text-gray-800 rounded-lg hover:shadow-lg"
          }`}
          onClick={() => handleTabChange("Robotic Pets")}
        >
          Pets Robotic Toy
        </div>
        <div
          className={`py-2 px-4 cursor-pointer ${
            activeTab === "Transforming Robots"
              ? "bg-green-500 text-white rounded-lg hover:shadow-lg"
              : "bg-gray-200 text-gray-800 rounded-lg hover:shadow-lg"
          }`}
          onClick={() => handleTabChange("Transforming Robots")}
        >
          Transforming Robotic Toy
        </div>
        <div
          className={`py-2 px-4 cursor-pointer ${
            activeTab === "Battle Robots"
              ? "bg-green-500 text-white rounded-lg hover:shadow-lg"
              : "bg-gray-200 text-gray-800 rounded-lg hover:shadow-lg"
          }`}
          onClick={() => handleTabChange("Battle Robots")}
        >
          Battle Robotic Toy
        </div>
      </div>

      <div className="mt-10 grid grid-cols-2 md:gap-12 w-auto min-h-full ">
        {filterProductsByCategory(activeTab).map((product) => (
          <CategoryToysCard
            key={product._id}
            product={product}
          ></CategoryToysCard>
        ))}
      </div>
    </div>
  );
};

export default ProductsTab;
