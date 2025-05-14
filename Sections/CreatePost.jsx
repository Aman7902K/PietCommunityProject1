import React, { useState } from 'react';
import { announcements } from '../Constants/Index'; 

function CreatePost() {
  const [formData, setFormData] = useState({
    name: '',
    position: '',
    department: '',
    content: '',
    contentImg: null,
    profileImg: '',
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    const { name, files } = e.target;
    setFormData({
      ...formData,
      [name]: files[0], // For images
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  const body = new FormData();
  body.append('name', formData.name);
  body.append('position', formData.position);
  body.append('department', formData.department);
  body.append('content', formData.content);
  body.append('liveLink', formData.liveLink || ''); 
  body.append('status', formData.status || ''); 
  if (formData.contentImg) body.append('contentImg', formData.contentImg);
  if (formData.profileImg) body.append('profileImg', formData.profileImg);

  await fetch('http://localhost:5000/api/posts', {
    method: 'POST',
    body,
  });

  alert("Post submitted!");
};


  return (
    <div className=" min-h-screen bg-[url('https://www.saintlukeskc.org/sites/default/files/2018-01/3_SLH_MAHI_2595-002-hero.jpg')] bg-cover bg-center bg-no-repeat px-4 py-16">

      <div className=''>
    <div className="max-w-2xl mx-auto bg-gray-50 p-8 rounded-lg shadow-2xl mt-12 ">
      <h2 className="text-2xl font-bold mb-4 text-center">Create Announcement</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-md"
          />
        </div>
        
        <div>
          <label className="block font-medium">Position</label>
          <input
            type="text"
            name="position"
            value={formData.position}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-md"
          />
        </div>
        
        <div>
          <label className="block font-medium">Department</label>
          <input
            type="text"
            name="department"
            value={formData.department}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-md"
          />
        </div>

        <div>
          <label className="block font-medium">Content</label>
          <textarea
            name="content"
            value={formData.content}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-md"
            rows="4"
          />
        </div>

        <div>
          <label className="block font-medium">Content Image (Optional)</label>
          <input
            type="file"
            name="contentImg"
            onChange={handleImageChange}
            accept="image/*"
            className="w-full p-2 border rounded-md"
          />
        </div>

        <div>
          <label className="block font-medium">Profile Image</label>
          <input
            type="file"
            name="profileImg"
            onChange={handleImageChange}
            accept="image/*"
            className="w-full p-2 border rounded-md"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
        >
          Submit Announcement
        </button>
      </form>
    </div>
      </div>
    </div>
  );
}

export default CreatePost;
