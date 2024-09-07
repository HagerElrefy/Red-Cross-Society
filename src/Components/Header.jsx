import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { TiThMenuOutline } from "react-icons/ti";
import BaseBtn from "./BaseBtn";

const links = ["About Us", "What To Do", "Get Involved", "News & Updates", "Resources", "Contact"];

function NavBar() {
  return (
    <nav>
        <ul className={`flex flex-col md:flex-row list-none justify-between items-center gap-x-6`}>
            {links.map((link, index) => (
                <li className="py-1" key={index}>
                    <a className="text-white" href="/">{link}</a>
                </li>
            ))}
        </ul>
    </nav>
  )
};

function DobanteBtn() {
  return (
    <div className="flex justify-between items-center gap-1">
        <button className="text-PrimaryOrange text-xl p-2 border border-PrimaryOrange">
            <IoSearchSharp />
        </button>
        <BaseBtn btnName="Donate"/>
    </div>
  )
}

function NavAndDonateBtnContainer({ show }) {
    return (
      <div className={`${show ? 'flex' : 'hidden'} flex-col items-center py-1 gap-1 absolute w-screen top-20 left-0 backdrop-blur-lg md:hidden`}>
        <NavBar />
        <DobanteBtn/>
      </div>
    );
  }

function Header() {
    const [showNav, setShowNav] = useState(false);
    return (
        <header className="absolute top-0 left-0 z-50 w-svw">
            <div className="flex justify-between items-center py-5 px-10 md:px-20 md:bg-none">
              <a href="/">
                  <img src="images/LOGO.png" className="w-10 h-10" alt="logo" />
              </a>
              <button className="md:hidden text-PrimaryOrange text-3xl" onClick={() => setShowNav(!showNav)}><TiThMenuOutline /></button>
              <div className="hidden md:flex">
                  <NavBar/>
              </div>
              <div className="hidden md:flex">
                  <DobanteBtn/>
              </div>
              <NavAndDonateBtnContainer show={showNav}/>
            </div>
        </header>
    );
}

export default Header;
