import { Link, NavLink } from "react-router-dom";
import React, { useContext, useState } from "react";

import { AuthContext } from "../../provider/AuthProvider/AuthProvider";
import ImageWithTooltip from "../Tooltip/ImageWithTooltip";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);

//   console.log(user);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <nav className="px-4 py-7 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
        <div className="relative flex items-center justify-between">
          <Link
            to="/"
            aria-label="P7ROBOTICS"
            title="P7ROBOTICS"
            className="inline-flex items-center"
          >
            <img
              className="w-1/2"
              src="/src/assets/logoTransparent.png"
              alt="P7ROBOTICS"
            />
          </Link>

          <ul className=" items-center hidden space-x-8 lg:flex">
            <li>
              <NavLink
                to="/"
                aria-label="Home"
                title="Home"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/all-toys"
                aria-label="all-toys"
                title="all-toys"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                All Toys
              </NavLink>
            </li>
            {user && (
              <li>
                <NavLink
                  to="/myToys"
                  aria-label="my-toys"
                  title="my-toys"
                  className={({ isActive }) =>
                    isActive ? "active" : "default"
                  }
                >
                  My Toys
                </NavLink>
              </li>
            )}
            {user && (
              <li>
                <NavLink
                  to="/addToy"
                  aria-label="add-toy"
                  title="addToy"
                  className={({ isActive }) =>
                    isActive ? "active" : "default"
                  }
                >
                  Add Toy
                </NavLink>
              </li>
            )}
            <li>
              <NavLink
                to="/blog"
                aria-label="blog"
                title="blog"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                Blogs
              </NavLink>
            </li>
          </ul>

          <div className="hidden lg:flex gap-3 items-center">
            <div>
              {user?.photoURL ? (
                <div>
                  <ImageWithTooltip
                    src={user?.photoURL}
                    name={user?.displayName}
                  />
                </div>
              ) : (
                <div style={{ display: "none" }}>Profile</div>
              )}
            </div>

            {!user && (
              <Link to="/login">
                <button className="font-semibold">Login</button>
              </Link>
            )}
            {user && (
              <div>
                <button
                  onClick={handleLogOut}
                  className='className="mr-5 font-semibold hover:text-gray-900'
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>

          <div className="lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div className="absolute z-10 top-0 left-0 w-full">
                <div className="p-5 bg-white border rounded shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <Link
                        to="/"
                        aria-label="JobSpotHub"
                        title="JobSpotHub"
                        className="inline-flex items-center"
                      >
                        <span className=" h1 h1-gradiant ml-2 font-bold tracking-wide text-gray-800 uppercase">
                          P7R
                        </span>
                      </Link>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul className="space-y-4">
                      <li>
                        <Link
                          to="/"
                          aria-label="Home"
                          title="Home"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Home
                        </Link>
                      </li>

                      <li>
                        <NavLink
                          to="/all-toys"
                          aria-label="all-toys"
                          title="all-toys"
                          className={({ isActive }) =>
                            isActive ? "active" : "default"
                          }
                        >
                          All Toys
                        </NavLink>
                      </li>
                      {user && (
                        <li>
                          <NavLink
                            to="/myToys"
                            aria-label="my-toys"
                            title="my-toys"
                            className={({ isActive }) =>
                              isActive ? "active" : "default"
                            }
                          >
                            My Toys
                          </NavLink>
                        </li>
                      )}
                      {user && (
                        <li>
                          <NavLink
                            to="/addToy"
                            aria-label="add-toy"
                            title="add-toy"
                            className={({ isActive }) =>
                              isActive ? "active" : "default"
                            }
                          >
                            Add Toy
                          </NavLink>
                        </li>
                      )}
                      <li>
                        <NavLink
                          to="/blog"
                          aria-label="blog"
                          title="blog"
                          className={({ isActive }) =>
                            isActive ? "active" : "default"
                          }
                        >
                          Blogs
                        </NavLink>
                      </li>
                      <div>
                        <div className="flex flex-wrap items-center">
                          {user?.photoURL ? (
                            <div>
                              <ImageWithTooltip
                                src={user?.photoURL}
                                name={user?.displayName}
                              />
                            </div>
                          ) : (
                            <div style={{ display: "none" }}>Profile</div>
                          )}
                        </div>

                        {!user && (
                          <Link to="/login">
                            <button className="font-semibold">Login</button>
                          </Link>
                        )}
                        {user && (
                          <div>
                            <button
                              onClick={handleLogOut}
                              className='className="mr-5 font-semibold hover:text-gray-900'
                            >
                              Sign Out
                            </button>
                          </div>
                        )}
                      </div>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
