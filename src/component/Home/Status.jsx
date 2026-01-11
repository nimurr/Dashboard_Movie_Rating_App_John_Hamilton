import React from 'react';
import { FaArrowTrendUp, FaRegUser } from 'react-icons/fa6';

const Status = () => {
    return (
        <div className='grid xl:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-5'>
            <div className='bg-[#1a3c58] shadow duration-300 hover:shadow-orange-500 p-5 rounded-lg flex justify-between items-start'>
                <div>
                    <p>Total User</p>
                    <h2 className='text-5xl font-semibold my-2'>1500</h2>
                    <p className='text-green-600 flex items-center gap-2'><FaArrowTrendUp /> +12</p>
                </div>
                <div className='w-12 h-12 bg-gray-300 flex items-center rounded-lg justify-center'>
                    <FaRegUser className='text-[#1a3c58] text-2xl' />
                </div>
            </div>
            <div className='bg-[#1a3c58] shadow duration-300 hover:shadow-orange-500 p-5 rounded-lg flex justify-between items-start'>
                <div>
                    <p>Total User</p>
                    <h2 className='text-5xl font-semibold my-2'>1500</h2>
                    <p className='text-green-600 flex items-center gap-2'><FaArrowTrendUp /> +12</p>
                </div>
                <div className='w-12 h-12 bg-gray-300 flex items-center rounded-lg justify-center'>
                    <FaRegUser className='text-[#1a3c58] text-2xl' />
                </div>
            </div>
            <div className='bg-[#1a3c58] shadow duration-300 hover:shadow-orange-500 p-5 rounded-lg flex justify-between items-start'>
                <div>
                    <p>Total User</p>
                    <h2 className='text-5xl font-semibold my-2'>1500</h2>
                    <p className='text-green-600 flex items-center gap-2'><FaArrowTrendUp /> +12</p>
                </div>
                <div className='w-12 h-12 bg-gray-300 flex items-center rounded-lg justify-center'>
                    <FaRegUser className='text-[#1a3c58] text-2xl' />
                </div>
            </div>
            <div className='bg-[#1a3c58] shadow duration-300 hover:shadow-orange-500 p-5 rounded-lg flex justify-between items-start'>
                <div>
                    <p>Total User</p>
                    <h2 className='text-5xl font-semibold my-2'>1500</h2>
                    <p className='text-green-600 flex items-center gap-2'><FaArrowTrendUp /> +12</p>
                </div>
                <div className='w-12 h-12 bg-gray-300 flex items-center rounded-lg justify-center'>
                    <FaRegUser className='text-[#1a3c58] text-2xl' />
                </div>
            </div>
            <div className='bg-[#1a3c58] shadow duration-300 hover:shadow-orange-500 p-5 rounded-lg flex justify-between items-start'>
                <div>
                    <p>Total User</p>
                    <h2 className='text-5xl font-semibold my-2'>1500</h2>
                    <p className='text-green-600 flex items-center gap-2'><FaArrowTrendUp /> +12</p>
                </div>
                <div className='w-12 h-12 bg-gray-300 flex items-center rounded-lg justify-center'>
                    <FaRegUser className='text-[#1a3c58] text-2xl' />
                </div>
            </div>

        </div>
    );
}

export default Status;
