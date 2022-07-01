import React, { useState } from "react";
import "./App.css";
//bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
// react router
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
//toast
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
// firease
import firebase from "firebase/app";
import "firebase/auth";
// components
import Home from "./Pages/Home";
import PageNotFound from "./Pages/PageNotFound";
import Signin from "./Pages/Signin";
import Signup from "./Pages/Signup";

import { UserContext } from "./context/UserContext";

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <ToastContainer />
      <UserContext.Provider value={{ user, setUser }}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/signin" element={<Signin />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="*" element={<PageNotFound />} />
        </Routes>
      </UserContext.Provider>
    </Router>
  );
};

export default App;
