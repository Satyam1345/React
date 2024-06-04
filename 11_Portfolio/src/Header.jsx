import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "./assets/Logo.jpg" ;
import About from './About';

function Header() {
  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center">
            <img
              src={Logo}
              className="mr-3 h-12 rounded-xl"
              alt="Logo"
              height = {60}
              width={40}
            />
          </Link>
          <div className="flex items-center lg:order-2">
            <Link
              to="#"
              className="text-gray-800 hover:bg-gray-50 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none active:scale-95 active:ring-2 active:ring-grey-300"
            >
              Log in
            </Link>
            <Link
              to="#"
              className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none active:scale-95 active:ring-2 active:ring-grey-300"
            >
              Sign Up
            </Link>
          </div>
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
                  to="/"
                  className={({isActive}) =>
                    `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-blue-800"  : "text-gray-800"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({isActive}) =>
                    `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-blue-800"  : "text-gray-800"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contactus"
                  className={({isActive}) =>
                    `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-blue-800"  : "text-gray-800"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="https://github.com/Satyam1345"
                  className={({isActive}) =>
                    `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-blue-800"  : "text-gray-800"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                > 
                  Github
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
