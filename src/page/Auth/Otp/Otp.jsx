import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import OTPInput from 'react-otp-input';

const Otp = () => {
  const [otp, setOtp] = useState('');

  return (
    <div className='h-screen overflow-y-auto grid lg:grid-cols-2 bg-[#1a3248] text-white'>

      {/* Left Side */}
      <div className='flex justify-center items-center mt-20'>
        <div className='md:min-w-[500px] min-w-full md:px-0 px-5'>

          {/* Logo & Title */}
          <div>
            <img src="/Images/Auth/logo.png" alt="logo" />
            <p className='mt-2'>Verify OTP</p>
          </div>

          {/* Description */}
          <p className='mt-6 text-gray-400'>
            Please enter the 6-digit OTP sent to your email address.
          </p>

          {/* OTP Input */}
          <div className='mt-8'>
            <label className='font-semibold block mb-3'>Enter OTP</label>

            <OTPInput
              value={otp}
              onChange={setOtp}
              numInputs={6}
              containerStyle={{
                display: 'flex',
                justifyContent: 'space-between',
              }}
              renderInput={(props) => (
                <input
                  {...props}
                  className="!border !border-orange-500 bg-white text-black rounded-md outline-none focus:border-orange-500 transition"
                  style={{
                    width: '60px',
                    height: '60px',
                    textAlign: 'center',
                    fontSize: '18px'
                  }}
                />
              )}
            />
          </div>

          {/* Verify Button */}
          <div className='mt-8'>
            <Link to="/auth/new-password/:email">
              <button className='cursor-pointer w-full p-2 bg-orange-500 font-semibold text-white rounded-md'>
                Verify OTP
              </button>
            </Link>
          </div>

          {/* Back */}
          <p className='text-center mt-5 text-gray-600'>
            Didn’t receive the code?
            <span className='text-orange-500 font-semibold ml-1 cursor-pointer'>
              Resend OTP
            </span>
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

export default Otp;
