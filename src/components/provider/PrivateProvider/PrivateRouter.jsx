import { Navigate, useLocation } from "react-router-dom";
import React, { useContext } from "react";


import Spinner from "../../share/Spinner/Spinner";
import { AuthContext } from "../AuthProvider/AuthProvider";

const PrivateRouter = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  
  if (loading) {
    return <Spinner />;
  }

  if (user?.email) {
    return children;
  };

  return <Navigate to="/login" state={{from:location}} replace></Navigate>;
};

export default PrivateRouter;
