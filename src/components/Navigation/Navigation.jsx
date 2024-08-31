import React from "react";

const Navigation = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <span className="text-2xl text-gray-900 font-bold flex items-center">
            <img
              src="https://143432284.fs1.hubspotusercontent-eu1.net/hub/143432284/hubfs/logo-horiz-charik-1.png?width=498&height=150&name=logo-horiz-charik-1.png"
              alt="Charik Logo"
              className="h-10"
            />
          </span>
          <div className="flex space-x-6 text-gray-900 text-lg font-semibold">
            <a href="#" className="hover:text-blue-500 transition-colors"> {/* Change text color on hover */}
              Charik
            </a>
            <a href="#" className="hover:text-blue-500 transition-colors">
              Pricing
            </a>
            <a href="#" className="hover:text-blue-500 transition-colors">
              About
            </a>
            <a href="#" className="hover:text-blue-500 transition-colors">
              Resources
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
