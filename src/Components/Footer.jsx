import React from "react";
import { CiShop } from "react-icons/ci";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 pt-10 shadow-inner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between gap-8">
          {/* Brand */}
          <div className="w-full sm:w-1/2 md:w-1/4">
            <div className="flex items-center text-gray-800 text-2xl font-bold">
              <CiShop className="w-8 h-8 mr-2" />
              eCommerce
            </div>
            <p className="mt-3 text-sm text-gray-500">
              Explore the latest trends and deals at our store.
            </p>
          </div>

          {/* Categories */}
          <div className="w-full sm:w-1/2 md:w-1/4">
            <h3 className="text-sm font-semibold text-gray-800 mb-2">CATEGORIES</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-purple-600 transition-colors">First Link</a></li>
              <li><a href="#" className="hover:text-purple-600 transition-colors">Second Link</a></li>
              <li><a href="#" className="hover:text-purple-600 transition-colors">Third Link</a></li>
              <li><a href="#" className="hover:text-purple-600 transition-colors">Fourth Link</a></li>
            </ul>
          </div>

          <div className="w-full sm:w-1/2 md:w-1/4">
            <h3 className="text-sm font-semibold text-gray-800 mb-2">RESOURCES</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-purple-600 transition-colors">Docs</a></li>
              <li><a href="#" className="hover:text-purple-600 transition-colors">Guides</a></li>
              <li><a href="#" className="hover:text-purple-600 transition-colors">API</a></li>
              <li><a href="#" className="hover:text-purple-600 transition-colors">Support</a></li>
            </ul>
          </div>

          <div className="w-full sm:w-1/2 md:w-1/4">
            <h3 className="text-sm font-semibold text-gray-800 mb-2">COMPANY</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-purple-600 transition-colors">About</a></li>
              <li><a href="#" className="hover:text-purple-600 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-purple-600 transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-purple-600 transition-colors">Privacy</a></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 mt-10"></div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between py-6 text-sm text-gray-500">
          <p className="text-center sm:text-left">
            © {new Date().getFullYear()} Rohan Shah eCommerce —
            <a
              href="https://twitter.com/rohanshah2090"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1 text-purple-600 hover:underline"
            >
              @rohan_shah
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
