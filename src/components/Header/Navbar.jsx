import React, { useState } from 'react';
import logo from '../../assets/svg/logo.svg';


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


  return (
    <div>
      <nav className="w-full p-2 lg:p-4 py-3 relative bg-[#040A0F]">
        <div className="px-2 md:px-14 flex items-center justify-between mx-auto">
          <a href="/">
            <img src={logo} className='w-[75.60px] lg:w-full' alt="Probar" />
          </a>
          

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
      
    </div>
  );
}

export default Navbar