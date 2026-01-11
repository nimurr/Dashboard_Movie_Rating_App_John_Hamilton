import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';

const NewPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className='h-screen overflow-y-auto grid lg:grid-cols-2 bg-[#1a3248] text-white'>

      {/* Left Side */}
      <div className='flex justify-center items-center mt-20'>
        <div className='md:min-w-[500px] min-w-full md:px-0 px-5'>

          {/* Logo & Title */}
          <div>
            <img src="/Images/Auth/logo.png" alt="logo" />
            <p className='mt-2'>Update Password</p>
          </div>

          {/* Description */}
          <p className='mt-6 text-gray-400'>
            Please enter your new password and confirm it below.
          </p>

          {/* New Password */}
          <div className='mt-8'>
            <label className='font-semibold'>New Password</label>
            <div className='relative'>
              <input
                placeholder='Enter new password'
                className='mt-2 w-full p-2 border border-orange-500 rounded-md focus:outline-0 ring-0 bg-white'
                type={showPassword ? 'text' : 'password'}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className='absolute right-3 top-[30px] -translate-y-1/2 text-gray-500'
              >
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>
          </div>

          {/* Confirm Password */}
          <div className='mt-5'>
            <label className='font-semibold'>Confirm Password</label>
            <div className='relative'>
              <input
                placeholder='Confirm new password'
                className='mt-2 w-full p-2 border border-orange-500 rounded-md focus:outline-0 ring-0 bg-white'
                type={showConfirmPassword ? 'text' : 'password'}
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className='absolute right-3 top-[30px] -translate-y-1/2 text-gray-500'
              >
                {showConfirmPassword ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>
          </div>

          {/* Update Button */}
          <div className='mt-8'>
            <Link to="/auth/login">
              <button className='cursor-pointer w-full p-2 bg-orange-500 font-semibold text-white rounded-md'>
                Update Password
              </button>
            </Link>
          </div>

          {/* Back to Login */}
          <p className='text-center mt-5 text-gray-600'>
            Remember your password?
            <Link to="/auth/login" className='text-orange-500 font-semibold ml-1'>
              Login
            </Link>
          </p>

        </div>
      </div>

      {/* Right Side Image */}
      <img
        className='lg:block hidden w-full'
        src="/Images/Auth/auth_image.png"
        alt="auth"
      />
    </div>
  );
};

export default NewPassword;
