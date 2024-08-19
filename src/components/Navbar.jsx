import React from "react";
import { FaCaretDown, FaCartShopping } from "react-icons/fa6";
import { IoMdSearch } from "react-icons/io";
import Darkmode from "./Darkmode";

const Navbar = ({ handleOrderpopup }) => {
  const MenuLinks = [
    {
      id: 1,
      name: "Home",
      link: "/#",
    },
    {
      id: 2,
      name: "Shop",
      link: "/shop",
    },
    {
      id: 3,
      name: "About",
      link: "/about",
    },
    {
      id: 4,
      name: "Blog",
      link: "/blog",
    },
  ];
  const DropDownLinks = [
    {
      id: 1,
      name: "Trending Products",
      link: "/#",
    },
    {
      id: 2,
      name: "Best Selling",
      link: "/#",
    },
    {
      id: 3,
      name: "Top Rated",
      link: "/#",
    },
  ];
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white">
      <div className="py-4">
        <div className="container flex justify-between">
          <div className="flex items-center gap-5">
            <a
              href="#"
              className="text-primary font-semibold text-2xl sm:text-3xl uppercase tracking-widest "
            >
              Eshop
            </a>
            {/* Menu Item */}
            <div className="hidden lg:block">
              <ul className="flex items-center gap-4">
                {MenuLinks.map((data) => (
                  <li key={data.id} className="text-white ">
                    <a
                      href={data.link}
                      className="px-4 text-[1.2rem] inline-block font-semibold text-gray-700 hover:text-black hover:text-[1.3rem] hover:transition-all hover:duration-300 dark:hover:text-gray-100 dark:text-white duration-200"
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
                {/* DropDown  */}
                <li className="relative cursor-pointer group">
                  <a
                    href="#"
                    className="flex items-center gap-[2px] font-semibold text-gray-500 dark:hover:text-white py-2"
                  >
                    Quick Links
                    <span>
                      <FaCaretDown />
                    </span>
                  </a>
                  {/* Drop Down links */}
                  <div
                    className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white shadow-md
                  dark:bg-gray-900 p-2 text-black transtion-all duration-150 dark:text-white"
                  >
                    <ul className="space-y-2">
                      {DropDownLinks.map((data) => {
                        return (
                          <li key={data.id} className="text-black">
                            <a
                              href={data.link}
                              className="text-gray-500 hover:text-black inline-block w-full p-2 rounded-md dark:text-white dark:hover:text-white duration-200 hover:bg-primary/20"
                            >
                              {data.name}
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex justify-between items-center gap-4">
            {/* search bar selection */}
            <div className="relative group hidden sm:block">
              <input type="text" placeholder="Search" className="search-bar" />
              <IoMdSearch className="text-xl text-gray-500 absolute top-1/3 -translate-y-1 right-3 group-hover:text-primary duration-200" />
            </div>

            {/* order button selection  */}
            <button className="relative p-3" onClick={handleOrderpopup}>
              <FaCartShopping className="text-xl text-gray-600 dark:text-gray-400 " />
              <div className="w-4 h-4 rounded-full flex bg-red-700 text-white items-center absolute top-0 right-0 justify-center text-xs">
                4
              </div>
            </button>
            <div>
              <Darkmode />
            </div>
            {/* dark mode */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
