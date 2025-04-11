import React, { useState } from 'react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-white shadow-md relative">
      <div className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
        <div className="text-2xl font-bold text-pink-600">SheInnovate</div>
        
        {/* Hamburger menu for mobile */}
        <button 
          className="md:hidden text-pink-600 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Desktop navigation */}
        <nav className="space-x-6 hidden md:flex">
          <a href="#" className="text-sm hover:text-pink-500">Contact</a>
          <a href="#" className="text-sm hover:text-pink-500">Terms & services</a>
          <a href="#" className="text-sm hover:text-pink-500">About</a>
          <button className="text-sm hover:text-pink-500">
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M11 6a.5.5 0 0 0-1 0v.293l-3.146 3.147a.5.5 0 0 0 .708.708L11 7.707V8a.5.5 0 0 0 1 0V6z" />
            </svg>
          </button>
          <button className="text-sm px-4 py-2 border border-pink-500 rounded-full text-pink-500 hover:bg-pink-100">
            Login
          </button>
          <button className="text-sm px-4 py-2 bg-pink-500 text-white rounded-full hover:bg-pink-600">
            Sign Up
          </button>
        </nav>
      </div>

      {/* Mobile menu dropdown */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md z-50">
          <div className="flex flex-col p-4 space-y-4">
            <a href="#" className="text-sm hover:text-pink-500">Contact</a>
            <a href="#" className="text-sm hover:text-pink-500">Terms & services</a>
            <a href="#" className="text-sm hover:text-pink-500">About</a>
            <button className="text-sm px-4 py-2 border border-pink-500 rounded-full text-pink-500 hover:bg-pink-100 w-full">
              Login
            </button>
            <button className="text-sm px-4 py-2 bg-pink-500 text-white rounded-full hover:bg-pink-600 w-full">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar