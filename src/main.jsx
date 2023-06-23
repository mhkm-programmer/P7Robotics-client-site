import "./index.css";

import "@smastrom/react-rating/style.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import AuthProvider from "./components/provider/AuthProvider/AuthProvider";
import ErrorPage from "./components/pages/ErrorPage/ErrorPage";
import Login from "./components/layouts/LoginLayout/Login";

import React from "react";
import ReactDOM from "react-dom/client";
import SignUp from "./components/layouts/LoginLayout/SignUp";

import Blogs from "./components/pages/Blogs/Blogs";
import ALlToys from "./components/pages/AllToys/ALlToys";
import MyToys from "./components/pages/MyToys/MyToys";
import AddToys from "./components/pages/AddToys/AddToys";
import AboutUs from "./components/pages/About/AboutUs";
import ContactUs from "./components/pages/Contact/ContactUs";
import Terms from "./components/pages/TernsAndCondition/Tems";
import Main from "./components/layouts/Main/Main";
import Home from "./components/pages/Home/Home";
import SingleToysDetails from "./components/pages/Home/SingleToysDetails";
import EditCard from "./components/pages/MyToys/EditCard";
import PrivateRouter from "./components/provider/PrivateProvider/PrivateRouter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
  },

  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <SignUp></SignUp>,
  },
  {
    path: "/toyDetails/:id",
    element:<PrivateRouter><SingleToysDetails></SingleToysDetails></PrivateRouter>,
    loader: ({ params }) =>
      fetch(`https://toy-marketplace-server-side-mu.vercel.app/products/${params.id}`),
  },
  {
    path: "/all-toys",
    element: <PrivateRouter><ALlToys></ALlToys></PrivateRouter>,
  },
  {
    path: "/myToys",
    element: <PrivateRouter><MyToys></MyToys></PrivateRouter>,
  },
  {
    path: "/editCard/:id",
    element: <EditCard></EditCard>,
    loader: ({ params }) =>
    fetch(`https://toy-marketplace-server-side-mu.vercel.app/products/${params.id}`)
  },
  {
    path: "/addToy",
    element: <AddToys></AddToys>,
    
  },
  {
    path: "/blog",
    element: <Blogs></Blogs>,
  },
  {
    path: "/about",
    element: <AboutUs></AboutUs>,
  },
  {
    path: "/contact",
    element: <ContactUs></ContactUs>,
  },
  {
    path: "/terms",
    element: <Terms></Terms>,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
