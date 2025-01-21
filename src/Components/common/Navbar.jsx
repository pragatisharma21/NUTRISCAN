import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineUserCircle, HiOutlineLogout } from "react-icons/hi";
import { useAuth } from "../../Context/AuthContext";
import AddModel from "./AddModel";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false); 
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const { user, logout, userData } = useAuth();

  const unguardedRoutes = [
    { name: "QR Scanner", route: "/Qrscanner" },
    { name: "About Us", route: "/Aboutus" },
    { name: "Login", route: "/Login" },
  ];

  const guardedRoutes = [
    { name: "QR Scanner", route: "/Qrscanner" },
    { name: "About Us", route: "/Aboutus" },
    { name: "Dashboard", route: "/inventory" },
    { name: "Add Dish", route: "/adddish" },
  ];

  const handleProfileToggle = () => setIsProfileOpen(!isProfileOpen);

  console.log(userData.name)
  const handleLogout = () => {
    logout()
  };

  const handleAddDish = () => {
    setIsModalOpen(true);
  };

  return (
    <nav className="bg-[#F6B41A] text-black shadow-md py-2 sticky top-0 ">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <div>
          <Link to="/" className="text-2xl font-bold hover:text-gray-700 transition-colors">
            Nutri Scan
          </Link>
        </div>

        <div className=" flex gap-8 items-center">
        <div className="hidden md:flex space-x-6">
          {(user ? guardedRoutes : unguardedRoutes).map((item) => (
            <Link
              key={item.route}
              to={item.route}
              className="text-lg hover:text-gray-700 transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>


        <div className="md:flex ml-auto space-x-3">
          {user && (
            <div className="relative">
              <button onClick={handleProfileToggle} className="flex flex-col justify-center items-center space-x-1 text-center">
                <HiOutlineUserCircle className="w-8 h-8 text-black" />
                <p className="text-[14px] font-semibold">{userData.name}</p>
              </button>

              {isProfileOpen && (
                <div className="absolute right-0 mt-2 bg-white border shadow-md rounded-lg p-2 w-48">
                  <button
                    onClick={() => console.log("Profile clicked")}
                    className="block text-sm text-gray-700 w-full text-left py-2"
                  >
                    Profile
                  </button>
                  <button
                    onClick={handleLogout}
                    className="block text-sm text-gray-700 w-full text-left py-2"
                  >
                    <HiOutlineLogout className="inline mr-2" />
                    Logout
                  </button>
                  <button
                    onClick={handleAddDish}
                    className="block text-sm text-gray-700 w-full text-left py-2 mt-2"
                  >
                    Add Dish
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
        </div>

        {/* Mobile Dropdown */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-lg focus:outline-none">
            <svg className="w-6 h-6" fill="red" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Links */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-4">
          {(user ? guardedRoutes : unguardedRoutes).map((item) => (
            <Link key={item.route} to={item.route} className="block text-lg hover:text-gray-700 transition-colors">
              {item.name}
            </Link>
          ))}
        </div>
      )}

      {/* Add Dish Modal */}
      <AddModel isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </nav>
  );
};

export default Navbar;
