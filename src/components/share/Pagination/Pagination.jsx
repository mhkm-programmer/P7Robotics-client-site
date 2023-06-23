

import React, { useState } from "react";

const Pagination = ({
  itemsPerPage,
  totalItems,
  paginate,
  setItemsPerPage,
}) => {
  const pageNumbers = [];
  const [currentPage, setCurrentPage] = useState(1);

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
    paginate(pageNumber);
  };

  const handleItemsPerPageChange = (event) => {
    const newItemsPerPage = parseInt(event.target.value);
    setCurrentPage(1);
    setItemsPerPage(newItemsPerPage);
    paginate(1);
  };

  const options = [6, 12, 18, 24, 30];
  return (
    <div>
      <div className="text-center m-10">
        {pageNumbers.map((number) => (
          <button
          
            key={number}
            onClick={() => {
              handleClick(number);
            }}
            className={`page-link p-4 rounded-lg shadow-md m-3 ${
              currentPage === number ? "bg-[#FF9900]" : ""
            }`}
          >
            {number}
          </button>
        ))}

        <div className="items-per-page">
          <label htmlFor="itemsPerPage">Select product per Page:</label>
          <select
            className="p-4 m-2 rounded-lg shadow-md"
            id="itemsPerPage"
            value={itemsPerPage}
            onChange={handleItemsPerPageChange} // Updated function binding
          >
            {options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
