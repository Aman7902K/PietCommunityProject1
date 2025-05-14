import React  from 'react'
import { useState } from 'react';

function Profile_card() {
        const [user, setUser] = useState({
            name: 'John Doe',
            email: 'johndoe@example.com',
            phone: '123-456-7890',
            address: '123 Main St, Springfield',
            department: 'Engineering'
        });
return (
    <>
        <div className="profile p-6 bg-white rounded-lg shadow-md w-full flex flex-col sm:flex-row items-center">
            <div className="profile-image mb-4 sm:mb-0 sm:mr-6 flex-shrink-0">
                <img
                    src="https://images.pexels.com/photos/1654760/pexels-photo-1654760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Profile"
                    className="rounded-full w-24 h-24 sm:w-32 sm:h-32 object-cover"
                />
            </div>
            <div className="profile-details flex-1 text-center sm:text-left">
                <h1 className="text-xl sm:text-2xl font-bold mb-4">Profile</h1>
                <div className="profile-info grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                    <p className="text-gray-700">
                        <span className="font-semibold">Name:</span> {user.name}
                    </p>
                    <p className="text-gray-700">
                        <span className="font-semibold">Email:</span> {user.email}
                    </p>
                    <p className="text-gray-700">
                        <span className="font-semibold">Phone:</span> {user.phone}
                    </p>
                    <p className="text-gray-700">
                        <span className="font-semibold">Address:</span> {user.address}
                    </p>
                    <p className="text-gray-700">
                        <span className="font-semibold">Department:</span> {user.department}
                    </p>
                </div>
            </div>
            <div className="profile-actions flex md:flex-col gap-2 space-y-2 mt-4 sm:mt-0 sm:ml-6">
                <button className="px-3 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                    Edit Profile
                </button>
                <button className="px-3 py-2 bg-blue-500 text-white rounded hover:bg-yellow-300">
                    Change Password
                </button>
                <button className="px-3 py-2  bg-blue-500 text-white rounded hover:bg-red-600">
                    Logout
                </button>
            </div>
        </div>
    </>
);
}

export default Profile_card