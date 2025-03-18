import { useState, useEffect } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { IoMenuSharp } from "react-icons/io5";
import { FaTimes } from "react-icons/fa";

const navLinks = [
  { title: "Home", link: "#home" },
  { title: "FAQs", link: "#faqs" },
  { title: "Services", link: "#services" },
];

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // When scrolled 50px, fix navbar
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full transition-all duration-200 ${
        isScrolled ? "fixed top-0 left-0 bg-[#d6f8f3]/90 shadow-md z-50" : "relative"
      } flex justify-between items-center px-5 md:px-[50px] lg:px-[100px] py-[10px] md:py-[20px]`}
    >
      {/* Logo & Mobile Menu Button */}
      <div className="flex items-center gap-5">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-[30px] border-[2px] border-[#1fd9ba] rounded-md p-1"
        >
          {isMenuOpen ? <FaTimes /> : <IoMenuSharp />}
        </button>
        <img src="/assets/logo.png" alt="Logo" className="w-[65px] h-[60px]" />
      </div>

      {/* Desktop Nav */}
      <ul className="md:flex items-center gap-10 text-[#0b111f] text-[16px] font-medium hidden">
        {navLinks.map(({ title, link }) => (
          <li key={title} className="cursor-pointer hover:text-[#1f9df4] hover:border-[#1fd9ba] hover:border-b-[2px]">
            <Link smooth to={link}>{title}</Link>
          </li>
        ))}

        {/* Features Dropdown */}
        <li className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="cursor-pointer hover:text-[#1f9df4] hover:border-[#1fd9ba] hover:border-b-[2px]"
          >
            Features
          </button>

          {isDropdownOpen && (
            <ul className="absolute left-0 mt-2 w-[150px] bg-white shadow-md border rounded-md p-2">
              <li className="hover:bg-gray-200 p-2"><Link smooth to="#users">For Customers</Link></li>
              <li className="hover:bg-gray-200 p-2"><Link smooth to="#laundry-shops">Laundry Shops</Link></li>
              <li className="hover:bg-gray-200 p-2"><Link smooth to="#services">Services</Link></li>
            </ul>
          )}
        </li>
      </ul>

      {/* CTA Button */}
      <div className="flex gap-5">
        <button className="bg-gradient-to-r from-[#1f9df4] to-[#1fd9ba] px-5 py-3 rounded-lg text-[#f0f0f0] font-bold cursor-pointer hover:shadow-xl transition-transform duration-300 hover:scale-105">
          Invest with Clean
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed top-[80px] right-0 w-[100%] h-[70%] bg-[#d6f8f3]/90 shadow-lg p-5 flex flex-col items-start gap-6 md:hidden z-50">
          {/* <button onClick={() => setIsMenuOpen(false)} className="self-end text-[30px]"><FaTimes 
          className="border-[2px] border-[#1fd9ba] rounded-md p-2 h-[40px] w-[40px]" /></button> */}
          {navLinks.map(({ title, link }) => (
            <Link key={title} smooth to={link} className="text-[25px] font-medium">
              {title}
            </Link>
          ))}
          {/* Features Dropdown in Mobile */}
          <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="text-[25px] font-medium">Features</button>
          {isDropdownOpen && (
            <ul className="pl-4">
              <li className="py-1"><Link smooth to="#users">For Customers</Link></li>
              <li className="py-1"><Link smooth to="#laundry-shops">Laundry Shops</Link></li>
              <li className="py-1"><Link smooth to="#services">Services</Link></li>
            </ul>
          )}
        </div>
      )}
    </header>
  );
};

export default Nav;
