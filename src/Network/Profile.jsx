import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, MapPin, Calendar, Briefcase, Award, ExternalLink, Heart, MessageCircle, Users, Star } from "lucide-react";
import Navbar from "../components/navbar";
import MessagesPopup from './Messages';

const Card = ({ children, className = "" }) => (
  <div className={`bg-white rounded-2xl border border-pink-200 hover:border-pink-500 transition-all ${className}`}>
    {children}
  </div>
);

const CardContent = ({ children, className = "" }) => <div className={`p-6 ${className}`}>{children}</div>;

const Button = ({ children, variant = "primary", ...props }) => {
  const baseClasses = "px-4 py-2 rounded-md font-medium transition";
  const variants = {
    primary: "bg-pink-500 text-white hover:bg-pink-600",
    secondary: "border border-pink-500 text-pink-500 hover:bg-pink-50",
    ghost: "text-gray-600 hover:text-pink-500 hover:bg-pink-50"
  };
  
  return (
    <button className={`${baseClasses} ${variants[variant]}`} {...props}>
      {children}
    </button>
  );
};

// Sample user data - in a real app, this would come from an API
const userData = {
  "fatima-bello": {
    name: "Fatima Bello",
    role: "Founder @ ThriveHer",
    location: "Lagos, Nigeria",
    joinDate: "March 2023",
    bio: "Passionate entrepreneur dedicated to empowering African women through technology and innovation. Building platforms that create opportunities and drive economic growth across the continent.",
    profileImage: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&crop=face",
    coverImage: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&h=300&fit=crop",
    followers: 2847,
    following: 892,
    connections: 1205,
    experience: [
      {
        title: "Founder & CEO",
        company: "ThriveHer",
        duration: "2023 - Present",
        description: "Leading a platform that empowers African women entrepreneurs through mentorship, funding, and resources."
      },
      {
        title: "Senior Product Manager",
        company: "TechAfrica",
        duration: "2020 - 2023",
        description: "Managed product development for fintech solutions serving underbanked populations across West Africa."
      },
      {
        title: "Business Development Manager",
        company: "InnovateNG",
        duration: "2018 - 2020",
        description: "Developed strategic partnerships and go-to-market strategies for emerging tech startups."
      }
    ],
    products: [
      {
        name: "ThriveHer Platform",
        description: "Comprehensive ecosystem for women entrepreneurs featuring mentorship matching, funding opportunities, and business resources.",
        image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=400&h=250&fit=crop",
        link: "#",
        category: "Platform"
      },
      {
        name: "WomenTech Accelerator",
        description: "12-week intensive program for women-led tech startups with focus on scaling and investment readiness.",
        image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=250&fit=crop",
        link: "#",
        category: "Program"
      }
    ],
    achievements: [
      "Forbes 30 Under 30 Africa 2024",
      "TechCrunch Disrupt Winner 2023",
      "Women in Tech Leadership Award 2023",
      "African Innovation Prize 2022"
    ],
    skills: ["Product Management", "Business Strategy", "Fundraising", "Team Leadership", "Market Research", "Partnership Development"],
    posts: 47,
    likes: 1284
  },
  "nina-kotova": {
    name: "Nina Kotová",
    role: "Impact Designer",
    location: "Prague, Czech Republic",
    joinDate: "January 2023",
    bio: "Design strategist focused on creating solutions for maternal health and women's wellness. Combining human-centered design with technology to improve healthcare outcomes globally.",
    profileImage: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=300&h=300&fit=crop&crop=face",
    coverImage: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=300&fit=crop",
    followers: 1892,
    following: 654,
    connections: 743,
    experience: [
      {
        title: "Senior Impact Designer",
        company: "HealthTech Solutions",
        duration: "2022 - Present",
        description: "Leading design initiatives for maternal health applications serving women in underserved communities."
      },
      {
        title: "UX Design Lead",
        company: "MedConnect",
        duration: "2020 - 2022",
        description: "Designed user experiences for telemedicine platforms connecting patients with healthcare providers."
      }
    ],
    products: [
      {
        name: "MaternalCare App",
        description: "Mobile application providing prenatal care guidance and connecting expectant mothers with healthcare professionals.",
        image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop",
        link: "#",
        category: "Mobile App"
      }
    ],
    achievements: [
      "Design Impact Award 2023",
      "Healthcare Innovation Recognition 2022",
      "UX Excellence Award 2021"
    ],
    skills: ["UX/UI Design", "Design Research", "Healthcare Design", "Prototyping", "User Testing", "Design Systems"],
    posts: 32,
    likes: 856
  }
};

