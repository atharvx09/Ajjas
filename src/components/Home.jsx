import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import DateRange from './DateRange';
import DaterangeWeek from './DaterangeWeek';
import DaterangeMonth from './DaterangeMonth';
import DaterangeOther from './DaterangeOther';

import DummyData from './DummyData';
import { CiCalendarDate } from "react-icons/ci";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import Card from './Card';
import Footer from './Footer';

const HomePage = ({ selectedDate }) => {
  const navigate = useNavigate();
  const [dummyData, setDummyData] = useState([]);

  useEffect(() => {
    fetch('dummy.json') // Replace 'dummyData.json' with the actual file name
      .then(response => response.json())
      .then(data => setDummyData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className='bg-black max-h-screen'>
      <div className="container  mx-auto p-4 bg-zinc-900 text-white ">
        <div><h1 className="text-2xl font-bold mb-4">Statistics</h1></div>

        <div className='flex justify-between'>
          <div className='flex space-x-4'>
            <i className='text-2xl'>  <CiCalendarDate /></i>
            <button 
              onClick={() => navigate('/daterange')}
              className=""
            ><p className=''>{selectedDate || 'Today'}</p>
            </button>
          </div>
          <div className='flex text-2xl gap-8 '>
            <i><IoIosArrowBack /></i>
            <i><IoIosArrowForward /></i>
          </div>
        </div>

      </div>
      <Card data={dummyData} selectedDate={selectedDate} />
      <Footer/>
    </div>
  );
};

const Home = () => {
  const [selectedDate, setSelectedDate] = useState('');

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Routes>
          <Route path="/" element={<HomePage selectedDate={selectedDate} />} />
          <Route path="/daterange" element={<DateRange setSelectedDate={setSelectedDate} />} />
          <Route path="/week" element={<DaterangeWeek setSelectedDate={setSelectedDate} />} />
          <Route path="/month" element={<DaterangeMonth setSelectedDate={setSelectedDate} />} />
          <Route path="/other" element={<DaterangeOther setSelectedDate={setSelectedDate} />} />
          <Route path="/dummy" element={<DummyData setSelectedDate={setSelectedDate} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Home;