import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IoIosArrowBack } from "react-icons/io";

const DaterangeMonth = ({ setSelectedDate }) => {
  const navigate = useNavigate();
  const [date, setDate] = useState(new Date());
  const currentDate = new Date();

  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  const startOfMonth = new Date(currentYear, currentMonth, 1);
  const endOfMonth = new Date(currentYear, currentMonth + 1, 0);

  const startOfLastMonth = new Date(currentYear, currentMonth - 1, 1);
  const endOfLastMonth = new Date(currentYear, currentMonth, 0);

  const endOfLast30Days = new Date(currentDate);
  const startOfLast30Days = new Date(currentDate);
  startOfLast30Days.setDate(currentDate.getDate() - 30);

  const formats = (start, end) => {
    const startMonth = start.toLocaleString('en-US', { month: 'short' });
    const startDay = start.toLocaleString('en-US', { day: 'numeric' });
    const endMonth = end.toLocaleString('en-US', { month: 'short' });
    const endDay = end.toLocaleString('en-US', { day: 'numeric' });
    return `${startMonth} ${startDay} - ${endMonth} ${endDay}`;
  };

  const thisMonthRange = formats(startOfMonth, endOfMonth);
  const lastMonthRange = formats(startOfLastMonth, endOfLastMonth);
  const last30DaysRange = formats(startOfLast30Days, endOfLast30Days);

  const dates = [
    `This Month: ${thisMonthRange}`,
    `Last Month: ${lastMonthRange}`,
    `Last 30 Days: ${last30DaysRange}`,
  ];

  const [selectedDate, setSelectedDateState] = useState(null); // Track selected date

  const handleDateSelect = (selectedDate) => {
    setSelectedDate(selectedDate); // Pass to parent component
    setSelectedDateState(selectedDate); // Update local state for styling
  };

  return (
    <>
      <div className='bg-black w-full h-screen'>
        <div className='Navbar bg-zinc-900 text-white'>
          <div className='flex justify-between  py-2'>
            <div >
              <Link to="/"><div ><h2 className='flex gap-1 py-2'><i className='text-2xl '><IoIosArrowBack /></i>
              Statistic</h2></div></Link>
            </div>
            <h1 className='text-2xl  font-medium'>Date Range</h1>
            <Link className='text-yellow-500 px-3 py-2' to="/">Save</Link>
          </div>
          <div className='flex justify-between px-5 py-3'>
            <Link to="/daterange">Day</Link>
            <Link to="/week">Week</Link>
            <Link className='text-yellow-500'>Month</Link>
            <Link to="/other">Other</Link>
          </div>
        </div>
        <div className="container mx-auto text-white p-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {dates.map((date) => (
              <div
                key={date}
                className={`cursor-pointer  transition-colors duration-200 p-4 date-button ${
                  selectedDate === date ? 'text-yellow-500' : '' // Apply yellow color if selected
                }`}
                data-date={date}
                onClick={() => handleDateSelect(date)}
              >
                {date}
                <hr />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default DaterangeMonth;