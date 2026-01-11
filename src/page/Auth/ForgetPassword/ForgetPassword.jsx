import React from 'react';
import { Link } from 'react-router-dom';

const ForgetPassword = () => {
  return (
    <div className='h-screen overflow-y-auto grid lg:grid-cols-2 bg-[#1a3248] text-white'>

      {/* Left Side */}
      <div className='flex justify-center items-center mt-20'>
        <div className='md:min-w-[500px] min-w-full md:px-0 px-5'>

          {/* Logo & Title */}
          <div>
            <img src="/Images/Auth/logo.png" alt="logo" />
            <p className='mt-2'>Forgot your password?</p>
          </div>

          {/* Description */}
          <p className='mt-6 text-gray-400'>
            Please enter your email address to receive an OTP
            for resetting your password.
          </p>

          {/* Email */}
          <div className='mt-8'>
            <label className='font-semibold'>Email</label>
            <input
              placeholder='Enter your email'
              className='mt-2 w-full p-2 border border-orange-500 rounded-md focus:outline-0 ring-0 bg-white'
              type="email"
            />
          </div>

          {/* Send OTP */}
          <div className='mt-6'>
            <Link to="/auth/otp/email.com">
              <button className='cursor-pointer w-full p-2 bg-orange-500 font-semibold text-white rounded-md'>
                Send OTP
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

export default ForgetPassword;
