import React from 'react';
import logo from '../../assets/svg/logo.svg';
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
  return (
    <nav className="w-full p-4 py-3 relative bg-[#040A0F]">
      <div className="px-2 md:px-14 flex items-center justify-between mx-auto">
        <a href="/">
          <img src={logo} width={150} height={30} alt="Probar" />
        </a>

        <div className="hidden md:flex items-center gap-5 lg:gap-[2rem]">
          {linkArray.map((item, index) => (
            <a href='#' key={index} className="nav-item text-[#D0D6DB] text-[1.125rem]">
              {item}
            </a>
          ))}
        </div>
        <div className=" lg:gap-[2rem]">
          <button className="font-g-sans-medium w-[fit-content] text-[17px] font-medium transition-all py-3 px-2 text-white hover:text-white bg-[#E52D27] hover:bg-lilly border-2 rounded-md border-[#E52D27]">
            Apply Now
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar