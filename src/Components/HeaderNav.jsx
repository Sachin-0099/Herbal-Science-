import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import { CiHeart, CiGlobe } from "react-icons/ci";
import { MdOutlineMenu } from "react-icons/md";
import SideMenu from "../SideMenu";

const HeaderNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
  const [userName, setUserName] = useState(null);

  return (
    <>
      <header className="py-2 bg-white shadow-md w-full">
        <div className="w-full px-2 sm:px-10 md:px-6 flex items-center justify-between gap-4 flex-wrap md:flex-nowrap">
          {/* Left section - Hamburger and Logo */}
          <div className="flex items-center flex-shrink-0 gap-2">
          <button
  className="flex items-center text-black hover:text-[#3087d1] !bg-white border border-transparent hover:border-[#3087d1] transition-all duration-300 rounded-md p-1"
  onClick={() => setIsMenuOpen(true)}
>
  <MdOutlineMenu size={30} />
</button>

            <div className="w-28 sm:w-36 h-16 sm:h-20 mr-4">
              <img
                src="/Images/Logo.png"
                alt="Logo"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Middle - Search (Desktop only) */}
          <div className="hidden md:flex flex-grow max-w-xl">
            <div className="relative w-full">
              <input
                className="h-10 w-full bg-white rounded-md pl-10 pr-4 outline-none border border-gray-300 shadow-sm focus:border-[#3087d1]"
                placeholder="What do you want?"
              />
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-[#3087d1]" size={20} />
            </div>
          </div>

          {/* Right - Desktop nav */}
          <div className="hidden lg:flex items-center space-x-4 xl:space-x-5 flex-shrink-0">
            <a className="text-base xl:text-lg font-medium transition-all duration-200 ease-in-out hover:text-[#3087d1] hover:border-2 rounded-md border-[#3087d1] px-2 py-1" href="/acrylic">
              Joint Pain
            </a>
            <a className="text-base xl:text-lg font-medium transition-all duration-200 ease-in-out hover:text-[#3087d1] hover:border-2 rounded-md border-[#3087d1] px-2 py-1" href="/shop">
              Hair Fall
            </a>
            <a className="text-base xl:text-lg font-medium transition-all duration-200 ease-in-out hover:text-[#3087d1] hover:border-2 rounded-md border-[#3087d1] px-2 py-1" href="/photography">
              Sexual
            </a>

            <a className="flex items-center text-base xl:text-lg hover:text-[#3087d1]" href={userName ? "/profile" : "/signin"}>
              <div className="w-6 h-6 rounded-full border border-black flex items-center justify-center text-sm font-bold">
                {userName ? userName.charAt(0).toUpperCase() : "S"}
              </div>
              <span className="ml-2">
                {userName ? userName : "Sign Up / Sign In"}
              </span>
            </a>

            <a href="/wishlist">
              <CiHeart size={24} className="cursor-pointer hover:text-[#3087d1]" />
            </a>
            <a href="/cart">
              <FiShoppingBag size={24} className="cursor-pointer hover:text-[#3087d1]" />
            </a>

            {/* Language Switcher */}
            <div className="relative">
              <CiGlobe
                size={24}
                className="cursor-pointer hover:text-[#3087d1]"
                onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
              />
            </div>
          </div>

          {/* Mobile Icons */}
          <div className="flex lg:hidden items-center space-x-3 sm:space-x-2">
            <a href="/wishlist">
              <CiHeart size={22} className="cursor-pointer hover:text-[#3087d1]" />
            </a>
            <a href="/cart">
              <FiShoppingBag size={22} className="cursor-pointer hover:text-[#3087d1]" />
            </a>
            <div className="relative text-black">
              <CiGlobe
                size={22}
                className="cursor-pointer hover:text-[#3087d1]"
                onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
              />
            </div>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="w-full px-4 sm:px-6 py-2 md:hidden">
          <div className="relative w-full">
            <input
              className="h-10 w-full bg-white rounded-md pl-10 pr-4 border border-gray-300 shadow-sm focus:border-[#3087d1] placeholder-gray-600"
              placeholder="What do you want?"
            />
            <FaSearch
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-[#3087d1]"
              size={20}
            />
          </div>
        </div>
      </header>

      {/* Side Menu */}
      <SideMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
};

export default HeaderNav;
