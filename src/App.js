import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/Header.js";
import Home from "./components/Home.js";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { auth } from "./firebase";
import { useStateValue } from "./components/StateProvider";

function App() {
  // eslint-disable-next-line
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    //will only run once when the app component loads
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>>", authUser);

      if (authUser) {
        //the user just loggen in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        })
      }
    });
    // eslint-disable-next-line
  }, []);
  return (
    <Router>
      <div className="app">
          <Routes>
            <Route path="/login" element={< Login /> } />
            <Route path="/checkout" element={[ <Header />, <Checkout /> ] } />
            <Route path="/" element={[ <Header />, <Home /> ]} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;


