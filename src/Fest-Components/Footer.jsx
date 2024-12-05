import { useLocation, useNavigate } from "react-router-dom";
import FooterSponsors from "./Sponsorship/FooterSponsor";

const Footer = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (hash) => {
    if (location.pathname !== "/") {
      navigate("/"); // Redirect to the root route
    }
    // Wait for navigation, then scroll to the section
    setTimeout(() => {
      document.getElementById(hash).scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

    return (
        <footer className="bg-gray-800 text-gray-300">

       <FooterSponsors/>

        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-wrap justify-between">

            <div className="w-full md:w-1/3 mb-6 md:mb-0 ">
              <h3 className="text-lg font-semibold mb-2 text-gradient">About Us</h3>
              <p className="text-sm">Tejgaon College CSE Fest 2k24 is the premier tech event showcasing innovation and talent in computer science and engineering.</p>
            </div>

            <div className="w-full md:w-1/3 mb-6 md:mb-0 md:text-center">
              <h3 className="text-lg font-semibold mb-2 text-gradient">Quick Links</h3>
              <ul className="text-sm">
                <li><a onClick={(e) => {
                  e.preventDefault();
                  handleNavigation("/home");
                  window.scrollTo(0, 0);
                }}  className="hover:text-blue-400 hover:cursor-pointer">Home</a></li>
                <li><a onClick={(e) => {
                  e.preventDefault();
                  handleNavigation("events");
                }}  className="hover:text-blue-400 hover:cursor-pointer">Events</a></li>
                <li><a onClick={(e) => {
                  e.preventDefault();
                  handleNavigation("events");
                }}  className="hover:text-blue-400 hover:cursor-pointer">Schedule</a></li>
              </ul>
            </div>

            <div className="w-full md:w-1/3 md:text-right">
              <h3 className="text-lg font-semibold mb-2 text-gradient">Contact Us</h3>
              <p className="text-sm">Email: programmingclub.tcd@gmail.com</p>
              <p className="text-sm">Phone: +880 1869943362</p>
            </div>

          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm">
            <p>&copy; 2024 Tejgaon College CSE Fest. All rights reserved.</p>
          </div>
        </div>
        <div>
          <h1 className="pb-6 text-center text-gray-500">Developed by <a className="text-gradient underline" href="https://shariarsultanfahim.xyz/">Shariar.dev</a></h1>
        </div>
      </footer>
    );
};

export default Footer;