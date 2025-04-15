import React, { useState, useEffect, useRef } from "react";
import { throttle } from "lodash";  // Import throttle from lodash
import SideMenu from "./SideMenu";
import HeaderNav from "./HeaderNav";
import HeaderTop from "./HeaderTop";

const PageLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [hideHeaderTop, setHideHeaderTop] = useState(false);
  const scrollRef = useRef(false); // Using a ref to track scroll status

  useEffect(() => {
    // Throttled scroll handler
    const handleScroll = throttle(() => {
      if (window.scrollY > 30 && !scrollRef.current) {
        setHideHeaderTop(true);  // Only update if necessary
        scrollRef.current = true; // Flag to avoid re-triggering on each scroll
      } else if (window.scrollY <= 30 && scrollRef.current) {
        setHideHeaderTop(false);  // Reset when scrolling back to the top
        scrollRef.current = false; // Reset flag
      }
    }, 200); // Adjust throttle delay as needed

    window.addEventListener("scroll", handleScroll);
    
    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex min-h-screen bg-white overflow-hidden">
      {/* Main Content Area */}
      <div
        className={`flex-grow flex flex-col transition-all duration-300 ${
          isSidebarOpen ? "md:ml-0" : "ml-0"
        } overflow-x-hidden`}
      >
        {/* Header Section */}
        <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-lg transition-all duration-300">
          {!hideHeaderTop && <HeaderTop />}
          <HeaderNav />
        </div>

        {/* Page Content */}
        <div className="w-full pt-[140px] sm:pt-[130] mt-18 lg:mt-0 md:mt-2">
          {children}
        </div>
      </div>

      {/* Mobile Sidebar Toggle */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="md:hidden fixed top-4 left-4 z-30 p-2 bg-gray-800 text-white rounded-full"
      >
        {isSidebarOpen ? "Close" : "Open"} Sidebar
      </button>
    </div>
  );
};

export default PageLayout;
