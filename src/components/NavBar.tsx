import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function NavBar() {
  const navBarRef = useRef<HTMLDivElement>(null);
  const [showMenu, setShowMenu] = useState(false);

  const getHeight = (): number => {
    if (navBarRef.current) {
      const rect = navBarRef.current.getBoundingClientRect();
      return rect.height;
    }
    return 60;
  };

  console.log(getHeight());

  const routes = [
    { name: "Home", url: "/" },
    { name: "Packages", url: "/packages" },
    { name: "About", url: "/about" },
    { name: "Contact Us", url: "/contact-us" },
  ];

  return (
    <nav
      ref={navBarRef}
      className="fixed w-full border-gray-200 border-b-2 bg-gray-100 dark:bg-gray-800 dark:border-gray-700 z-20"
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 relative">
        <Link to="/" className="flex items-center">
          <img src="/logooo.jpeg" className="h-8 w-10 mr-3" alt="Cayman Logo" />
          <span className="text-md self-center lg:text-2xl font-semibold whitespace-nowrap dark:text-white">
            Cayman Ghana Ltd
          </span>
        </Link>
        <button
          data-collapse-toggle="navbar-solid-bg"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-solid-bg"
          aria-expanded="false"
          onClick={() => setShowMenu((prevState) => !prevState)}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
          <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
            {routes.map((route) => {
              return (
                <li key={route.name}>
                  <NavLink
                    to={route.url}
                    className={({ isActive }) =>
                      isActive
                        ? "block py-2 pl-3 pr-4 text-white bg-[#dacb46] rounded md:bg-transparent md:text-[#dacb46] md:p-0 md:dark:text-[#dacb46] dark:bg-[#dacb46] md:dark:bg-transparent"
                        : "block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#dacb46] md:p-0 dark:text-white md:dark:hover:text-[#dacb46] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    }
                  >
                    {route.name}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Menu for mobile view */}
        <AnimatePresence>
          {showMenu && (
            <motion.div
              initial={{ y: "-60px", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              className="absolute md:hidden w-full md:w-auto top-[55px] right-0 z-10"
              id="navbar-solid-bg"
            >
              <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
                {routes.map((route) => {
                  return (
                    <li>
                      <NavLink
                        to={route.url}
                        className={({ isActive }) =>
                          isActive
                            ? "block py-2 pl-3 pr-4 text-gray-800 bg-[#dacb46] rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-gray-800 md:dark:bg-transparent"
                            : "block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                        }
                      >
                        {route.name}
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
        {/* Menu for mobile view */}
      </div>
    </nav>
  );
}
