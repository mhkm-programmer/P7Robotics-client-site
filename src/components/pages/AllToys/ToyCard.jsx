import React from "react";
import { Link } from "react-router-dom";

const ToyCard = ({ product,index }) => {
  const { sellerName, toyName, toyCategory, price, availableQuantity, _id } =
    product;
  return (
    <>
      <tr key={_id}>
        <td className="py-3 px-6 whitespace-nowrap">{index + 1}</td>
        <td className="py-3 px-6 whitespace-nowrap">{sellerName}</td>
        <td className="px-6 py-4 whitespace-nowrap">{toyName}</td>
        <td className="px-6 py-4 whitespace-nowrap">{toyCategory}</td>
        <td className="px-6 py-4 whitespace-nowrap">{price}</td>
        <td className="px-6 py-4 whitespace-nowrap">{availableQuantity}</td>
        <td className="text-right px-6 whitespace-nowrap">
          <Link to={`/toyDetails/${_id}`}>
            <button className="mx-auto items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              View Details
            </button>
          </Link>
        </td>
      </tr>
    </>
  );
};

export default ToyCard;
