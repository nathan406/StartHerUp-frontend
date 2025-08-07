import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './components/navbar'
 

const Sign = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-pink-50">
      <Navbar />

      {/* sign in card */}
      <div className="flex-grow flex items-center justify-center px-4 py-12">
        <div className="bg-white rounded-xl shadow-xl overflow-hidden max-w-md w-full">
          {/* Sign in header */}
          <div className="bg-pink-600 text-white py-8 px-8">
            <h2 className="text-3xl font-bold text-center">Welcome to SheInnovate</h2>
            <p className="text-center text-pink-100 mt-3">The platform for women entrepreneurs</p>
          </div>

          {/* Sign in content */}
          <div className="p-8">
            {/* Illustration */}
            <div className="flex justify-center mb-10">
              <div className="w-32 h-32 bg-pink-100 rounded-full flex items-center justify-center">
                <svg className="w-20 h-20 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
            </div>

            <div className="text-center mb-8">
              <h3 className="text-xl font-semibold text-gray-800">Sign in to your account</h3>
              <p className="text-gray-600 mt-2">Connect with the community of women entrepreneurs</p>
            </div>

            {/* Social Sign In Buttons */}
            <div className="space-y-4 mb-8">
              {/* Google Sign In Button */}
              <button className="w-full flex items-center justify-center gap-3 bg-white border border-gray-300 rounded-full py-4 px-6 text-gray-700 hover:bg-gray-50 transition duration-300 shadow-sm">
                <svg width="20" height="20" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                <span className="font-medium">Sign in with Google</span>
              </button>

              {/* Facebook Sign In Button */}
              <button className="w-full flex items-center justify-center gap-3 bg-[#1877F2] border border-[#1877F2] rounded-full py-4 px-6 text-white hover:bg-[#166FE5] transition duration-300 shadow-sm">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                <span className="font-medium">Sign in with Facebook</span>
              </button>
            </div>

            <div className="text-center text-sm text-gray-600 mt-6">
              <p>New to SheInnovate?{' '}
              <Link to="/sign" className="font-medium text-pink-600 hover:text-pink-500">Create an account</Link></p>
            </div>
          </div>
        </div>
      </div>

     
    </div>
  )
}

export default Sign