import React from "react";
import { CiShop } from "react-icons/ci";
import { MdLogin, MdSearch, MdShoppingCart } from "react-icons/md";
import { HiMenu } from "react-icons/hi";

const Navbar = () => {
  return (
    <header className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-md border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50 transition-all">
      <div className="container mx-auto flex items-center justify-between px-4 py-4 md:py-5">
        {/* Logo */}
        <div className="flex items-center text-gray-900 dark:text-white text-xl font-semibold hover:scale-105 transition-transform cursor-pointer">
          <CiShop className="text-blue-600 dark:text-blue-400 w-8 h-8 mr-2" />
          E-Commerce
        </div>

        {/* Search bar */}
        <form
          className="hidden md:flex flex-1 max-w-xs mx-6 relative"
          role="search"
          aria-label="Site search"
        >
          <MdSearch
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
            size={20}
          />
          <input
            type="search"
            placeholder="Search products..."
            className="w-full pl-10 pr-3 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Search products"
          />
        </form>

        {/* Hamburger (Mobile) */}
        <div className="md:hidden flex items-center gap-4">
          <button
            aria-label="Cart"
            className="text-gray-700 dark:text-white hover:text-blue-600 dark:hover:text-blue-400"
          >
            <MdShoppingCart size={28} />
          </button>

          <button
            aria-label="Toggle menu"
            className="text-gray-700 dark:text-white focus:outline-none"
          >
            <HiMenu className="w-7 h-7" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="absolute md:static top-16 left-0 w-full md:w-auto bg-white dark:bg-gray-900 md:bg-transparent md:dark:bg-transparent shadow-md md:shadow-none rounded-b-lg md:rounded-none transition-all duration-300 ease-in-out overflow-hidden md:flex items-center gap-6 text-gray-700 dark:text-gray-300 font-medium text-base px-6 md:px-0 max-h-full">
          {/* Search bar for mobile */}
          <form
            className="flex md:hidden px-4 py-2 border-b border-gray-200 dark:border-gray-700 relative"
            role="search"
            aria-label="Site search"
          >
            <MdSearch
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
              size={20}
            />
            <input
              type="search"
              placeholder="Search products..."
              className="w-full pl-10 pr-3 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Search products"
            />
          </form>

          <div className="block py-2 md:py-0 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer">
            Home
          </div>

          <div className="flex items-center gap-1 py-2 md:py-0 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer">
            <MdShoppingCart size={20} /> Cart
          </div>

          {/* Auth Links / User Info */}
          <div className="flex items-center gap-4 md:ml-4">
            <div className="flex items-center gap-1 hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer">
              <MdLogin size={20} />
              Login
            </div>
            <div className="flex items-center gap-1 hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer">
              Sign Up
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
