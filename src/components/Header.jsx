import Logo from "/assets/images/logo.svg";
import OpenMenuIcon from "/assets/images/icon-menu.svg";
import CloseMenuIcon from "/assets/images/icon-menu-close.svg";
import { useState } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // Mobile menu toggle
  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  return (
    <header>
      <div className=" flex items-center justify-between p-4 font-Inter font-regular text-sm">
        <div className="">
          <img src={Logo} alt="Logo" className="w-[35px] h-fit " />
        </div>
        <nav className="">
          <ul className="md:flex space-x-8 hidden">
            <li>
              <a
                href="#home"
                className="text-gray-700 hover:text-soft-red duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#new"
                className="text-gray-700 hover:text-soft-red duration-300"
              >
                New
              </a>
            </li>
            <li>
              <a
                href="#popular"
                className="text-gray-700 hover:text-soft-red duration-300"
              >
                Popular
              </a>
            </li>
            <li>
              <a
                href="#trending"
                className="text-gray-700  hover:text-soft-red duration-300"
              >
                Trending
              </a>
            </li>
            <li>
              <a
                href="#categories"
                className="text-gray-700  hover:text-soft-red duration-300"
              >
                Categories
              </a>
            </li>
          </ul>

          {/* Mobile Hamburger */}
          <div className="flex items-center md:hidden">
            <button
              onClick={handleMobileMenuToggle}
              aria-label="Toggle mobile menu"
              className="bg-transparent border-none outline-none "
            >
              <img
                src={mobileMenuOpen ? CloseMenuIcon : OpenMenuIcon}
                alt="hamburger"
                className="w-6 h-6 border-none outline-none"
              />
            </button>
          </div>
        </nav>
        {mobileMenuOpen && (
          <div className="flex justify-center items-center h-screen w-full pt-3  md:hidden  bg-black/80 backdrop-grayscale-50 fixed inset-0 z-40">
            <div className=" w-full h-screen top-0">
              <div className="flex items-center md:hidden">
                <button
                  onClick={handleMobileMenuToggle}
                  aria-label="Toggle mobile menu"
                  className="bg-transparent border-none outline-none z-50 top-4 right-0 absolute"
                >
                  <img
                    src={mobileMenuOpen ? CloseMenuIcon : OpenMenuIcon}
                    alt="hamburger"
                    className="w-6 h-6 border-none outline-none"
                  />
                </button>
              </div>
              <div className="absolute duration-300 top-0 right-0 w-8/12 h-screen  shadow-lg z-10 flex flex-col">
                <ul className=" h-screen  w-full bg-white  flex flex-col justify-start items-start space-y-6 pt-32 pl-7 text-1xl font-semibold">
                  <li>
                    <a
                      href="#home"
                      className="text-gray-700 hover:text-soft-red duration-300"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="#about"
                      className="text-gray-700 hover:text-soft-red duration-300"
                    >
                      New
                    </a>
                  </li>
                  <li>
                    <a
                      href="#services"
                      className="text-gray-700 hover:text-soft-red duration-300"
                    >
                      Popular
                    </a>
                  </li>
                  <li>
                    <a
                      href="#contact"
                      className="text-gray-700 hover:text-soft-red duration-300"
                    >
                      Trending
                    </a>
                  </li>
                  <li>
                    <a
                      href="#contact"
                      className="text-gray-700 hover:text-soft-red duration-300"
                    >
                      Categories
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
