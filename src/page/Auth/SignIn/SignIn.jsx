
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from 'react-icons/fa';


const SignIn = () => {
  // State to toggle password visibility
  const [showPassword, setShowPassword] = useState(false);

  // Function to toggle password visibility
  const togglePassword = () => {
    setShowPassword(prevState => !prevState);
  };

  return (
    <div className='h-screen overflow-y-auto grid lg:grid-cols-2 bg-[#1a3248] text-white'>

      <div className='flex justify-center items-center mt-20'>
        <div className='md:min-w-[500px] min-w-full md:px-0 px-5'>
          <div>
            <img src="/Images/Auth/logo.png" alt="" />
            <p className='mt-2'>Login to your account</p>
          </div>
          <div className='mt-8'>
            <label className='font-semibold' htmlFor="email">Email</label>
            <input
              placeholder='Enter your email'
              className='mt-2 w-full p-2 border border-orange-500 rounded-md focus:outline-0 ring-0 bg-white'
              type="email"
              name="email"
              id="email"
            />
          </div>
          <div className='mt-5'>
            <label className='font-semibold' htmlFor="password">Password</label>
            <div className='relative'>
              <input
                placeholder='Enter your password'
                className='mt-2 w-full p-2 border border-orange-500 rounded-md focus:outline-0 ring-0 bg-white'
                type={showPassword ? "text" : "password"} // Toggle password visibility
                name="password"
                id="password"
              />
              {/* Show/Hide Password Icon */}
              <button
                type="button"
                onClick={togglePassword}
                className='absolute cursor-pointer right-3 top-[30px] transform -translate-y-1/2 text-gray-500'
              >
                {!showPassword ? '🙈' : '👁️'}
              </button>
            </div>
          </div>
          <div className='flex justify-between items-center my-5'>
            <label className='' htmlFor="remember">
              <input className='' type="checkbox" name="remember" id="remember" />
              <span className='ml-2 text-orange-400'>Remember me</span>
            </label>
            <Link className='text-orange-500 text-sm' to="/auth/forget-password">Forgot Password</Link>
          </div>
          <div className='mt-5'>
            <button className='cursor-pointer w-full p-2 bg-orange-500 font-semibold text-white rounded-md'>Login</button>
          </div>
          {/* or section  */}
          <div className='flex items-center justify-center'>
            <span className='w-full block h-[1px] mt-1 bg-gray-500'></span>
            <p className='text-center text-gray-600'>or</p>
            <span className='w-full block h-[1px] mt-1 bg-gray-500'></span>
          </div>
          <div className='flex flex-wrap lg:flex-nowrap items-center gap-2'>
            <div className='mt-5 w-full'>
              <button className='cursor-pointer flex items-center justify-center gap-2 w-full p-2  border border-white font-semibold text-white rounded-md'><FcGoogle /> Google</button>
            </div>
            <div className='mt-5 w-full'>
              <button className='cursor-pointer flex items-center justify-center gap-2 w-full p-2  border border-white font-semibold text-white rounded-md'><FaFacebook className='text-blue-500' /> Facebook</button>
            </div>
          </div>
        </div>
      </div>
      <img className='lg:block hidden w-full' src="/Images/Auth/auth_image.png" alt="" />
    </div>
  );
};

export default SignIn;

