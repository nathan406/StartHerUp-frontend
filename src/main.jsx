import { StrictMode, useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import App from "./App";
import "./index.css";
import LoadingSpinner from "./components/loadingspinner/load";
import Navbar from "./components/navbar";

// Import images
import heroImage1 from "./assets/images/hero-img-1.jpg";
import heroImage2 from "./assets/images/hero-img-2.jpg";
import heroImage3 from "./assets/images/hero-img-3.jpg";

// Platform Features
import launchImage from "./assets/images/launch.png";
import meetImage from "./assets/images/meet.png";
import messageImage from "./assets/images/message.png";

// Team Members
import Claire_Chella from "./assets/images/Claire_Chella.jpg";
import Dr_c from "./assets/images/Dr_C.jpg";
import Lulwa_Batarni from "./assets/images/Lulwa_Batarni.jpg";
import Niza_mbaofrom from "./assets/images/Niza_Mbao.jpg";
import Nathan_Muyoba from "./assets/images/nathan.jfif";

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
                    alt={`StartHerUp - ${slide.tagline}`}
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

      {/* Platform Advantages Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-pink-700 mb-6">
              Why Join StartHerUp?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the powerful advantages of joining our platform designed specifically for women entrepreneurs and innovators.
            </p>
          </div>
        </div>
      </section>

      {/* Message Feature Section */}
      <section className="py-20 bg-gradient-to-br from-pink-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Huge Image */}
            <div className="w-full lg:w-1/2">
              <img 
                src={messageImage} 
                alt="Message fellow women in tech"
                className="w-full h-96 lg:h-[500px] object-contain rounded-2xl shadow-2xl"
              />
            </div>
            {/* Text Content */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <h3 className="text-3xl lg:text-4xl font-bold text-pink-700 mb-6">
                Message Fellow Women in Tech
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Connect directly with like-minded women entrepreneurs and tech innovators. 
                Share ideas, seek advice, and build meaningful professional relationships 
                through our integrated messaging platform. Break down barriers and create 
                lasting connections that will fuel your entrepreneurial journey.
              </p>
              <button className="bg-pink-500 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-pink-600 transition duration-300 shadow-lg">
                Start Messaging
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Meet & Connect Feature Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            {/* Huge Image */}
            <div className="w-full lg:w-1/2">
              <img 
                src={meetImage} 
                alt="Meet and connect with people"
                className="w-full h-96 lg:h-[500px] object-contain rounded-2xl shadow-2xl"
              />
            </div>
            {/* Text Content */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <h3 className="text-3xl lg:text-4xl font-bold text-pink-700 mb-6">
                Meet & Connect with Innovators
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Expand your professional network by meeting inspiring women from diverse 
                industries. Find mentors, collaborators, and potential business partners 
                who share your passion for innovation and success. Build relationships 
                that will transform your business and personal growth.
              </p>
              <button className="bg-pink-500 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-pink-600 transition duration-300 shadow-lg">
                Explore Network
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Launch Products Feature Section */}
      <section className="py-20 bg-gradient-to-br from-pink-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Huge Image */}
            <div className="w-full lg:w-1/2">
              <img 
                src={launchImage} 
                alt="Launch your products to a large network"
                className="w-full h-96 lg:h-[500px] object-contain rounded-2xl shadow-2xl"
              />
            </div>
            {/* Text Content */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <h3 className="text-3xl lg:text-4xl font-bold text-pink-700 mb-6">
                Launch to a Large Network
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Showcase your products and services to thousands of women entrepreneurs 
                and potential customers. Get valuable feedback, gain early adopters, 
                and accelerate your business growth through our launchpad feature. 
                Turn your innovative ideas into successful ventures.
              </p>
              <button className="bg-pink-500 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-pink-600 transition duration-300 shadow-lg">
                Launch Now
              </button>
            </div>
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
              </div>
            </div>

            {/* Team Member 4*/}
            <div className="bg-pink-50 rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:shadow-xl hover:-translate-y-2">
              <div className="h-64 overflow-hidden">
                <img
                  src={Nathan_Muyoba}
                  alt="Portrait of Nathan Muyoba"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-pink-700">Nathan Muyoba</h3>
                <p className="text-pink-500 mb-3">Senior Developer</p>
                <p className="text-gray-600 text-sm mb-4">
                  Expert in full-stack development, creating scalable solutions for women entrepreneurs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

        {/* Final CTA Section */}
      <section className="py-16 bg-pink-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Entrepreneurial Journey?
          </h2>
          <p className="text-xl text-pink-100 mb-8">
            Join thousands of women entrepreneurs who are already building, connecting, and thriving on StartHerUp.
          </p>
          <button className="bg-white text-pink-600 px-10 py-4 rounded-full text-lg font-bold hover:bg-pink-50 transition duration-300 shadow-lg">
            Join Our Community Today
          </button>
          <p className="text-pink-200 mt-4 text-sm">
            Start connecting, messaging, and launching with fellow women innovators.
          </p>
        </div>
      </section>

     
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