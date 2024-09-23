import React from 'react';
import { FiHome } from "react-icons/fi";
import { TbRouteAltRight } from "react-icons/tb";
import { MdBarChart } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { useNavigate } from 'react-router-dom';

function Footer() {
  const navigate = useNavigate();

  const handleChartClick = () => {
    navigate('/'); 
  };

  return (
    <div className='relative'>
      <div className='flex justify-between text-2xl px-5 py-4 h-16 bg-zinc-700'>
        <i><FiHome /></i>
        <i><TbRouteAltRight /></i>
        <i onClick={handleChartClick} style={{ cursor: 'pointer', color:"white" }}>
          <MdBarChart />
        </i>
        <i><CgProfile /></i>
      </div>
    </div>
  );
}

export default Footer;
