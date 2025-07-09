import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import { FiMenu, FiX } from "react-icons/fi";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full flex justify-center bg-[#0f1729] py-0 sm:py-6 sticky top-0 z-50 backdrop-blur">
      <nav
        className="w-[1000px] h-[96px] flex justify-between items-center px-6 rounded-[20px]"
        style={{
          background: "linear-gradient(90deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)",
          boxShadow: "0px 0px 15px 0px #00000012, 0px 25px 50px -12px #00000040",
        }}
      >
        {/* Left side: Logo + Navigation */}
        <div className="flex items-center gap-8">
          <h5>weeb</h5>
          <div className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-white text-lg font-semibold hover:text-tertiary">About us</Link>
            <Link to="/contact" className="text-white hover:text-tertiary">Contact</Link>
          </div>
        </div>

        {/* Right side: Auth links + Button */}
        <div className="hidden md:flex items-center gap-10">
          <Link to="/login" className="text-white hover:text-tertiary">Log In</Link>
          <Button to="/" className="text-[16px] py-[6px] px-[32px] hover:bg-tertiary hover:border-tertiary">
            Join Now
          </Button>
        </div>

        {/* Burger menu icon (Mobile) */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white bg-secondary rounded p-2 text-2xl">
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-[100%] left-0 w-full bg-[#0f1729e6] backdrop-blur-lg shadow-lg px-6 py-8 flex flex-col border-b gap-4 md:hidden">
          <Link to="/" className="text-white hover:text-tertiary" onClick={() => setIsOpen(false)}>About us</Link>
          <Link to="/contact" className="text-white hover:text-tertiary" onClick={() => setIsOpen(false)}>Contact</Link>
          <Link to="/login" className="text-white hover:text-tertiary" onClick={() => setIsOpen(false)}>Log In</Link>
          <Button to="/" className="w-full text-[16px] py-[10px] hover:bg-tertiary hover:border-tertiary">
            Join Now
          </Button>
        </div>
      )}
    </header>
  );
}
