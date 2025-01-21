import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Components/Pages/Home";
import QRScanner from "../Components/Pages/QRScanner";
import AboutUs from "../Components/Pages/AboutUs";
import Login from "../Components/Pages/Login";
import Signup from "../Components/Pages/Signup";
import PageNotFound from "../Components/Pages/Pagenotfound";
import AddDishForm from "../Components/Pages/AddDishForm";
import InventoryPage from "../Components/Pages/Inventory";
import PrivateRoute from "../Utils/PrivateRoute";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        {/* Public routes  */}
        <Route path="/" element={<Home />} />
        <Route path="/Qrscanner" element={<QRScanner />} />
        <Route path="/Aboutus" element={<AboutUs />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="*" element={<PageNotFound />} />

        {/* Private routes  */}
        <Route
          path="/adddish"
          element={
            <PrivateRoute>
              <AddDishForm />
            </PrivateRoute>
          }
        />
        <Route
          path="/inventory"
          element={
            <PrivateRoute>
              <InventoryPage />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
};

export default AllRoutes;
