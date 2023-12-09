import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { AiOutlineShoppingCart, AiOutlineLogin } from "react-icons/ai";
import { CartItem } from "../../cart/cart";
import { FaWindowClose } from "react-icons/fa";
import "./navbar.scss";

export interface NavBarProps {
  cartItems: CartItem[];
  toggleDrawer?: () => void;
}

type SideMenuProps = {
  cartItems: CartItem[];
  toggleMenu: () => void;
  showCart: any;
};

const SideDrawer: React.FC<SideMenuProps> = ({
  cartItems,
  toggleMenu,
  showCart,
}) => {
  function displaySideCart() {
    toggleMenu();
    showCart();
  }
  return (
    <div
      style={{ zIndex: 10000 }}
      className="fixed top-0 text-center left-0 h-full w-64 bg-white text-white z-50  lg:hidden transition-transform ease-in-out duration-300 shadow side-menu"
    >
      <div
        className="text-gray-600 float-right p-2 hover:text-red-400 rounded"
        onClick={toggleMenu}
      >
        <FaWindowClose size={16} />
      </div>
      <ul className="p-4 space-y-4 text-black my-4">
        <li>
          <Link to="/" className="text-gray-500 hover:text-black">
            Home
          </Link>
        </li>
        <li>
          <Link to="/shopping" className="text-gray-500 hover:text-black">
            Products
          </Link>
        </li>
        <li>
          <Link to="/aboutus" className="text-gray-500 hover:text-black">
            About Us
          </Link>
        </li>
        <li>
          <Link to="#" className="text-gray-500 hover:text-black">
            Contact Us
          </Link>
        </li>
        <li onClick={displaySideCart}>
          <span className="flex items-center justify-center gap-2 text-gray-500 hover:text-black">
            <AiOutlineShoppingCart size={20} /> Cart
            {cartItems.length > 0 && <span className="bubble bubble-1"></span>}
          </span>
        </li>
        <li>
          <Link
            to="/auth/sign-in"
            className="flex items-center justify-center gap-2 text-gray-700 hover:text-yellow-700"
          >
            <span>
              <AiOutlineLogin size={20} />
            </span>
            <span> Login & Register</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

const LandingNavbar: React.FC<NavBarProps> = ({ cartItems, toggleDrawer }) => {
  const [isDrawerMenuOpen, setDrawerMenuOpen] = useState(false);
  const [isTransparent, setTransparent] = useState(true);
  //get current path
  const currentPath = useLocation();
  const toggleMenu = () => {
    setDrawerMenuOpen(!isDrawerMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY <= window.innerHeight * 0.7) {
        setTransparent(true);
      } else {
        setTransparent(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarClass =
    isTransparent && currentPath.pathname == "/"
      ? "transparent-nav"
      : "visible-nav shadow";

  return (
    <div className={`bg-white text-gray-600`}>
      <nav
        className={`mx-auto flex items-center justify-between p-4 ${navbarClass}`}
        id="nav-bar"
      >
        <div className="lg:hidden flex items-center gap-2">
          <button
            onClick={toggleMenu}
            className="text-black p-2 focus:outline-none"
          >
            <FaBars size={24} />
          </button>
          <Link to="#" onClick={toggleDrawer}>
            <span className="flex items-center text-black justify-center gap-2 hover:text-gray-400">
              <AiOutlineShoppingCart size={20} /> Cart
              {cartItems.length > 0 && (
                <span className="bubble bubble-1"></span>
              )}
            </span>
          </Link>
        </div>
        <Link to="/" className="text-2xl font-extrabold brand-name">
          Dambula
        </Link>
        <ul className="hidden lg:flex space-x-4">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/shopping">Products</Link>
          </li>
          <li>
            <Link to="/aboutus">About Us</Link>
          </li>
          <li>
            <Link to="#">Contact Us</Link>
          </li>
          <li>
            <Link
              to="#"
              onClick={toggleDrawer}
              className="cursor-pointer flex items-center justify-content-center gap-2"
            >
              <span>
                <AiOutlineShoppingCart size={20} />
              </span>
              <span> Cart</span>
              {cartItems.length > 0 && (
                <span className="bubble bubble-1"></span>
              )}
            </Link>
          </li>
          <li>
            <Link
              to="/auth/sign-in"
              className="flex items-center justify-content-center gap-2"
            >
              <span>
                <AiOutlineLogin size={20} />
              </span>
              <span> Login & Register</span>
            </Link>
          </li>
        </ul>
      </nav>
      {isDrawerMenuOpen && (
        <SideDrawer
          cartItems={cartItems}
          toggleMenu={toggleMenu}
          showCart={toggleDrawer}
        />
      )}
    </div>
  );
};

export default LandingNavbar;
