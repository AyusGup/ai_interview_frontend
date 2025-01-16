import React, { useState } from 'react'
import { FaUserCircle } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { PiGenderMaleBold } from "react-icons/pi";

function Profile() {
    const [user, setUser]=useState({
        first_name:"first",
        last_name:"last",
        email :"abcd@example.com",
        gender:"Male",
        phone_number: "1234567890",
        country :"india",


        

    })
  return (
    <div className=' ' >
        {/* profile begins  */}
        <div className='bg-white flex flex-col items-center mt-4 p-4 border w-1/2 m-auto rounded-2xl'>
            <div className='font-bold text-2xl '>Welcome !!</div>
            <div className='flex flex-col items-center'>
                {/* Image, name and mail  */}
             <div>
             <FaUserCircle className='size-32 m-2' />
             </div>
             <div className=''>
            <h2 className='font-semibold uppercase  '>{user.first_name} {user.last_name}</h2>
             </div>
            </div>

            <div className='w-full'>
                {/* personal info */}
                <div className=' flex justify-between items-center border-b-2 m-2'>
                <h2 className='font-semibold text-lg'>Personal Information </h2>
                <FaEdit />
                </div>
                <div className='flex flex-col gap-4'>
                    <p className='bg-gray-50'><MdEmail className='size-6 inline-block' /> {user.email}</p>
                    <p className='bg-gray-50'><FaPhoneAlt className='size-6 inline-block'/> {user.phone_number}</p>
                    <p className='bg-gray-50'><PiGenderMaleBold className='size-6 inline-block'/> {user.gender}</p>
                    <p className='bg-gray-50 uppercase'><FaLocationDot  className='size-6 inline-block'/> {user.country}</p>
                </div>

                
            </div>
            <div className='flex flex-col gap-4 w-full mt-4 '>
              <div className='border-b-2'>
                 <h2  className='font-semibold text-lg '>Resume</h2>
                </div> 
                <img src="" alt="Preview of Resume" className='bg-gray-50 p-2 rounded-lg' />
            </div>

        </div>

    </div>
  )
}

export default Profile