function ProjectCard({ project }) {
  // console.log(project.image);
  
  console.log(`http://localhost:5000${project.image}`);
  
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
        <img
          src={`http://localhost:5000${project.image}`}
          alt={project.title}
          className="w-full h-40 object-cover rounded-t-lg mb-4"
        />        
  

      <h2 className="text-2xl font-semibold text-gray-800">{project.title}</h2>
      <p className="text-gray-600 mt-2">{project.description}</p>

      <div className="flex items-end justify-between">
        <a href={project.link} className="text-blue-500 mt-4 inline-block">
          View Project
        </a>
        <p className="text-sm font-medium font-mono">{project.department}</p>
      </div>
    </div>
  );
}

export default ProjectCard;
