import { Link, useNavigate } from "react-router-dom";
import React, { useContext, useState } from "react";

import { updateProfile } from "firebase/auth";
import { AuthContext } from "../../provider/AuthProvider/AuthProvider";
import Header from "../../share/Header/Header";
import Footer from "../../share/Footer/Footer";
import Spinner from "../../share/Spinner/Spinner";
import PageTitle from "../../share/PageTitle/PageTitle";

const SignUp = () => {
  const { user, createUser, loading } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [successfull, setSuccessful] = useState("");
  const navigate = useNavigate();
  const from = location?.state?.from?.pathname || "/";

  const handleRegister = (event) => {
    event.preventDefault();
    setSuccessful("");
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(name, photo, email, password);

    if (!password) {
      setError("Password is required");
      return;
    } else if (!/^.{0,6}$/.test(password)) {
      setError("Password must be 6 Number Long.");
      return;
    }

    createUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        // console.log(loggedUser);

        setError("");

        form.reset();
        setSuccessful("User account created successfully");
        updateUserData(result.user, name);
        updatePhotoData(result.user, photo);

        navigate(from, { replace: true });
        if (loading) {
          return <Spinner />;
        }
      })
      .catch((error) => {
        // console.log(error.message);
        setError(error.message);
      });
  };

  const updateUserData = (user, name) => {
    updateProfile(user, {
      displayName: name,
    })
      .then(() => {
        // console.log("User name updated");
      })
      .catch((error) => {
        // console.error(error.message);
        setError(error.message);
      });
  };
  const updatePhotoData = (user, photo) => {
    updateProfile(user, {
      photoURL: photo,
    })
      .then(() => {
        // console.log("user name updated");
      })
      .catch((error) => {
        console.error(error.message);
        setError(error.message);
      });
  };

  return (
    <div>
      <PageTitle title="P7Robotics|Register" />
      <Header></Header>

      <div className="pt-24 pb-36">
        <main className="w-full">
          <div className="flex-1 flex items-center justify-center h-screen">
            <div className="w-full max-w-md space-y-8 px-4 bg-white text-gray-600 sm:px-0">
              <div className=" text-center">
                <div className="mt-5 space-y-2">
                  <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">
                    Sign up
                  </h3>
                  <p className="">
                    Already have an account?{" "}
                    <Link
                      to="/login"
                      className="font-medium text-teal-600 hover:text-teal-500"
                    >
                      Log in
                    </Link>
                  </p>
                </div>
              </div>

              <form onSubmit={handleRegister} className="space-y-5">
                <p className="text-red-400">{error}</p>
                <p className="text-green-400">{successfull}</p>
                <div>
                  <label htmlFor="name" className="font-medium">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                  />
                </div>
                <div>
                  <label htmlFor="photo" className="font-medium">
                    Photo URL
                  </label>
                  <input
                    type="text"
                    name="photo"
                    required
                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                  />
                </div>
                <div>
                  <label htmlFor="password" className="font-medium">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    required
                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                  />
                </div>
                <button className="w-full px-4 py-2 text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 rounded-lg duration-150">
                  Create account
                </button>
              </form>
            </div>
          </div>
        </main>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default SignUp;
