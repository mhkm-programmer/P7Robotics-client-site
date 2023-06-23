import React, { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider/AuthProvider";

import Header from "../../share/Header/Header";
import Footer from "../../share/Footer/Footer";
import PageTitle from "../../share/PageTitle/PageTitle";
import { Toaster, toast } from "react-hot-toast";

const AddToys = () => {
  const { user } = useContext(AuthContext);
  const handleAddToy = (event) => {
    event.preventDefault();

    const form = event.target;
    const sellerName = user ? user.displayName : form.name.value;

    const email = user ? user.email : form.email.value;
    const photo = user ? user.photoUrl : form.phone.value;
    const price = form.price.value;
    const details = form.details.value;
    const quantity = form.quantity.value;
    const rating = form.rating.value;
    const addToy = {
      sellerName,
      email,
      photo,
      price,
      details,
      quantity,
      rating,
    };
    console.log(addToy);

    const options = {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addToy),
    };

    fetch("https://toy-marketplace-server-side-mu.vercel.app/addToy", options)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        if (response.acknowledged == true) {
          toast.success("Successfully added Toy!");
        }
      });
  };
  return (
    <div>
      <PageTitle title="P7Robotics|Add Toys" />
      <Header></Header>
      <div className="md:mb-32 sm:mb-12">
        <h2 className="h3 text-center pt-10 pb-5">Add Your Toy</h2>

        <div>
          <main className="pt-8 pb-16 w-1/2 mx-auto">
            <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
              <div className="mt-12 max-w-lg mx-auto">
                <form onSubmit={handleAddToy} className="space-y-5">
                  <div className="flex flex-col items-center gap-y-5 gap-x-6 [&>*]:w-full sm:flex-row">
                    <div>
                      <label className="font-medium">Toy Name</label>
                      <input
                        name="name"
                        type="text"
                        required
                        className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="font-medium">Toy Photo URL</label>
                      <input
                        name="photo"
                        type="photo"
                        required
                        className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col items-center gap-y-5 gap-x-6 [&>*]:w-full sm:flex-row">
                    <div>
                      <label className="font-medium">Seller Name</label>
                      <input
                        name="name"
                        type="text"
                        defaultValue={user?.displayName}
                        required
                        className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="font-medium">Email</label>
                      <input
                        name="email"
                        type="email"
                        defaultValue={user?.email}
                        required
                        className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col items-center gap-y-5 gap-x-6 [&>*]:w-full sm:flex-row">
                    <div>
                      <label className="font-medium">Toy Sub-Category</label>
                      <input
                        name="category"
                        type="text"
                        required
                        className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                      />
                    </div>
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
                  </div>

                  <div className="flex flex-col items-center gap-y-5 gap-x-6 [&>*]:w-full sm:flex-row">
                    <div>
                      <label className="font-medium">Rating</label>
                      <input
                        name="rating"
                        type="rating"
                        min={0}
                        step={1}
                        high={5}
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

                  {/* <div>
                    <label htmlFor="phone" className="font-medium">
                      Phone number
                    </label>
                    <div className="relative mt-2">
                      <div className="absolute inset-y-0 left-3 my-auto h-6 flex items-center border-r pr-2">
                        <select className="text-sm bg-transparent outline-none rounded-lg h-full">
                          <option>BD</option>
                          <option>US</option>
                          <option>ES</option>
                          <option>MR</option>
                        </select>
                      </div>
                      <input
                        name="phone"
                        type="tel"
                        //   placeholder="+1 (555) 000-000"
                        //   defaultValue={user?.phoneNumber || ""}
                        required
                        className="w-full pl-[4.5rem] pr-3 py-2 appearance-none bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                      />
                    </div>
                  </div> */}

                  <div>
                    <label className="font-medium">Details</label>
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
                      Add A Toy
                    </button>
                    <Toaster />
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

export default AddToys;
