import { Navigate, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
// import { Homepage } from "./homepage";
// import { Login } from "./login";

export const PrivateRoute = ( {element: Homepage, ...rest } ) => {
  const [error, setError] = useState(false);
  const [authenticated, isAuthenticated] = useState(false);
  const message = "You need to login";
  
//   useEffect(() => {
//     const token = localStorage.getItem("token");

//     });

  return (
    <Route
      {...rest}
      element={isAuthenticated ? <Homepage /> : <Navigate to="/login" />}
    />
  );
};
