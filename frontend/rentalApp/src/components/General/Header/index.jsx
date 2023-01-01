import React from 'react'
import logo from "../../../assets/general/logo.png"

function Header() {
  return (
    <header className=" w-full absolute z-20">
      <nav className="container mx-auto flex items-center justify-between py-6  ">
        <div id="logo">
          <a href="HomePage.html">
            <img src={logo} alt="logo" height="150px" width="100px" />
          </a>
        </div>
        <ul className="flex items-center gap-10  text-lg font-medium text-white cursor-pointer ">
          
          <a>
            <li className="hover:scale-110 transition-all ">
              Offers
            </li>
          </a>

          <a>
            <li className=" w-[100px] p-2 text-center rounded-[4px] shadow-sm bg-mainBlue hover:scale-105 transition-all">
                Login
            </li>
          </a>
        </ul>
      </nav>
    </header>
  );
}

export default Header