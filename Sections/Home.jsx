import React, { useState, useEffect } from 'react';
import { announcements } from '../Constants/Index';
import AnnouncementCard from '../Components/AnnouncementCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';

import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';

function Home() {
  const [projectsData, setProjectsData] = useState([]); 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/api/posts')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch projects');
        }
        return res.json();
      })
      .then((data) => {
        setProjectsData(data);
        setLoading(false);  // Set loading to false after data is fetched
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);
    console.log(projectsData);

  const AnnouncmentsPerPage = 9;
  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(1);
  const [selectedDept, setSelectedDept] = useState('All');

  const indexOfLastAnnouncement = currentPage * AnnouncmentsPerPage;
  const indexOfFirstAnnouncement = indexOfLastAnnouncement - AnnouncmentsPerPage;
  const totalPages = Math.ceil(projectsData.length / AnnouncmentsPerPage);

  const filteredAnnouncements = selectedDept === 'All'
    ? projectsData
    : projectsData.filter(a => a.department?.trim() === selectedDept);

  const currentAnnouncement = filteredAnnouncements.slice(indexOfFirstAnnouncement, indexOfLastAnnouncement);
  
  const departments = ['All', ...new Set(projectsData.map(a => a.department))];

  return (
    <div className="min-h-screen bg-[url('https://i.pinimg.com/1200x/7f/da/e8/7fdae83507a0e18b86d23cfd7f495bda.jpg')] bg-cover bg-center bg-no-repeat p-16">
      <h1 className="text-4xl font-bold text-center py-5">College Announcements</h1>
      
      <div className="flex flex-row justify-between  mb-6">

        <div  className="flex flex-row justify-start  mb-6">
            <FontAwesomeIcon icon={faCalendarDays} size="2x"
            onClick={()=>navigate('/CalenderPage')}
             />        
          </div>

        
        <div className="flex flex-row justify-end  mb-6">
          <select
          value={selectedDept}
          onChange={(e) => setSelectedDept(e.target.value)}
          className="border w-12 h-10 px-1 py-1 rounded-md"
        >
          {departments.map((dept, index) => (
            <option key={index} value={dept}>{dept}</option>
          ))}
        </select>
        </div>
      </div>


      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {currentAnnouncement.map((announcement, id) => (
          <AnnouncementCard key={id} announcement={announcement} />
        ))}
      </div>

      <div className="mt-6 flex justify-center gap-2">
        {Array.from({ length: totalPages }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentPage(idx + 1)}
            className={`px-3 py-1 rounded ${currentPage === idx + 1 ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
          >
            {idx + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Home;
