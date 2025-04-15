import { StrictMode, useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import App from "./App";
import "./index.css";
import LoadingSpinner from "./components/loadingspinner/load";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

// Import images
import heroImage1 from "./assets/images/hero-img-1.jpg";
import heroImage2 from "./assets/images/hero-img-2.jpg";
import heroImage3 from "./assets/images/hero-img-3.jpg";

// Team Members
import Claire_Chella from "./assets/images/Claire_Chella.jpg";
import Dr_c from "./assets/images/Dr_C.jpg";
import Lulwa_Batarni from "./assets/images/Lulwa_Batarni.jpg";
import Niza_mbaofrom from "./assets/images/Niza_Mbao.jpg";

// Landing page component
function LandingPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const slides = [
    {
      image: heroImage1,
      tagline: "Build Your Dream Business",
      subtext:
        "Access tools and resources designed specifically for women entrepreneurs.",
    },
    {
      image: heroImage2,
      tagline: "Connect With Like-minded Entrepreneurs",
      subtext:
        "Join a supportive community of women who understand your journey.",
    },
    {
      image: heroImage3,
      tagline: "Thrive In Your Business Journey",
      subtext: "Get mentorship and funding opportunities to scale your impact.",
    },
  ];

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 60000); // 60000ms = 1 minute

    return () => {
      clearTimeout(timer);
      clearInterval(slideInterval);
    };
  }, []);

  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center bg-gradient-to-b from-white to-pink-50">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-b from-white to-pink-50 text-gray-800">
      {/* Header */}
      <Navbar />

      {/* Hero Section */}
      <section className="py-8 md:py-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            {/* Left side - Text content */}
            <div className="w-full md:w-1/2 mb-10 md:mb-0 md:pr-10 text-center md:text-left">
              <h1 className="text-3xl md:text-4xl font-bold text-pink-700 mb-4">
                One-Stop Platform for Women Entrepreneurs
              </h1>
              <h2 className="text-xl md:text-2xl font-semibold text-pink-600 mb-4">
                Build, Connect, and Thrive.
              </h2>
              <p className="text-gray-600 mb-8">
                Empowering women with tools, mentorship, funding, and resources
                to launch and scale impactful businesses.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
                <button className="bg-pink-500 text-white px-6 py-3 rounded-full hover:bg-pink-600 transition duration-300">
                  Get Started
                </button>
                <button className="border border-pink-500 text-pink-500 px-6 py-3 rounded-full hover:bg-pink-50 transition duration-300">
                  Learn More
                </button>
              </div>
            </div>

            {/* Right side - Image carousel */}
            <div className="w-full md:w-1/2 relative h-[250px] sm:h-[300px] md:h-[400px]">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    currentSlide === index
                      ? "opacity-100 z-10"
                      : "opacity-0 z-0"
                  }`}
                >
                  <img
                    src={slide.image}
                    alt={`SheInnovate - ${slide.tagline}`}
                    className="w-full h-full object-cover rounded-lg shadow-lg"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-pink-700 to-transparent p-4 md:p-6 text-white">
                    <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2">
                      {slide.tagline}
                    </h3>
                    <p className="text-xs md:text-sm">{slide.subtext}</p>
                  </div>
                </div>
              ))}

              {/* Slide indicators */}
              <div className="absolute -bottom-8 left-0 right-0 flex justify-center space-x-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-colors ${
                      currentSlide === index ? "bg-pink-500" : "bg-pink-200"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-pink-700 mb-4">
              What We Offer
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Everything you need to build, grow, and scale your business in one
              place. Our platform provides tools and resources specifically
              designed for women entrepreneurs.
            </p>
          </div>

          {/* Carousel container with overflow */}
          <div className="relative px-10">
            {/* Left scroll button */}
            <button
              onClick={() => {
                const container = document.getElementById("carousel-container");
                container.scrollBy({ left: -300, behavior: "smooth" });
              }}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 rounded-full p-2 shadow-md hover:bg-pink-100"
              aria-label="Scroll left"
            >
              <svg
                className="w-6 h-6 text-pink-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                ></path>
              </svg>
            </button>

            {/* Right scroll button */}
            <button
              onClick={() => {
                const container = document.getElementById("carousel-container");
                container.scrollBy({ left: 300, behavior: "smooth" });
              }}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 rounded-full p-2 shadow-md hover:bg-pink-100"
              aria-label="Scroll right"
            >
              <svg
                className="w-6 h-6 text-pink-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </button>

            {/* Scrollable container - with hidden scrollbar */}
            <div
              id="carousel-container"
              className="flex overflow-x-auto pb-6 sm:pb-8 snap-x snap-mandatory scrollbar-hide -mx-4 px-4"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {/* Card data array */}
              {[
                {
                  title: "Network",
                  description:
                    "Meet like-minded founders, mentors, and partners. Build your support system.",
                  icon: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    ></path>
                  ),
                  bgColor: "bg-white",
                  footerBg: "bg-pink-50",
                },
                {
                  title: "Crowdfunding",
                  description:
                    "Find backers, pitch your startup, and raise funds with ease.",
                  icon: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  ),
                  bgColor: "bg-pink-50",
                  footerBg: "bg-white",
                },
                {
                  title: "Idea",
                  description:
                    "Share your idea, get feedback, and connect with incubators.",
                  icon: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    ></path>
                  ),
                  bgColor: "bg-white",
                  footerBg: "bg-pink-50",
                },
                {
                  title: "Resources",
                  description:
                    "Access legal, financial, marketing, and HR tools for your business.",
                  icon: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                    ></path>
                  ),
                  bgColor: "bg-pink-50",
                  footerBg: "bg-white",
                },
                {
                  title: "Marketplace",
                  description:
                    "Sell, promote, and track your product delivery all in one place.",
                  icon: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                    ></path>
                  ),
                  bgColor: "bg-white",
                  footerBg: "bg-pink-50",
                },
              ].map((card, index) => (
                <div
                  key={index}
                  className="min-w-[160px] sm:min-w-[200px] max-w-[250px] mx-2 sm:mx-4 flex-shrink-0 snap-start"
                >
                  <div
                    className={`${card.bgColor} rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl border-t-4 border-pink-500 h-[350px] sm:h-[400px] flex flex-col`}
                  >
                    <div className="p-4 sm:p-6 flex-grow">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-pink-100 rounded-full flex items-center justify-center mb-4 sm:mb-6 mx-auto">
                        <svg
                          className="w-6 h-6 sm:w-8 sm:h-8 text-pink-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          {card.icon}
                        </svg>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-semibold text-pink-700 mb-2 sm:mb-4 text-center">
                        {card.title}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-600 text-center">
                        {card.description}
                      </p>
                    </div>
                    <div className={`mt-auto p-3 sm:p-4 ${card.footerBg}`}>
                      <button className="w-full py-2 text-pink-600 font-medium hover:text-pink-700 transition-colors text-sm sm:text-base">
                        Learn More →
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Rest of the section remains the same */}
          {/* Carousel indicators */}
          <div className="flex justify-center space-x-2 mt-4">
            {/* Indicators code */}
          </div>

          <div className="text-center mt-12">
            <button className="bg-pink-500 text-white px-6 py-3 rounded-full hover:bg-pink-600 transition duration-300">
              Explore All Features
            </button>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-pink-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-pink-700 mb-4">
              How It Works
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our platform makes it easy to turn your business idea into reality
              with just three simple steps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Step 1 */}
            <div className="bg-white rounded-lg shadow-md p-8 text-center relative">
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-pink-500 text-white flex items-center justify-center text-xl font-bold">
                1
              </div>
              <div className="w-20 h-20 mx-auto bg-pink-100 rounded-full flex items-center justify-center mb-6">
                <svg
                  className="w-10 h-10 text-pink-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-pink-700 mb-3">
                Create a Profile
              </h3>
              <p className="text-gray-600">
                Sign up and build your entrepreneur profile. Share your vision,
                skills, and the impact you want to make.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-lg shadow-md p-8 text-center relative">
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-pink-500 text-white flex items-center justify-center text-xl font-bold">
                2
              </div>
              <div className="w-20 h-20 mx-auto bg-pink-100 rounded-full flex items-center justify-center mb-6">
                <svg
                  className="w-10 h-10 text-pink-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-pink-700 mb-3">
                Validate & Connect
              </h3>
              <p className="text-gray-600">
                Get feedback on your ideas, connect with mentors, and build
                relationships with potential partners.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-lg shadow-md p-8 text-center relative">
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-pink-500 text-white flex items-center justify-center text-xl font-bold">
                3
              </div>
              <div className="w-20 h-20 mx-auto bg-pink-100 rounded-full flex items-center justify-center mb-6">
                <svg
                  className="w-10 h-10 text-pink-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-pink-700 mb-3">
                Launch Your Dream
              </h3>
              <p className="text-gray-600">
                Access funding opportunities, resources, and tools to turn your
                vision into a thriving business.
              </p>
            </div>
          </div>

          {/* Connecting lines between steps (visible on md screens and up) */}
          <div className="hidden md:block relative max-w-5xl mx-auto">
            <div className="absolute top-[-120px] left-[33%] w-[33%] border-t-2 border-dashed border-pink-300"></div>
            <div className="absolute top-[-120px] left-[66%] w-[33%] border-t-2 border-dashed border-pink-300"></div>
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <button className="bg-pink-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-pink-700 transition duration-300 shadow-lg">
              Sign Up for Free
            </button>
            <p className="text-gray-500 mt-4 text-sm">
              No credit card required. Start your journey today.
            </p>
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-pink-700 mb-4">
              Meet the Team
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our diverse team of experts is passionate about empowering women
              entrepreneurs and helping them succeed.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            

              {/* Team Member 1 */}
            <div className="bg-pink-50 rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:shadow-xl hover:-translate-y-2">
              <div className="h-64 overflow-hidden">
                <img
                  src={Niza_mbaofrom}
                  alt="Portrait of Niza Mbao"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-pink-700">
                  Niza Mbao
                </h3>
                <p className="text-pink-500 mb-3">CEO, CTO and Co-founder</p>
                <p className="text-gray-600 text-sm mb-4">
                  Passionate about creating inclusive spaces for women to
                  collaborate and grow together.
                </p>

                {/* Social icons */}
                {/* <div className="flex space-x-3">
                  
                  <a
                    href="#"
                    aria-label="Twitter"
                    className="text-pink-400 hover:text-pink-600"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8.29 20.251c7.547 0 11.675-6.253..." />
                    </svg>
                  </a>
                  <a
                    href="#"
                    aria-label="GitHub"
                    className="text-pink-400 hover:text-pink-600"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 2C6.477 2..."
                      />
                    </svg>
                  </a>
                  <a
                    href="#"
                    aria-label="Portfolio"
                    className="text-pink-400 hover:text-pink-600"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 2C6.48 2..."
                      />
                    </svg>
                  </a>
                </div> */}
              </div>
            </div>

          

           

            {/* Team Member 2*/}
            <div className="bg-pink-50 rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:shadow-xl hover:-translate-y-2">
              <div className="h-64 overflow-hidden">
                <img
                  src={Lulwa_Batarni}
                  alt="Portrait of Lulwa Batarni"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-pink-700">
                  Lulwa Batarni
                </h3>
                <p className="text-pink-500 mb-3">Co-founder and CBO</p>
                <p className="text-gray-600 text-sm mb-4">
                  Connects entrepreneurs with resources, mentors, and funding
                  opportunities.
                </p>

                {/* Social icons */}
                {/* <div className="flex space-x-3">
                 
                  <a
                    href="#"
                    aria-label="Twitter"
                    className="text-pink-400 hover:text-pink-600"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8.29 20.251c7.547 0 11.675-6.253..." />
                    </svg>
                  </a>
                  <a
                    href="#"
                    aria-label="GitHub"
                    className="text-pink-400 hover:text-pink-600"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 2C6.477 2..."
                      />
                    </svg>
                  </a>
                  <a
                    href="#"
                    aria-label="Portfolio"
                    className="text-pink-400 hover:text-pink-600"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 2C6.48 2..."
                      />
                    </svg>
                  </a>
                </div> */}
              </div>
            </div>

              {/* Team Member 3*/}
              <div className="bg-pink-50 rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:shadow-xl hover:-translate-y-2">
              <div className="h-64 overflow-hidden">
                <img
                  src={Dr_c}
                  alt="Portrait of Dr. C"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-pink-700">Dr. C</h3>
                <p className="text-pink-500 mb-3">COO</p>
                <p className="text-gray-600 text-sm mb-4">
                  Experienced developer building accessible tech solutions for
                  women entrepreneurs.
                </p>

                {/* Social icons */}
                {/* <div className="flex space-x-3">
                  
                  <a
                    href="#"
                    aria-label="Twitter"
                    className="text-pink-400 hover:text-pink-600"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8.29 20.251c7.547 0 11.675-6.253..." />
                    </svg>
                  </a>
                  <a
                    href="#"
                    aria-label="GitHub"
                    className="text-pink-400 hover:text-pink-600"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 2C6.477 2..."
                      />
                    </svg>
                  </a>
                  <a
                    href="#"
                    aria-label="Portfolio"
                    className="text-pink-400 hover:text-pink-600"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 2C6.48 2..."
                      />
                    </svg>
                  </a>
                </div> */}
              </div>
            </div>

                  {/* Team member 4*/}
            <div className="bg-pink-50 rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:shadow-xl hover:-translate-y-2">
              <div className="h-64 overflow-hidden">
                <img
                  src={Claire_Chella}
                  alt="Portrait of Claire Chella"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-pink-700">
                  Claire Chella
                </h3>
                <p className="text-pink-500 mb-3">Senior Developer</p>
                <p className="text-gray-600 text-sm mb-4">
                  Former tech executive with a passion for helping women build
                  sustainable businesses.
                </p>
                
              </div>
            </div>

            
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export { LandingPage };

// Render the app
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
