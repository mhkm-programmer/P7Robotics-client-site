import React, { useEffect, useState } from "react";
import Pagination from "../../share/Pagination/Pagination";
import ToyCard from "./ToyCard";
import Footer from "../../share/Footer/Footer";

import Header from "../../share/Header/Header";
import PageTitle from "../../share/PageTitle/PageTitle";

const AllToys = () => {
  const [products, setProducts] = useState([]);
  const [searchText, setSearchText] = useState("");

  //For pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);

  useEffect(() => {
    fetch("https://toy-marketplace-server-side-mu.vercel.app/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleSearch = () => {
    fetch(`https://toy-marketplace-server-side-mu.vercel.app/getToysByText/${searchText}`)
      .then((res) => res.json())
      .then((result) => {
        // console.log(result);
        setProducts(result);
      });
  };

 

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div>
     <PageTitle title="P7Robotics|All Toys" />
      <Header></Header>
      <div className="text-center ">
        <input
          type="text"
         
          onChange={(e) => setSearchText(e.target.value)}
          className="w-1/2 py-2 pl-10 pr-4 mr-4 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
          placeholder="Search Your Toys"
        />
        <button onClick={handleSearch}>Search</button>
      </div>
     
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
          <table className="w-full table-auto text-sm text-left">
            <thead className="bg-gray-50 text-gray-600 font-medium border-b">
              <tr>
                <th scope="col" className="py-3 px-6">
                Serial
                </th>
                <th scope="col" className="py-3 px-6">
                  Username
                </th>
                <th scope="col" className="py-3 px-6">
                  Email
                </th>
                <th scope="col" className="py-3 px-6">
                  Position
                </th>
                <th scope="col" className="py-3 px-6">
                  Salary
                </th>
                <th scope="col" className="py-3 px-6">
                  Salary
                </th>
                <th scope="col" className="py-3 px-6"></th>
              </tr>
            </thead>
            <tbody className="text-gray-600 divide-y">
              {currentItems.slice(0, 20).map((product,index) => (
                <ToyCard key={product._id} product={product} index={index}></ToyCard>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* Pagination */}

      <div>
        {/* Render the pagination component */}
        <Pagination
          itemsPerPage={itemsPerPage}
          totalItems={products.length}
          paginate={paginate}
          setItemsPerPage={setItemsPerPage}
        />
      </div>
      <Footer></Footer>
    </div>
  );
};

export default AllToys;
