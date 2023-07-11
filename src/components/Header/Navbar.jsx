import React from 'react';
import logo from '../../assets/svg/logo.svg';
import { Link } from 'react-router-dom';

const linkArray = ["Our Story", "Cohorts", "Contact Us"]

const Navbar = () => {
  return (
    <nav className="w-full p-4 py-3 relative bg-[#040A0F]">
      <div className="px-14 flex items-center justify-between mx-auto">
        {/* <Link href='#'> */}
          <img src={logo} width={150} height={30} alt="Probar" />
        {/* </Link> */}

        <div className="hidden md:flex items-center gap-5 lg:gap-[2rem]">
          {linkArray.map((item, index) => (
            <div key={index} className="nav-item text-[#D0D6DB] text-[1.125rem]">
              {item}
            </div>
          ))}
        </div>
        <div className=" lg:gap-[2rem]">
          <button className="font-g-sans-medium text-[17px] font-medium transition-all py-3 px-2 text-white hover:text-white bg-[#E52D27] hover:bg-transparent border-2 rounded-md border-[#E52D27]">
            Apply Now
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar