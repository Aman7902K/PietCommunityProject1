import React, { useState, useEffect } from 'react';
import ProjectCard from '../Components/ProjectCard';

function Project() {
  const [projectsData, setProjectsData] = useState([]);  
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/api/projects')
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



  const projectsPerPage = 9;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projectsData.slice(indexOfFirstProject, indexOfLastProject);
  console.log(currentProjects);

  const totalPages = Math.ceil(projectsData.length / projectsPerPage);

  if (loading) {
    return <div>Loading...</div>; 
  }

  return (
    <div className="flex flex-col min-h-screen bg-[url('https://i.pinimg.com/1200x/d8/27/f9/d827f92295330bbd43f5906e67d23cdd.jpg')] py-16">
      <h1 className="text-4xl font-montserrat font-bold text-center py-3">PIET Projects</h1>
      <div className="mt-2 max-w-screen overflow-x-hidden min-h-screen">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-8">
          
          {currentProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
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

export default Project;
