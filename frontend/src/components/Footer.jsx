import Logo from '../assets/QuizAryaLogo.png'
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#13072e] to-[#3f2182] text-white py-10">
      <div className="container mx-auto">
        
        
        <div className="flex flex-col lg:flex-row justify-between items-center border-b border-white pb-8">
          
         
          <div className="mb-6 lg:mb-0">
            <img src={Logo} alt="logo" className="w-56 rounded-full" />
          </div>
          
         
          <div className="flex space-x-12 lg:space-x-48 mb-6 lg:mb-0">
            
            
            <div>
              <h4 className="font-semibold mb-2 underline">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">About Us</a></li>
                <li><a href="#" className="hover:underline">How to Play</a></li>
                <li><a href="#" className="hover:underline">Blog</a></li>
                <li><a href="#" className="hover:underline">Contact</a></li>
              </ul>
            </div>

           
            <div>
              <h4 className="font-semibold mb-2 underline">Support</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">FAQ</a></li>
                <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
                <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                <li><a href="#" className="hover:underline">Contact Support</a></li>
              </ul>
            </div>
          </div>

          
          <div className="flex flex-col items-center space-y-2">
            <p className="underline">Connect with Us</p>
            <div className="flex flex-row space-x-4">
              <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center">
                <FaFacebook className="text-4xl" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center">
                <FaSquareXTwitter className="text-4xl" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center">
                <FaInstagram className="text-4xl" />
              </a>
            </div>
          </div>
        </div>

        
        <div className="mt-6 flex flex-col lg:flex-row justify-between items-center">
          <p className="text-sm text-center lg:text-left">
            © 2025 Unified Mentor. All Rights Reserved.
          </p>
          <div className="flex space-x-6 mt-4 lg:mt-0">
            <a href="#" className="text-sm hover:underline">Terms & Conditions</a>
            <a href="#" className="text-sm hover:underline">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
