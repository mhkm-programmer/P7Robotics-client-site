import React, { useState } from "react";

import { Link, useLoaderData } from "react-router-dom";
import Header from "../../share/Header/Header";
import Footer from "../../share/Footer/Footer";
import PageTitle from "../../share/PageTitle/PageTitle";
import { Toaster, toast } from "react-hot-toast";

const EditCard = () => {
  const toys = useLoaderData();
  const [control, setControl] = useState(false);

  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const price = form.price.value;
    const details = form.details.value;
    const quantity = form.quantity.value;

    const updateToy = {
      price,
      details,
      quantity,
    };
    console.log(updateToy);

    fetch(`https://toy-marketplace-server-side-mu.vercel.app/myToys/${toys._id}`,
      {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updateToy),
      })
      .then((res) => res.json())
      .then((result) => {
        if (result.modifiedCount > 0) {
          setControl(!control);
          toast.success("Successfully Toy updated!")
        }
        console.log(result);
      });
  };
  return (
    <div>
      <PageTitle title="P7Robotics|Edit Toys" />
      <Header></Header>
      <div>
        <h2 className="h3 text-center pt-10 pb-5">My Toy Update</h2>

        <div>
          <main className="pt-8 pb-16 w-1/2 mx-auto">
            <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
              <div className="mt-12 max-w-lg mx-auto">
                <form onSubmit={handleUpdate} className="space-y-5">
                  <div className="flex flex-col items-center gap-y-5 gap-x-6 [&>*]:w-full sm:flex-row">
                    <div>
                      <label className="font-medium">Quantity</label>
                      <input
                        type="number"
                        name="quantity"
                        min={0}
                        step={1}
                        required
                        className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="font-medium">Price</label>
                      <input
                        name="price"
                        type="price"
                        required
                        className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="font-medium">Details description</label>
                    <textarea
                      required
                      typeof="text"
                      name="details"
                      className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                    ></textarea>
                  </div>
                    <div>
                  
                    <button
                      type="submit"
                      className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
                    >
                      Update My Toy
                    </button>
                    <Toaster/>
                    </div>
                
                </form>
              </div>
            </div>
          </main>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default EditCard;
