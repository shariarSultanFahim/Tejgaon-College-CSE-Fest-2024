import { useEffect, useState } from 'react';
import { useNavigate, useLocation, Link } from "react-router-dom";
import festLogo from '../assets/SquareLogo.svg'

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isSticky, setIsSticky] = useState(false);

  const handleNavigation = (hash) => {
    if (location.pathname !== "/") {
      navigate("/"); // Redirect to the root route
    }
    // Wait for navigation, then scroll to the section
    setTimeout(() => {
      document.getElementById(hash).scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const handleScroll = () => {
    setIsSticky(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`navbar bg-[#0a0b0f]  md:px-6 py-0 sticky top-0 transition-all duration-300 ease-in-out  ${isSticky ? 'bg-opacity-40 backdrop-blur-md' : ''}`}>
      <div className="navbar-end w-full justify-between md:justify-normal md:navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-[#0a0b0f]  rounded-box z-[100] mt-3 w-52 p-2 shadow">
            <li>
            <Link to={'/contact'} 
            className="text-white hover:text-gradient" 
            >Contact Us</Link>
        </li>
            <li>
            <button 
            onClick={() => window.open('https://www.facebook.com/share/vuPPYt516g11n1d3/', '_blank')}
            className="text-white hover:text-gradient" 
            >Facebook</button>
          </li>
          <li>
            <a
              href="#events"
              onClick={(e) => {
                e.preventDefault();
                handleNavigation("events");
              }}
              className="text-white hover:text-gradient"
            >
              Events
            </a>
          </li>
          <li>
            <a
              href="#schedule"
              onClick={(e) => {
                e.preventDefault();
                handleNavigation("schedule");
              }}
              className="text-white hover:text-gradient"
            >
              Schedule
            </a>
          </li>
          <li>
            <a
              href="#register"
              onClick={(e) => {
                e.preventDefault();
                handleNavigation("register");
              }}
              className="text-white hover:text-gradient"
            >
              Register
            </a>
          </li>
          </ul>
        </div>
        <div className=''
         href="home"
              onClick={(e) => {
                e.preventDefault();
                handleNavigation("home");
              }} >
              <img src={festLogo} alt="Fest Logo" className="h-14 w-14 rounded-3xl" /> 
        </div>
      </div>
      <div className="navbar-end hidden md:flex">
        <ul className="menu menu-horizontal px-1">
        <li>
            <Link to={'/contact'}
            className="text-white hover:text-gradient" 
            >Contact Us</Link>
        </li>
        <li>
        <button 
            onClick={() => window.open('https://www.facebook.com/share/vuPPYt516g11n1d3/', '_blank')}
            className="text-white hover:text-gradient" 
            >Facebook</button>
          </li>
          <li>
            <a
              href="#events"
              onClick={(e) => {
                e.preventDefault();
                handleNavigation("events");
              }}
              className="text-white hover:text-gradient"
            >
              Events
            </a>
          </li>
          <li>
            <a
              href="#schedule"
              onClick={(e) => {
                e.preventDefault();
                handleNavigation("schedule");
              }}
              className="text-white hover:text-gradient"
            >
              Schedule
            </a>
          </li>
          <li>
            <a
              href="#register"
              onClick={(e) => {
                e.preventDefault();
                handleNavigation("register");
              }}
              className="text-white hover:text-gradient"
            >
              Register
            </a>
          </li>
        </ul>
      </div>
    </div>
    
  );
};

export default Header;
