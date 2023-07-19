import React, { useState } from 'react';
import logo from '../../assets/svg/logo.svg';
import Hamburger from '../Hamburger';
import { Link } from 'react-router-dom';

const linkArray = ["Our Story", "Cohorts", "Contact Us"]


// const links = [
//   {
//     id: 1,
//     url: "/#story",
//     text: "Our Story",
//   },
//   {
//     id: 2,
//     url: "/#cohorts",
//     text: "Cohorst",
//   },
//   {
//     id: 3,
//     url: "#",
//     text: "Contact Us",
//   },
// ];


const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

	const toggle = () => setIsOpen(!isOpen);

  const hide = () => setIsOpen(false);

  return (
    <div>
      <nav className="w-full p-2 lg:p-4 py-3 relative bg-[#040A0F]">
        <div className="px-2 md:px-14 flex items-center justify-between mx-auto">
          <a href="/">
            <img src={logo} width={150} height={30} alt="Probar" />
          </a>
          <div className='lg:hidden'>
            <Hamburger onClick={toggle} isOpen={isOpen} />
          </div>

          <div className="hidden lg:flex items-center gap-5 lg:gap-[2rem]">
            {linkArray.map((item, index) => (
              <a href='#' key={index} className="nav-item text-[#D0D6DB] text-[1.125rem]">
                {item}
              </a>
            ))}
          </div>
          <div className="hidden lg:block lg:gap-[2rem]">
            <button className="font-g-sans-medium w-[fit-content] text-[17px] font-medium transition-all py-3 px-2 text-white hover:text-white bg-[#E52D27] hover:bg-lilly border-2 rounded-md border-[#E52D27]">
              Apply Now
            </button>
          </div>
        </div>
      </nav>
      <nav className={`z-[-1] absolute ${
					isOpen ? "translate-x-0" : "translate-x-[-100vw]"
				} transition duration-[600ms] w-full top-0 left-0 right-0 sm:w-[60%] lg:hidden`}>
          <div className='bg-gray pt-[4rem] py-[3rem] px-[3rem] text-center flex flex-col gap-4'>
            <div className="hidden lg:flex items-center gap-5 lg:gap-[2rem]">
              {linkArray.map((item, index) => (
                <a href='#' key={index} onClick={hide} className="nav-item text-[#D0D6DB] text-[1.125rem]">
                  {item}
                </a>
              ))}
            </div>
            <div className="hidden lg:block lg:gap-[2rem]">
              <button className="font-g-sans-medium w-[fit-content] text-[17px] font-medium transition-all py-3 px-2 text-white hover:text-white bg-[#E52D27] hover:bg-lilly border-2 rounded-md border-[#E52D27]">
                Apply Now
              </button>
            </div>
          </div>
      </nav>
    </div>
  );
}

export default Navbar