export default function Profile() {
  const { username } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("about");
  const [showMessagesPopup, setShowMessagesPopup] = useState(false);
  
  // Get user data based on username parameter
  const user = userData[username] || userData["fatima-bello"]; // Default to Fatima if user not found

  const handleMessage = () => {
    setShowMessagesPopup(true);
  };

  const tabs = [
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "products", label: "Products" },
    { id: "posts", label: "Posts" }
  ];

  return (
    <>
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 py-6">
        {/* Back Button */}
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-600 hover:text-pink-500 mb-6 transition"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </button>

        {/* Cover Image */}
        <div className="relative h-64 rounded-2xl overflow-hidden mb-6">
          <img 
            src={user.coverImage} 
            alt="Cover" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>

        {/* Profile Header */}
        <div className="relative -mt-16 mb-8">
          <div className="flex flex-col md:flex-row items-start md:items-end gap-6 bg-white rounded-2xl p-6 shadow-lg">
            <img 
              src={user.profileImage} 
              alt={user.name}
              className="w-32 h-32 rounded-full border-4 border-white shadow-lg object-cover -mt-16"
            />
            <div className="flex-1 mt-4 md:mt-0">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{user.name}</h1>
              <p className="text-xl text-gray-600 mb-3">{user.role}</p>
              <div className="flex flex-wrap items-center gap-4 text-gray-500 text-sm mb-4">
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  {user.location}
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  Joined {user.joinDate}
                </div>
              </div>
              <div className="flex gap-6 text-sm">
                <div><span className="font-semibold">{user.followers}</span> Followers</div>
                <div><span className="font-semibold">{user.following}</span> Following</div>
                <div><span className="font-semibold">{user.connections}</span> Connections</div>
              </div>
            </div>
            <div className="flex gap-3 mt-4 md:mt-0">
              <Button variant="secondary">
                <Users className="w-4 h-4 mr-2" />
                Connect
              </Button>
              <Button onClick={handleMessage}>
                Message
              </Button>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="text-center py-4">
              <div className="text-2xl font-bold text-pink-500">{user.posts}</div>
              <div className="text-sm text-gray-600">Posts</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="text-center py-4">
              <div className="text-2xl font-bold text-pink-500">{user.likes}</div>
              <div className="text-sm text-gray-600">Likes</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="text-center py-4">
              <div className="text-2xl font-bold text-pink-500">{user.products.length}</div>
              <div className="text-sm text-gray-600">Products</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="text-center py-4">
              <div className="text-2xl font-bold text-pink-500">{user.achievements.length}</div>
              <div className="text-sm text-gray-600">Awards</div>
            </CardContent>
          </Card>
        </div>

        {/* Navigation Tabs */}
        <div className="border-b border-gray-200 mb-8">
          <nav className="flex space-x-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-1 border-b-2 font-medium text-sm transition ${
                  activeTab === tab.id
                    ? "border-pink-500 text-pink-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Tab Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {activeTab === "about" && (
              <div className="space-y-6">
                <Card>
                  <CardContent>
                    <h3 className="text-lg font-semibold mb-4">About</h3>
                    <p className="text-gray-700 leading-relaxed">{user.bio}</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent>
                    <h3 className="text-lg font-semibold mb-4">Skills</h3>
                    <div className="flex flex-wrap gap-2">
                      {user.skills.map((skill, index) => (
                        <span 
                          key={index}
                          className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {activeTab === "experience" && (
              <div className="space-y-6">
                {user.experience.map((exp, index) => (
                  <Card key={index}>
                    <CardContent>
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center">
                          <Briefcase className="w-6 h-6 text-pink-500" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg">{exp.title}</h3>
                          <p className="text-pink-600 font-medium">{exp.company}</p>
                          <p className="text-gray-500 text-sm mb-3">{exp.duration}</p>
                          <p className="text-gray-700">{exp.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}

            {activeTab === "products" && (
              <div className="space-y-6">
                {user.products.map((product, index) => (
                  <Card key={index}>
                    <CardContent>
                      <div className="flex flex-col md:flex-row gap-6">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-full md:w-48 h-32 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-2">
                            <h3 className="font-semibold text-lg">{product.name}</h3>
                            <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                              {product.category}
                            </span>
                          </div>
                          <p className="text-gray-700 mb-4">{product.description}</p>
                          <Button 
                            variant="secondary" 
                            size="sm"
                            onClick={() => navigate('/launch')}
                          >
                            <ExternalLink className="w-4 h-4 mr-2" />
                            View Product
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}

            {activeTab === "posts" && (
              <div className="space-y-6">
                <Card>
                  <CardContent className="text-center py-12">
                    <div className="text-gray-400 mb-4">
                      <MessageCircle className="w-12 h-12 mx-auto" />
                    </div>
                    <h3 className="text-lg font-medium text-gray-600 mb-2">Posts Coming Soon</h3>
                    <p className="text-gray-500">User posts will be displayed here</p>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardContent>
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Award className="w-5 h-5 text-pink-500" />
                  Achievements
                </h3>
                <div className="space-y-3">
                  {user.achievements.map((achievement, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <Star className="w-4 h-4 text-yellow-500" />
                      <span className="text-sm text-gray-700">{achievement}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent>
                <h3 className="text-lg font-semibold mb-4">Activity</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Posts this month</span>
                    <span className="font-semibold">12</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Likes received</span>
                    <span className="font-semibold">{user.likes}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Comments made</span>
                    <span className="font-semibold">89</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Messages Popup */}
      <MessagesPopup 
        isOpen={showMessagesPopup} 
        onClose={() => setShowMessagesPopup(false)} 
      />
    </>
  );
}