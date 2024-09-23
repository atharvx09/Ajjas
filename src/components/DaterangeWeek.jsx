import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IoIosArrowBack } from "react-icons/io";

const DaterangeWeek = ({ setSelectedDate }) => {
  const navigate = useNavigate();
  const currentDate = new Date();

  // Calculate week ranges
  const firstDayOfCurrentWeek = new Date(currentDate);
  firstDayOfCurrentWeek.setDate(currentDate.getDate() - currentDate.getDay());

  const lastDayOfCurrentWeek = new Date(firstDayOfCurrentWeek);
  lastDayOfCurrentWeek.setDate(firstDayOfCurrentWeek.getDate() - 6);

  const firstDayOfPreviousWeek = new Date(firstDayOfCurrentWeek);
  firstDayOfPreviousWeek.setDate(firstDayOfPreviousWeek.getDate() - 7);

  const lastDayOfPreviousWeek = new Date(firstDayOfPreviousWeek);
  lastDayOfPreviousWeek.setDate(lastDayOfPreviousWeek.getDate() - 6);

  const startOfLast7Days = new Date(currentDate);
  startOfLast7Days.setDate(currentDate.getDate() - 6);

  // Format week ranges
  const formats = (start, end) => {
    const startMonth = start.toLocaleString('en-US', { month: 'short' });
    const startDay = start.toLocaleString('en-US', { day: 'numeric' });
    const endMonth = end.toLocaleString('en-US', { month: 'short' });
    const endDay = end.toLocaleString('en-US', { day: 'numeric' });
    return `${startMonth} ${startDay} - ${endMonth} ${endDay}`;
  };

  const thisWeekRange = formats(lastDayOfCurrentWeek, firstDayOfCurrentWeek);
  const lastWeekRange = formats(lastDayOfPreviousWeek, firstDayOfPreviousWeek);
  const last7DaysRange = formats(startOfLast7Days, currentDate);

  const dates = [
    `This Week: ${thisWeekRange}`,
    `Last Week: ${lastWeekRange}`,
    `Last 7 Days: ${last7DaysRange}`,
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
              <Link to="/">
                <div>
                  <h2 className='flex gap-1 py-2'>
                    <i className='text-2xl '><IoIosArrowBack /></i>
                    Statistic
                  </h2>
                </div>
              </Link>
            </div>
            <h1 className='text-2xl  font-medium'>Date Range</h1>
            <Link className='text-yellow-500 px-3 py-2' to="/">
              Save
            </Link>
          </div>
          <div className='flex justify-between px-5 py-3'>
            <Link to="/daterange">Day</Link>
            <Link className='text-yellow-500'>Week</Link>  {/* Highlight selected Week */}
            <Link to="/month">Month</Link>
            <Link to='/other'>Other</Link>
          </div>
        </div>
        <div className="container mx-auto text-white p-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {dates.map((date) => (
              <div
                key={date}
                className={`cursor-pointer transition-colors duration-200 p-4 date-button ${
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

export default DaterangeWeek;