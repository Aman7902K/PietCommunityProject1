import React, { useState } from 'react';

function UploadProject() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    department: '',
    image: '',
    liveLink: '',
    status: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData(prev => ({ ...prev, image: e.target.files[0] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.image) {
      alert('Please upload a project image');
      return;
    }

    const body = new FormData();
    body.append('title', formData.title);
    body.append('description', formData.description);
    body.append('department', formData.department);
    body.append('liveLink', formData.liveLink);
    body.append('status', formData.status);
    body.append('image', formData.image);

    try {
      const res = await fetch('http://localhost:5000/api/projects', {
        method: 'POST',
        body,
      });

      if (!res.ok) throw new Error('Project upload failed');
      const data = await res.json();
      alert('✅ Project uploaded successfully!');
    } catch (err) {
      console.error(err);
      alert('❌ Error uploading project');
    }
  }

  return (
    <div className=" min-h-screen bg-[url('https://i.pinimg.com/1200x/f7/7d/8f/f77d8f4238fe57658b6e43c68fa7227d.jpg')] bg-cover bg-center bg-no-repeat px-4 py-16 ">
      <div className="max-w-2xl mx-auto mt-12 bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Upload Project</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-medium mb-1">Project Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded-md"
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded-md"
              rows="4"
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Department</label>
            <select
              name="department"
              value={formData.department}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded-md"
            >
              <option value="">Select Department</option>
              <option value="BCA">BCA</option>
              <option value="MCA">MCA</option>
              <option value="B.Tech CSE">B.Tech CSE</option>
              <option value="MBA">MBA</option>
            </select>
          </div>
          <div>
            <label className="block font-medium mb-1">Project Image</label>
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleFileChange}
              required
              className="w-full p-2 border rounded-md"
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Live Link</label>
            <input
              type="url"
              name="liveLink"
              value={formData.liveLink}
              onChange={handleChange}
              placeholder="https://yourproject.com"
              className="w-full p-2 border rounded-md"
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Status</label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded-md"
            >
              <option value="">Select Status</option>
              <option value="Live">Live</option>
              <option value="InProgress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700"
          >
            Submit Project
          </button>
        </form>
      </div>
    </div>
  );
}

export default UploadProject;
