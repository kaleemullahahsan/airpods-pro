import { useState } from "react";
import logo from "/images/Layer 1.png";
import searchIcon from "/images/magnifying-glass-solid.png";
import cartIcon from "/images/bag.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header
      data-aos="fade-down"
      className="flex justify-between items-center relative after:h-[1px] after:w-full after:bg-white after:absolute after:bottom-0 after:left-0 px-5 py-4"
    >
      <div>
        <a href="#">
          <img src={logo} alt="Logo" className="max-w-6" />
        </a>
      </div>
      <nav className={`md:flex hidden items-center`}>
        <ul className="flex gap-10 text-white items-center">
          <li>
            <a href="#">Store</a>
          </li>
          <li>
            <a href="#">Mac</a>
          </li>
          <li>
            <a href="#">iPhone</a>
          </li>
          <li>
            <a href="#">iPad</a>
          </li>
          <li>
            <a href="#">Watch</a>
          </li>
          <li>
            <a href="#">AirPods</a>
          </li>
          <li>
            <a href="#">TV & Home</a>
          </li>
          <li>
            <a href="#">Only on Apple</a>
          </li>
        </ul>
      </nav>
      <div className="hidden md:flex items-center gap-6">
        <span className="cursor-pointer">
          <img src={searchIcon} alt="Search" className="w-5" />
        </span>
        <span className="cursor-pointer">
          <img src={cartIcon} alt="Cart" className="w-5" />
        </span>
      </div>
      <div className="md:hidden flex items-center gap-6 z-[999]">
        <span className="material-icons cursor-pointer" onClick={toggleMenu}>
          menu
        </span>
        <span className="material-icons">search</span>
      </div>
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-white text-black z-[98] flex flex-col p-10 transition-all duration-300">
          <div className="flex justify-end mb-6">
            <span
              className="material-icons cursor-pointer text-3xl"
              onClick={closeMenu}
            >
              close
            </span>
          </div>
          <ul className="flex flex-col gap-6 text-black md:text-lg text-base">
            <li>
              <a href="#" onClick={closeMenu}>
                Store
              </a>
            </li>
            <li>
              <a href="#" onClick={closeMenu}>
                Mac
              </a>
            </li>
            <li>
              <a href="#" onClick={closeMenu}>
                iPhone
              </a>
            </li>
            <li>
              <a href="#" onClick={closeMenu}>
                iPad
              </a>
            </li>
            <li>
              <a href="#" onClick={closeMenu}>
                Watch
              </a>
            </li>
            <li>
              <a href="#" onClick={closeMenu}>
                AirPods
              </a>
            </li>
            <li>
              <a href="#" onClick={closeMenu}>
                TV & Home
              </a>
            </li>
            <li>
              <a href="#" onClick={closeMenu}>
                Only on Apple
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Navbar;
