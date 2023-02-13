import { Link } from "react-router-dom";
import React, { useState } from "react";

function NavLink({ to, children }) {
  return (
    <Link to={to} className={`mx-4`}>
      {children}
    </Link>
  );
}

function MobileNav({ open, setOpen }) {
  return (
    <div
      className={`absolute md:hidden top-0 left-0 h-screen w-screen  transform ${
        open ? "-translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out filter drop-shadow-md `}
    >
      <div className="flex items-center justify-center filter drop-shadow-md bg-white dark:bg-black h-20">
        {" "}
        {/*logo container*/
        } 
        <Link className="text-2xl block dark:hidden font-semibold" href="/">
            <img src="/logo.jpeg" className="text-2xl max-h-8 block dark:hidden font-semibold" />
          </Link>
          <Link className="text-2xl hidden dark:block font-semibold" href="/">
            <img src="/logo.jpeg" className="text-2xl max-h-8 hidden dark:block font-semibold" />
          </Link>
      </div>
      <div className="flex flex-col bg-white pl-4">
        <a
          className="text-normal dark:text-white font-medium my-4"
          href="/"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
        Home
        </a>
        <a
          className="text-normal dark:text-white font-normal my-4"
          href="/about"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
        About
        </a>
        <a
          className="text-normal dark:text-white font-normal my-4"
          href="/projects"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
        Projects
        </a>
        <a
          className="text-normal dark:text-white font-normal my-4"
          href="/etc"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
        Etc.
        </a>
      </div>
    </div>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <div className="filter  fixed w-full z-[1000] bg-white md:bg-transparent">
      <nav className="flex container mx-auto   px-4 py-4 h-20 items-center">
        <MobileNav open={open} setOpen={setOpen} />
        <div className="w-3/12 flex items-center">
          <Link className="text-2xl block dark:hidden font-semibold" href="/">
            <img src="/logo.jpeg" className="text-2xl max-h-8 block dark:hidden font-semibold" />
          </Link>
          <Link className="text-2xl hidden dark:block font-semibold" href="/">
            <img src="/logo.jpeg" className="text-2xl max-h-8 hidden dark:block font-semibold" />
          </Link>
        </div>
        <div className="w-9/12 flex justify-end items-center">
          <div
            className="z-50 flex gap-3 relative  md:hidden"
           
          >
            <div className="w-8 h-8 flex flex-col justify-between items-center"  onClick={() => {
              setOpen(!open);
            }}>
              <span
                className={` w-full bg-black dark:bg-white rounded-lg transform transition duration-300 ease-in-out ${
                  open ? "rotate-45  translate-y-4" : ""
                }`}
                style={{height:'2px'}}
              />
              <span
                className={` bg-black dark:bg-white rounded-lg transition-all duration-300 ease-in-out ${
                  open ? "w-0" : "w-full"
                }`}
                style={{height:'2px'}}
              />
              <span
                className={` w-full bg-black dark:bg-white rounded-lg transform transition duration-300 ease-in-out ${
                  open ? "-rotate-45  -translate-y-4" : ""
                }`}
                style={{height:'2px'}}
              />
            </div>
            {/* hamburger button */}

        
          </div>

          <div className="hidden md:flex gap-4 text-small text-white">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/create-account">Create Account</NavLink>
            <NavLink to="/login">Login</NavLink>
            {/* <NavLink to="/etc">Etc.</NavLink> */}
          </div>
        </div>
      </nav>
    </div>
  );
}
