import { Link, useLocation, useNavigate } from "react-router-dom";
import React, { useContext, useRef, useState } from "react";

import { AuthContext } from "../../provider/AuthProvider/AuthProvider";
import app from "../../../firebase/firebase.config";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import Spinner from "../../share/Spinner/Spinner";
import Header from "../../share/Header/Header";
import Footer from "../../share/Footer/Footer";
import PageTitle from "../../share/PageTitle/PageTitle";

const auth = getAuth(app);
const Login = () => {
  const { signIn, signInWithGoogle, loading } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [successful, setSuccessful] = useState("");
  const emailRef = useRef();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

 
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        setSuccessful("User logged successful");
        setError("");
        // console.log(loggedUser);
        navigate(from, { replace: true });
        
        if (loading) {
          return <Spinner />;
        }
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        const loggedUser = result.user;
        setSuccessful("User logged successful");
        navigate(from, { replace: true });
        // console.log(loggedUser);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleResetPassword = (e) => {
    const email = emailRef.current.value;
    if (!email) {
      setError("PLease provide your email address");
    }
    sendPasswordResetEmail(auth, email)
      .then(() => {
        setError("Please check your email");
      })
      .catch((error) => {
        // console.log(error);
        setError(error.message);
      });
  };

  return (
    <div>
    <PageTitle title="P7Robotics|Login" />
      <Header></Header>
      <div className="w-full px-6 py-8 md:px-8 lg:w-1/3 mx-auto">
        <div className="flex justify-center mx-auto">
          <img
            className="w-auto h-auto sm:h-8"
            src="/src/assets/logoTransparent.png"
            alt=""
          />
        </div>

        <p className="mt-3 text-xl text-center text-gray-600 dark:text-gray-200">
          Welcome back!
        </p>
        <div className="mb-6 text-center ">
          <Link
            to="/register"
            className="text-sm text-blue-500 hover:underline dark:text-blue-400"
          >
            Don’t have an account yet? Sign up
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-x-3">
          <button
            onClick={handleGoogleSignIn}
            className="flex items-center justify-center py-2.5 border rounded-lg hover:bg-gray-50 duration-150 active:bg-gray-100"
          >
            <svg
              className="w-5 h-5"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_17_40)">
                <path
                  d="M47.532 24.5528C47.532 22.9214 47.3997 21.2811 47.1175 19.6761H24.48V28.9181H37.4434C36.9055 31.8988 35.177 34.5356 32.6461 36.2111V42.2078H40.3801C44.9217 38.0278 47.532 31.8547 47.532 24.5528Z"
                  fill="#4285F4"
                />
                <path
                  d="M24.48 48.0016C30.9529 48.0016 36.4116 45.8764 40.3888 42.2078L32.6549 36.2111C30.5031 37.675 27.7252 38.5039 24.4888 38.5039C18.2275 38.5039 12.9187 34.2798 11.0139 28.6006H3.03296V34.7825C7.10718 42.8868 15.4056 48.0016 24.48 48.0016Z"
                  fill="#34A853"
                />
                <path
                  d="M11.0051 28.6006C9.99973 25.6199 9.99973 22.3922 11.0051 19.4115V13.2296H3.03298C-0.371021 20.0112 -0.371021 28.0009 3.03298 34.7825L11.0051 28.6006Z"
                  fill="#FBBC04"
                />
                <path
                  d="M24.48 9.49932C27.9016 9.44641 31.2086 10.7339 33.6866 13.0973L40.5387 6.24523C36.2 2.17101 30.4414 -0.068932 24.48 0.00161733C15.4055 0.00161733 7.10718 5.11644 3.03296 13.2296L11.005 19.4115C12.901 13.7235 18.2187 9.49932 24.48 9.49932Z"
                  fill="#EA4335"
                />
              </g>
              <defs>
                <clipPath id="clip0_17_40">
                  <rect width="48" height="48" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>

        <div className="flex items-center justify-between mt-4">
          <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/4"></span>

          <a
            href="#"
            className="text-xs text-center text-gray-500 uppercase dark:text-gray-400 hover:underline"
          >
            or login with email
          </a>

          <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>
        </div>
        <form onSubmit={handleLogin}>
          <p className="text-red-400">{error}</p>
          <p className="text-green-400">{successful}</p>
          <div className="mt-4">
            <label
              className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
              htmlFor="email"
            >
              Email Address
            </label>
            <input
              name="email"
              ref={emailRef}
              required
              className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
              type="email"
            />
          </div>

          <div className="mt-4">
            <label
              className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
              htmlFor="password"
            >
              Password
            </label>
            <input
              name="password"
              required
              className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
              type="password"
            />
            <div className="text-right">
              <p>
                Forget your password?{" "}
                <button
                  onClick={handleResetPassword}
                  className="bt text-teal-600"
                >
                  Reset
                </button>
              </p>
            </div>
          </div>

          <div className="mt-6">
            <button
              type="submit"
              className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Login;
