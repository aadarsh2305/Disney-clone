import React from 'react'
import Instagram from '../assets/Social Logo/Instagram.png'
import Linkedin from '../assets/Social Logo/Linkedin.png'
import Twitter from '../assets/Social Logo/Twitter.png'
import Github from '../assets/Social Logo/Github.png'

function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-8">
          <div className="container mx-auto text-center">
            <div className="flex justify-center mb-4">
              <a href="https://www.linkedin.com/in/aadarshgupta2305/" target="_blank" rel="noopener noreferrer" className="mx-2">
                <img src={Linkedin} alt="Linkedin" className="h-10 w-10" />
              </a>
              <a href="https://x.com/Aadarsh_Gupta91" target="_blank" rel="noopener noreferrer" className="mx-2">
                <img src={Twitter} alt="Twitter" className="h-10 w-10" />
              </a>
              <a href="https://instagram.com/aadarsh_gupta91" target="_blank" rel="noopener noreferrer" className="mx-2">
                <img src={Instagram} alt="Instagram" className="h-10 w-10" />
              </a>
              <a href="https://github.com/aadarsh2305" target="_blank" rel="noopener noreferrer" className="mx-2 bg-white">
                <img src={Github} alt="Github" className="h-10 w-10" />
              </a>
            </div>
            
            <p className="text-sm">
              © {new Date().getFullYear()} Disney Clone. Powered by Aadarsh Gupta using React, Vite, and Tailwind CSS.
            </p>
          
          </div>
        </footer>
      );
    };

export default Footer
