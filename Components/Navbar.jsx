import { navLinks } from '../Constants/Index';
import { Link } from "react-router-dom";
import { useState } from 'react';

function Navbar() {

  const [activeLink, setActiveLink] = useState(null);  

  const handleClick = (link) => {
    setActiveLink(link);  
  };
  return (
    <header className='padding-x py-2 bg-white absolute z-10 w-full shadow-xl mb-5'>
      <nav className='flex justify-between items-center max-container'>
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
          {navLinks.map((item) => (
            <li key={item.label} className="relative">
              <Link 
                to={item.link} 
                className={`font-montserrat leading-normal text-lg rounded-lg font-bold block px-3 py-2 
                  ${activeLink === item.link ? 'bg-blue-600  text-white' : 'hover:bg-blue-600 hover:text-white'} 
                  transition-all duration-200`}
                onClick={() => handleClick(item.link)} 
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
