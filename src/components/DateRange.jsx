import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { IoIosArrowBack } from "react-icons/io";
import { TiTick } from "react-icons/ti";
const DateRange = ({ setSelectedDate }) => {
  const navigate = useNavigate();
  const [date, setDate] = useState(new Date());
  const today = new Date();
  const options = { weekday: 'short', month: 'short', day: 'numeric' };
  const desiredOutput = date.toLocaleDateString('en-US', options);
  const yesterday = new Date(today);
  const dby = new Date(yesterday);
  yesterday.setDate(today.getDate() - 1);
  dby.setDate(yesterday.getDate()-1);
  const dates = [`Today: ${desiredOutput}`,`Yesterday: ${yesterday.toLocaleString('en-US',options)}`,`Day before yesterday: ${dby.toLocaleString('en-US',options)}`];

  // Add state to manage selected button
  const [selectedButton, setSelectedButton] = useState('');

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    setSelectedButton(date); 
   
  };

  return (
    <>
      <div className='bg-black w-full h-screen '>
        <div className='Navbar  bg-zinc-900 text-white'>
          <div className='flex justify-between  py-2'>
            <div >
              <Link to="/"><div ><h2 className='flex gap-1 py-2'><i className='text-2xl '><IoIosArrowBack /></i>
              Statistic</h2></div></Link> 
            </div>  
            <h1 className='text-2xl  font-medium'>Date Range</h1>
            <Link className='text-yellow-500 px-3 py-2' to="/">Save</Link>
          </div>    
          <div className='flex justify-between px-5 py-3'>
            <Link className='text-yellow-500'>Day</Link>
            
            <Link to="/week">Week</Link>
            <Link to="/month">Month</Link>
            <Link to="/other">Other</Link>
          </div>
        </div>    
        <div className="container mx-auto text-white p-4">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {dates.map((date) => (
              <div
                key={date}
                className={`flex  cursor-pointer hover:text-yellow-600 transition-colors duration-200 p-4 ${
                  selectedButton === date ? 'selected text-yellow-600' : ''
                }`} // Apply conditional classes
                data-date={date} 
                onClick={() => handleDateSelect(date)}
              >
                
                {date}
                
                <div><hr /></div>
              </div>
            ))}
          </div>
        </div>
      </div> 
    </>
  );
};

export default DateRange;