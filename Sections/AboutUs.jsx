import React from 'react'
import {teamMembers} from "../Constants/Index"
function AboutUs() {
  return (
     <div className="min-h-screen bg-[url('https://i.pinimg.com/736x/66/fd/76/66fd76279f5b75185ba4d79e32520cd4.jpg')] bg-cover bg-center bg-no-repeat p-16 overflow-y-auto ">
      <div className="max-w-7xl mx-auto mt-3">
        <h1 className="text-4xl font-bold text-center mb-10">Meet the Team</h1>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-6 text-center">
            <img
              src={member.image}
              alt={member.name}
              className="w-24 h-24 mx-auto rounded-full mb-4 object-cover"
            />
            <h2 className="text-xl font-semibold">{member.name}</h2>
            <p className="text-gray-600 mb-2">{member.role}</p>
            <p className="text-gray-500 text-sm">{member.bio}</p>
          </div>
        ))}
      </div>
      </div>
    </div>
  )
}

export default AboutUs