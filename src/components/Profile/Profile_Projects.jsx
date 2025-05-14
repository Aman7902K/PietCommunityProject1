import React from "react";

export default function Profile_Projects() {
  const [project_data, setProjectData] = React.useState([
    {
      id: 1,
      name: "Project 1",
      description: "Description of project 1.",
    },
    {
      id: 2,
      name: "Project 2",
      description: "Description of project 2.",
    },
    {
      id: 3,
      name: "Project 3",
      description: "Description of project 3.",
    },
  ]);
return (
    <>
        <div className="projects-section p-6 bg-blue-100 rounded-lg shadow-md w-full m-6 sm:w-[90%] md:w-[80%] lg:w-[90%] xl:w-[80%]">
            <h2 className="text-xl font-bold mb-4 text-center sm:text-left">Projects</h2>
            <ul className="project-list space-y-4">
                {project_data.map((item) => {
                    return (
                        <li
                            key={item.id}
                            className="project-item p-4 bg-white rounded shadow hover:shadow-lg transition-shadow duration-300"
                        >
                            <h3 className="font-semibold text-lg text-center sm:text-left">{item.name}</h3>
                            <p className="text-gray-600 text-center sm:text-left">{item.description}</p>
                        </li>
                    );
                })}
            </ul>
        </div>
    </>
);
}
