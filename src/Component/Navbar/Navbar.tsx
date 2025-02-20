import { useState } from "react";
import { LuAlignJustify } from "react-icons/lu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex md:hidden justify-between items-center py-4 px-10 md:px-20 border-b border-textSecondary">
      <img className="w-1/5 md:w-full" src="/logo.png" alt="Logo" />
      <nav className="hidden md:block">
        <ul className="flex gap-12">
          <li>
            <a
              href=""
              className="font-nunito font-bold text-xl text-secondary leading-6"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href=""
              className="font-nunito font-bold text-xl text-secondary leading-6"
            >
              Rute
            </a>
          </li>
          <li>
            <a
              href=""
              className="font-nunito font-bold text-xl text-secondary leading-6"
            >
              Blog
            </a>
          </li>
          <li>
            <a
              href=""
              className="font-nunito font-bold text-xl text-secondary leading-6"
            >
              #TravelBetter
            </a>
          </li>
          <li>
            <a
              href=""
              className="font-nunito font-bold text-xl text-secondary leading-6"
            >
              Tentang Kami
            </a>
          </li>
        </ul>
      </nav>

      <div className="hidden md:flex gap-10 items-center">
        <img src="/search.png" alt="Search" />
        <a href="" className="font-nunito font-bold text-xl text-secondary leading-6">
          Sign Up
        </a>
        <button className="bg-primary flex rounded-lg py-4 px-8 gap-2 text-white text-xl font-nunito font-bold leading-6">
          Login
        </button>
      </div>

      <div className="md:hidden relative">
        <LuAlignJustify
          className={`text-3xl cursor-pointer transition-transform duration-300 ${isOpen ? "rotate-90" : "rotate-0"}`}
          onClick={() => setIsOpen(!isOpen)}
        />
        
        {isOpen && (
          <div className="absolute right-0 top-12 w-48 bg-white shadow-lg rounded-lg p-4">
            <ul className="flex flex-col gap-4">
              <li>
                <a href="" className="block font-nunito text-lg font-bold text-secondary">
                  Home
                </a>
              </li>
              <li>
                <a href="" className="block font-nunito text-lg font-bold text-secondary">
                  Rute
                </a>
              </li>
              <li>
                <a href="" className="block font-nunito text-lg font-bold text-secondary">
                  Blog
                </a>
              </li>
              <li>
                <a href="" className="block font-nunito text-lg font-bold text-secondary">
                  #TravelBetter
                </a>
              </li>
              <li>
                <a href="" className="block font-nunito text-lg font-bold text-secondary">
                  Tentang Kami
                </a>
              </li>
              <li>
                <a href="" className="block font-nunito text-lg font-bold text-secondary">
                  Sign Up
                </a>
              </li>
              <li>
                <button className="bg-primary w-full rounded-lg py-2 text-white text-lg font-nunito font-bold">
                  Login
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
