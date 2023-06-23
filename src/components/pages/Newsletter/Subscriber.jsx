import React, { useState } from "react";

import { Link } from "react-router-dom";

const Subscriber = () => {
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
      e.preventDefault();
      // Your newsletter subscription logic here
    };
  
    const handleReset = () => {
      setEmail('');
    };
    return (
        <section className=" md:pt-8 pb-16 md:pb-24 max-w-screen-xl mx-auto ">
        <div className="relative overflow-hidden  py-14 rounded-2xl px-4 md:px-8 md:mx-8">
          <div className="relative z-10 max-w-xl mx-auto sm:text-center">
            <div className="space-y-3">
              <h3 className="text-3xl text-black font-bold">
                Never Miss a Recipe!
              </h3>
              <p className="text-black leading-relaxed font-semibold">
                Join thousands of FoodNetwork subscribers and get our best recipes
                delivered each week!
              </p>
            </div>
            <div className="mt-6">
              <form
                onSubmit={handleSubmit}
                className="flex items-center justify-center bg-white rounded-lg p-1 sm:max-w-md sm:mx-auto"
              >
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="text-gray-500 w-full p-2 outline-none"
                />
                <button
                  type="submit"
                  onClick={handleReset}
                  className="p-2 px-3 rounded-lg font-medium text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 duration-150 outline-none shadow-md focus:shadow-none sm:px-4"
                >
                  Subscribe
                </button>
              </form>
              <p className="mt-3 max-w-lg text-[15px] text-black font-semibold sm:mx-auto">
                No spam ever, we are care about the protection of your data. Read
                our{" "}
                <Link to="/terms" className="underline" href="javascript:void(0)">
                  {" "}
                  Privacy Policy{" "}
                </Link>
              </p>
            </div>
          </div>
          {/* <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-gray-200 via-gray-400 to-gray-500" ></div> */}
          <div
            className="absolute inset-0 opacity-50 w-full h-full bg-cover bg-no-repeat bg-center shadow-2xl"
            style={{
              backgroundImage: `url(${"https://i.ibb.co/xqrpNmq/news.jpg"})`,
            }}
          ></div>
        </div>
      </section>
    );
};

export default Subscriber;