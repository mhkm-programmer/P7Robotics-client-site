import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../share/Header/Header";
import Footer from "../../share/Footer/Footer";

import PageTitle from "../../share/PageTitle/PageTitle";

import { Toaster, toast } from "react-hot-toast";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [toys, setToys] = useState([]);

  const options = {
    method: "GET",
    headers: {
      authorization: `Bearer ${localStorage.getItem("toy-access-token")}`,
    },
  };

  const url = `https://toy-marketplace-server-side-mu.vercel.app/myToys?email=${user?.email}`;
  useEffect(() => {
    fetch(url, options)
      .then((res) => res.json())
      .then((data) => {
        if (!data.error) {
          setToys(data);
        } else {
          navigate("/");
        }
      });
  }, [user]);

  //Define Delete operation for a item
  const handleDelete = (id) => {
    const proceed = confirm("Are you want to delete?");
    if (proceed) {
      const options = { method: "DELETE" };

      fetch(`https://toy-marketplace-server-side-mu.vercel.app/myToys/${id}`, options)
        .then((response) => response.json())
        .then((response) => {
          console.log(response);
          if (response.deletedCount > 0) {
            toast.success("Successfully Toy Deleted!");
            const remaining = toys.filter((toy) => toy._id !== id);
            setToys(remaining);
          }
        })
        .catch((err) => console.error(err));
    }
  };
  // Define my toys sort by price
  // useEffect(() => {
  //   fetchData();
  // }, [sortOrder]);

  // const fetchData = async () => {

  //       fetch(`https://toy-marketplace-server-side-mu.vercel.app/updateToy?sort=${sortOrder}`)
  //       .then(res=>res.json())
  //       .then(data=>{
  //         setToys(data);
  //       })

  //     }
  // const handleSortOrderChange = (event) => {
  //   setSortOrder(event.target.value);
  // };

  return (
    <div>
      <PageTitle title="P7Robotics|My Toys" />
      <Header></Header>
      {/* <div className="flex justify-center mt-4">
        <label className="mr-2">Sort By:</label>
        <select value={sortOrder} onChange={handleSortOrderChange}>
          <option value="">Select Option</option>
          <option value="asc">Price Ascending</option>
          <option value="desc">Price Descending</option>
        </select>
      </div> */}
      <div className="flex justify-center mt-4">
        <label className="mr-2">Sort By:</label>
        <select>
          <option value="">Select Option</option>
          <option value="asc">Price Ascending</option>
          <option value="desc">Price Descending</option>
        </select>
      </div>

      <div>
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
          <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
            <table className="w-full table-auto text-sm text-left">
              <thead className="bg-gray-50 text-gray-600 font-medium border-b">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Serial
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Price
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Available quantity
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Details description
                  </th>
                  <th scope="col" className="px-6 py-3">
                    <span className="sr-only">Edit</span>
                  </th>
                  <th scope="col" className="px-6 py-3">
                    <span className="sr-only">Delete</span>
                  </th>
                </tr>
              </thead>
              <tbody className="text-gray-600 divide-y">
                {toys.map((toy, index) => (
                  <tr key={toy._id}>
                    <td className="py-3 px-6 whitespace-nowrap">{index + 1}</td>
                    <td className="py-3 px-6 whitespace-nowrap">
                      {" "}
                      $ {toy.price}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {toy.quantity}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {toy.details}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <Link to={`/editCard/${toy._id}`}>
                        <button className="py-2 px-3 font-medium text-indigo-600 hover:text-indigo-500 duration-150 hover:bg-gray-50 rounded-lg">
                          Edit
                        </button>
                      </Link>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button
                        onClick={() => {
                          handleDelete(toy._id);
                        }}
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Delete
                      </button>
                      <Toaster />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="md:mt-64 sm:mt-12">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default MyToys;
