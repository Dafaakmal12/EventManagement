import React from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Layout({ children }) {
    const navigate = useNavigate();
    const id = localStorage.getItem("id");
    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("role");
        localStorage.removeItem("id");
        navigate("/");
    };
  return (
    <div className="flex flex-row sm:gap-10">
      <div className="sm:w-full sm:max-w-[18rem]">
        <input
          type="checkbox"
          id="sidebar-mobile-fixed"
          className="sidebar-state"
        />
        <label
          htmlFor="sidebar-mobile-fixed"
          className="sidebar-overlay"
        ></label>
        <aside className="sidebar sidebar-fixed-left sidebar-mobile h-full justify-start max-sm:fixed max-sm:-translate-x-full"><br/>
          <section className="sidebar-title items-center p-4 justify-center">
          <img src="./IK.png" alt="Logo" style={{ width: "70%" }}/>
            <div className="flex flex-col">
            </div>
          </section>
          <section className="sidebar-content">
            <nav className="menu rounded-md">
              <section className="menu-section px-4">
              <span>Sistem Presensi</span>
              <span className="text-xs font-normal text-content2">
                UKM Informatika & Komputer
              </span>
                <ul className="menu-items">
                  <li>
                    <input
                      type="checkbox"
                      id="menu-2"
                      className="menu-toggle"
                    />
                    <label
                      className="menu-item justify-between"
                      htmlFor="menu-2"
                    >
                      <div className="flex gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 opacity-75"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        <span>Presensi</span>
                      </div>

                      <span className="menu-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                    </label>

                    <div className="menu-item-collapse">
                      <div className="min-h-0">
                        <Link to="/user" className="menu-item ml-6">Dashboard</Link>
                        <Link to="/user/event" className="menu-item ml-6">Agenda</Link>
                        {/* <Link to="/user/history" className="menu-item ml-6">History Agenda</Link> */}
                      </div>
                    </div>
                  </li>

                  {/* <li className="menu-item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 opacity-75"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                      />
                    </svg>
                    <span>Attendance</span>
                  </li> */}
                  <li>
                    <input
                      type="checkbox"
                      id="menu-1"
                      className="menu-toggle"
                    />
                    <label
                      className="menu-item justify-between"
                      htmlFor="menu-1"
                    >
                      <div className="flex gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 opacity-75"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                        <span>Account</span>
                      </div>

                      <span className="menu-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                    </label>

                    <div className="menu-item-collapse">
                      <div className="min-h-0">
                        <Link to={`/user/${id}/profile`} className="menu-item ml-6">Profile</Link>
                        <button onClick={handleLogout} className="menu-item ml-6">Logout</button>
                      </div>
                    </div>
                  </li>
                </ul>
              </section>
            </nav>
          </section>
        </aside>
      </div>
      <div className="flex w-full flex-col p-4">
        <div className="w-fit">
          <label
            htmlFor="sidebar-mobile-fixed"
            className="btn-primary btn sm:hidden"
          >
            Open Sidebar
          </label>
        </div>

        <div className="my-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
