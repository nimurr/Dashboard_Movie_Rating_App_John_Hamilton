import React from 'react';
import { FaArrowTrendUp, FaDollarSign, FaRegUser, FaUsers } from 'react-icons/fa6';
import { IoIosTrendingDown } from 'react-icons/io';
import { MdOutlineReviews } from 'react-icons/md';
import { TbMovie } from 'react-icons/tb';

const Status = () => {
    return (
        <div className='grid xl:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-5'>
            <div className='bg-[#1a3c58] shadow duration-300 hover:shadow-orange-500 p-5 rounded-lg flex justify-between items-start'>
                <div>
                    <p>Total Users</p>
                    <h2 className='text-5xl font-semibold my-2'>1500</h2>
                    <p className='text-green-600 flex items-center gap-2'><FaArrowTrendUp /> +12%</p>
                </div>
                <div className='w-12 h-12 bg-gray-300 flex items-center rounded-lg justify-center'>
                    <FaUsers className='text-[#1a3c58] text-2xl' />
                </div>
            </div>
            <div className='bg-[#1a3c58] shadow duration-300 hover:shadow-orange-500 p-5 rounded-lg flex justify-between items-start'>
                <div>
                    <p>Active Subscriber</p>
                    <h2 className='text-5xl font-semibold my-2'>895</h2>
                    <p className='text-red-600 flex items-center gap-2'><IoIosTrendingDown /> +12%</p>
                </div>
                <div className='w-12 h-12 bg-gray-300 flex items-center rounded-lg justify-center'>
                    <FaRegUser className='text-[#1a3c58] text-2xl' />
                </div>
            </div>
            <div className='bg-[#1a3c58] shadow duration-300 hover:shadow-orange-500 p-5 rounded-lg flex justify-between items-start'>
                <div>
                    <p>Monthly revenue</p>
                    <h2 className='text-5xl font-semibold my-2'>14752</h2>
                    <p className='text-green-600 flex items-center gap-2'><FaArrowTrendUp /> +12%</p>
                </div>
                <div className='w-12 h-12 bg-gray-300 flex items-center rounded-lg justify-center'>
                    <FaDollarSign className='text-[#1a3c58] text-2xl' />
                </div>
            </div>
            <div className='bg-[#1a3c58] shadow duration-300 hover:shadow-orange-500 p-5 rounded-lg flex justify-between items-start'>
                <div>
                    <p>Movie Rated</p>
                    <h2 className='text-5xl font-semibold my-2'>582</h2>
                    <p className='text-red-600 flex items-center gap-2'><IoIosTrendingDown /> +12%</p>
                </div>
                <div className='w-12 h-12 bg-gray-300 flex items-center rounded-lg justify-center'>
                    <TbMovie className='text-[#1a3c58] text-2xl' />
                </div>
            </div>
            <div className='bg-[#1a3c58] shadow duration-300 hover:shadow-orange-500 p-5 rounded-lg flex justify-between items-start'>
                <div>
                    <p>Review Submitted</p>
                    <h2 className='text-5xl font-semibold my-2'>7852</h2>
                    <p className='text-green-600 flex items-center gap-2'><FaArrowTrendUp /> +12%</p>
                </div>
                <div className='w-12 h-12 bg-gray-300 flex items-center rounded-lg justify-center'>
                    <MdOutlineReviews className='text-[#1a3c58] text-2xl' />
                </div>
            </div>

        </div>
    );
}

export default Status;
