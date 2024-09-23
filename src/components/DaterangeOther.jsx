import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { IoIosArrowBack } from "react-icons/io";


const DaterangeYear = ({ setSelectedDate }) => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();

    
    const startOfCurrentYear = new Date(currentYear, 0, 1); 
    const endOfCurrentYear = new Date(currentYear + 1, 0, 0); 

    
    const startOfLastYear = new Date(currentYear - 1, 0, 1); 
    const endOfLastYear = new Date(currentYear, 0, 0); 

    
    const lifetimeStartDate = new Date('2021-05-17');
    const lifetimeEndDate = currentDate;

    const formats = (start, end) => {
        const startMonth = start.toLocaleString('en-US', { month: 'short' });
        const startDay = start.toLocaleString('en-US', { day: 'numeric' });
        const startYear = start.getFullYear();
        const endMonth = end.toLocaleString('en-US', { month: 'short' });
        const endDay = end.toLocaleString('en-US', { day: 'numeric' });
        const endYear = end.getFullYear();

        return `${startMonth} ${startDay} ${startYear} - ${endMonth} ${endDay} ${endYear}`;
    };

    const thisYearRange = formats(startOfCurrentYear, endOfCurrentYear);
    const lastYearRange = formats(startOfLastYear, endOfLastYear);
    const lifetimeRange = formats(lifetimeStartDate, lifetimeEndDate);

    const dates = [
        `This Year: ${thisYearRange}`,
        `Last Year: ${lastYearRange}`,
        `Lifetime: ${lifetimeRange}`,
    ];

    
    const [customStartDate, setCustomStartDate] = useState(null);
    const [customEndDate, setCustomEndDate] = useState(null);

    const handleCustomDateSelect = () => {
        if (customStartDate && customEndDate) {
            const selectedRange = `Custom Range: ${formats(customStartDate, customEndDate)}`;
            setSelectedDate(selectedRange);
        }
    };

    const handleDateSelect = (selectedDate) => {
        setSelectedDate(selectedDate);
        
        
        const selectedElement = document.querySelector(`.date-button[data-date="${selectedDate}"]`);
        
        
        const otherElements = document.querySelectorAll('.date-button');
        otherElements.forEach((element) => {
            element.classList.remove('selected');
        });
        
        
        if (selectedElement) {
            selectedElement.classList.add('selected');
        }
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
                    <Link to="/month">Month</Link>
                    
                    <Link className='text-yellow-500'>Other</Link>
                </div>
            </div>
            <div className="container mx-auto text-white p-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {dates.map((date) => (
                        <div
                            key={date}
                            className="cursor-pointer hover:text-yellow-300 transition-colors duration-200  p-4 date-button"
                            data-date={date}
                            onClick={() => handleDateSelect(date)}
                        >
                            {date}
                            <hr />
                        </div>
                    ))}
                </div>
                <div className="mt-4">
                    <h2 className="font-medium mb-2">Custom Date Range:</h2>
                    <div className='flex gap-3 text-black '>
                        <DatePicker 
                            selected={customStartDate}
                            onChange={(date) => setCustomStartDate(date)}
                            selectsStart
                            startDate={customStartDate}
                            endDate={customEndDate}
                            placeholderText="Start Date"
                        />
                        
                        <DatePicker
                            selected={customEndDate}
                            onChange={(date) => setCustomEndDate(date)}
                            selectsEnd
                            startDate={customStartDate}
                            endDate={customEndDate}
                            
                            placeholderText="End Date"
                            minDate={customStartDate}
                        />
                    </div>
                   
                </div>
            </div>
            </div>
            
        </>
    );
};

export default DaterangeYear;
