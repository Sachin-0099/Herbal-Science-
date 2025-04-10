import * as RouterDom from "react-router-dom";
import React, { useEffect, useState, useCallback, useRef } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ChevronDown, ChevronRight } from "lucide-react";


const SideMenu = ({ isOpen, onClose }) => {

    const [firstName, setFirstName] = useState("");
      const [forceUpdate, setForceUpdate] = useState(0); // Used to force re-render
    const [isLoggedIn, setIsLoggedIn] = useState(false);

  const menuRef = useRef(null);
  const [openSections, setOpenSections] = useState({});

  const toggleSection = useCallback((section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("user");

    setIsLoggedIn(false);
    setFirstName("");

    // ✅ Dispatch event to update all components
    window.dispatchEvent(new Event("authChange"));
  };

  const checkAuthStatus = () => {
    const storedUser = localStorage.getItem("user");
    const authToken = localStorage.getItem("authToken");

    if (storedUser && authToken) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setFirstName(parsedUser.firstname || "User");
        setIsLoggedIn(true);
      } catch (error) {
        console.error("Error parsing user data:", error);
      }
    } else {
      setIsLoggedIn(false);
    }
  };

  useEffect(() => {
    checkAuthStatus(); // Initial check

    // ✅ Listen for authChange events from SignIn
    const handleAuthChange = () => {
      checkAuthStatus();
    };

    window.addEventListener("authChange", handleAuthChange);

    return () => {
      window.removeEventListener("authChange", handleAuthChange);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  return (
    <div
      ref={menuRef}
      style={{
        ...styles.sideMenu,
        transform: isOpen ? "translateX(0)" : "translateX(-100%)",
      }}
      className="text-2xl"
    >
      <div style={styles.closeButton} onClick={onClose}>
        &#10006;
      </div>
      <div style={styles.header}>
      <h2>👨🏻 Hello, {firstName ? firstName : "User"}</h2>
      </div>

      <MenuSection title="Trending" className="text-xl">
        <ExpandableMenu
          title="Best Sellers"
          isOpen={openSections.sellers}
          toggle={() => toggleSection("sellers")}
        >
          <MenuItem text="Top Rated by Customers" link="/top-rated" />
          <MenuItem text="All-Time-Best-Seller" link="/all-time" />
          <MenuItem text="Staff Pick" link="/staff-pick" />
          <MenuItem text="Exclusive Online Offers" link="/exclusive" />
        </ExpandableMenu>
        <ExpandableMenu
          title="Trending Products"
          isOpen={openSections.products}
          toggle={() => toggleSection("products")}
        >
          <MenuItem text="Flash Deals" link="/flash" />
          <MenuItem text="Bundle Offers" link="/bundle" />
          <MenuItem text="Clearance Sale" link="/clearance" />
        </ExpandableMenu>
      
      </MenuSection>

      <MenuSection title="Shop">
        <ExpandableMenu
          title="Acrylic Accessories"
          isOpen={openSections.acrylic}
          toggle={() => toggleSection("acrylic")}
        >
          <MenuItem text="Acrylic sheets" link="/sheets" />

          <MenuItem text="Acrylic Wood" link="/mdf-wood" />
          <MenuItem text="Mdf Wood" link="/wood" />
        </ExpandableMenu>

        <ExpandableMenu
          title="UV Printing Wall Art"
          isOpen={openSections.UV}
          toggle={() => toggleSection("UV")}
        >
          <MenuItem text="Custom Frames" link="/frames" />
          <MenuItem text="Acrylic Prints" link="/prints" />
          <MenuItem text="Wall Decor" link="/wall-decor" />
          <MenuItem text="Canvas Art" link="/canvas-art" />
          <MenuItem text="Decorative Panels" link="/panels" />
        </ExpandableMenu>

     
        
      </MenuSection>

     




       
        
     

      <MenuSection title="Help and Settings">
        <MenuItem text="Your Account" link="/account" />
        <MenuItem text="Customer Section" link="/customer" />
        {isLoggedIn ? (
          <button onClick={handleLogout} >
            <MenuItem text="Log Out" link="/" />
          </button>
      ) : (
        <div className="flex flex-col space-y-2 mt-4">
          <MenuItem text="Sign In" link="/signIn" />
          <MenuItem text="Sign Up" link="/signUp" />
        </div>
      )}
      </MenuSection>
    </div>
  );
};

const ExpandableMenu = ({ title, isOpen, toggle, children }) => {


return (
  <div style={styles.expandableMenu}>
    <div style={styles.menuItem} onClick={toggle}>
      <span style={styles.menuText}>{title}</span>
      <span style={styles.menuArrow}>
        {isOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
      </span>
    </div>
    {isOpen && <div style={styles.subMenu}>{children}</div>}
  </div>
);

};

const MenuSection = ({ title, children }) => {
  return (
    <div style={styles.menuSection}>
      <h3>{title}</h3>
      {children}
    </div>
  );
};

const MenuItem = ({ text, link }) => {
  return (
    <Link to={link} style={styles.menuItem} className="menu-item">
      <span style={styles.menuText}>{text}</span>
      <span style={styles.menuArrow}>➝</span>
    </Link>
  );
};

const styles = {
  sideMenu: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "320px",
    height: "100vh",
    backgroundColor: "#fff",
    boxShadow: "2px 0 10px rgba(0,0,0,0.2)",
    overflowY: "auto",
    transition: "transform 0.3s ease-in-out",
    padding: "10px 15px",
    zIndex: 100,
  },
  closeButton: {
    position: "absolute",
    top: "5px",
    right: "0px",
    backgroundColor: "#fff",
    padding: "8px 12px",
    fontSize: "18px",
    fontWeight: "bold",
    cursor: "pointer",
    textAlign: "center",
    border: "none",
    borderRadius: "5px",
    transition: "all 0.3s ease",
    boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.2)",
    color: "#333",

    "&:hover": {
      backgroundColor: "!#3087d1",
      color: "#3087d1",
      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)",
      transform: "scale(1.05)",
    },

    "&:active": {
      transform: "scale(0.95)",
      boxShadow: "none",
    },
  },
  header: {
    backgroundColor: "#3087D1",
    color: "#fff",
    padding: "30px",
    borderRadius: "8px",
    fontWeight: "bold",
  },
  menuSection: {
    padding: "15px 0",
    borderBottom: "1px solid #ddd",
  },
  menuItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "12px",
    fontSize: "14px",
    color: "#333",
    textDecoration: "none",
    cursor: "pointer",
    borderRadius: "5px",
    border: "1px solid transparent",
    transition: "0.2s",
  },
  expandableMenu: {
    marginBottom: "10px",
  },
  subMenu: {
    paddingLeft: "15px",
    borderLeft: "2px solid #ddd",
  },
  menuText: {
    flex: 1,
  },
  menuArrow: {
    transition: "transform 0.2s ease-in-out",
  },
};

export default SideMenu;
