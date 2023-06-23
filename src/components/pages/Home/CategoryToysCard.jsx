import React from "react";
import { Link } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'

const CategoryToysCard = ({ product }) => {
  const { toyName, toyPicture, price, rating, _id } = product;
  return (
    <div>
     

      <div className="w-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <figure className="w-auto ">
          <img className="h-80 w-full rounded-t-lg  object-cover" src={toyPicture} alt="" />
        </figure>
        <div className="p-5">
          <h3>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {toyName}
            </h5>
          </h3>
          <div className="flex justify-between">
            <div>
              <p>Price $ {price}</p>
            </div>
            <div className="flex items-center gap-2">
                      <Rating
                        style={{ maxWidth: 100 }}
                        value={rating}
                        readOnly
                      />
                      <span className="font-bold">{rating}</span>
                    </div>
          </div>
          <Link to={`/toyDetails/${_id}`}>
          <button  className="btn-gradiant w-full mt-6">
            View Details
         
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoryToysCard;
