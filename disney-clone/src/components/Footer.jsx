import React from 'react';
import Instagram from '../assets/Social Logo/Instagram.png';
import Linkedin from '../assets/Social Logo/Linkedin.png';
import Twitter from '../assets/Social Logo/Twitter.png';
import Github from '../assets/Social Logo/Github.png';

function Footer() {
    return (
        <footer className="bg-gray-950 text-white py-8">
            <div className="container mx-auto text-center">
                <div className="flex flex-col md:flex-row items-center justify-center md:items-center mb-6">
                    <p className="text-lg md:mr-4 mb-4 md:mb-0 "><b>Reach out to me:</b></p>
                    <div className="flex justify-center md:justify-start">
                        <a href="https://www.linkedin.com/in/aadarshgupta2305/" target="_blank" rel="noopener noreferrer" className="mx-2 transform transition-transform duration-300 hover:scale-110">
                            <img src={Linkedin} alt="Linkedin" className="h-10 w-10 rounded-full hover:shadow-lg" />
                        </a>
                        <a href="https://x.com/Aadarsh_Gupta91" target="_blank" rel="noopener noreferrer" className="mx-2 transform transition-transform duration-300 hover:scale-110">
                            <img src={Twitter} alt="Twitter" className="h-10 w-10 rounded-full hover:shadow-lg" />
                        </a>
                        <a href="https://instagram.com/aadarsh_gupta91" target="_blank" rel="noopener noreferrer" className="mx-2 transform transition-transform duration-300 hover:scale-110">
                            <img src={Instagram} alt="Instagram" className="h-10 w-10 rounded-full hover:shadow-lg" />
                        </a>
                        <a href="https://github.com/aadarsh2305" target="_blank" rel="noopener noreferrer" className="mx-2 transform transition-transform duration-300 hover:scale-110">
                            <img src={Github} alt="Github" className="h-10 w-10 rounded-full bg-white p-1 hover:shadow-lg" />
                        </a>
                    </div>
                </div>
                <p className="text-sm mt-4 ">
                  <i>
                    © {new Date().getFullYear()} Disney Clone. Powered by Aadarsh Gupta using React, Vite, and Tailwind CSS.
                  </i>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
