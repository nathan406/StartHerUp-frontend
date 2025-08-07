import React, { useState } from 'react';
import { Search, Filter, Users, MessageCircle, UserPlus, MapPin, Briefcase, Star, Globe } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/navbar';
import MessagesPopup from './Messages';

const Card = ({ children, className = "" }) => (
  <div className={`bg-white rounded-2xl border border-pink-200 hover:border-pink-500 transition-all ${className}`}>
    {children}
  </div>
);

const CardContent = ({ children, className = "" }) => <div className={`p-6 ${className}`}>{children}</div>;

const Button = ({ children, variant = "primary", size = "md", ...props }) => {
  const baseClasses = "font-medium transition rounded-md";
  const variants = {
    primary: "bg-pink-500 text-white hover:bg-pink-600",
    secondary: "border border-pink-500 text-pink-500 hover:bg-pink-50",
    ghost: "text-gray-600 hover:text-pink-500 hover:bg-pink-50",
    success: "bg-green-500 text-white hover:bg-green-600"
  };
  const sizes = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2",
    lg: "px-6 py-3 text-lg"
  };
  
  return (
    <button className={`${baseClasses} ${variants[variant]} ${sizes[size]}`} {...props}>
      {children}
    </button>
  );
};

// Sample users data
const users = [
  {
    id: 1,
    name: "Fatima Bello",
    role: "Founder @ ThriveHer",
    location: "Lagos, Nigeria",
    bio: "Empowering African women entrepreneurs through technology and mentorship. Building the future of inclusive business ecosystems.",
    profileImage: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face",
    followers: 2847,
    connections: 1250,
    isFollowing: false,
    isOnline: true,
    skills: ["Entrepreneurship", "Mentorship", "Business Development"],
    company: "ThriveHer Platform"
  },
  {
    id: 2,
    name: "Nina Kotová",
    role: "Impact Designer",
    location: "Prague, Czech Republic",
    bio: "Designing for social impact. Passionate about maternal health and creating solutions that matter for communities worldwide.",
    profileImage: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=150&h=150&fit=crop&crop=face",
    followers: 1892,
    connections: 890,
    isFollowing: true,
    isOnline: false,
    skills: ["UX Design", "Social Impact", "Healthcare"],
    company: "MaternalCare Initiative"
  },
  {
    id: 3,
    name: "Sophia Lin",
    role: "AI Enthusiast",
    location: "San Francisco, USA",
    bio: "Building the future with artificial intelligence. Open source advocate and believer in democratizing AI for everyone.",
    profileImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    followers: 3156,
    connections: 1890,
    isFollowing: false,
    isOnline: true,
    skills: ["Machine Learning", "Python", "Open Source"],
    company: "AI for Good"
  },
  {
    id: 4,
    name: "Emma Thompson",
    role: "Data Scientist @ Neuralify",
    location: "London, UK",
    bio: "Passionate about data ethics and responsible AI. Making sure technology serves humanity with transparency and accountability.",
    profileImage: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
    followers: 2543,
    connections: 1456,
    isFollowing: true,
    isOnline: true,
    skills: ["Data Science", "Ethics", "Research"],
    company: "Neuralify"
  },
  {
    id: 5,
    name: "Isabella Davis",
    role: "Chief Innovator @ EcoTech",
    location: "Seattle, USA",
    bio: "Leading sustainable technology initiatives. Committed to creating solutions that protect our planet for future generations.",
    profileImage: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?w=150&h=150&fit=crop&crop=face",
    followers: 1234,
    connections: 987,
    isFollowing: false,
    isOnline: false,
    skills: ["Sustainability", "Innovation", "Clean Tech"],
    company: "EcoTech Solutions"
  },
  {
    id: 6,
    name: "Luna Taylor",
    role: "Developer Advocate",
    location: "Austin, USA",
    bio: "Empowering developers through education and community building. Making technology accessible to everyone, everywhere.",
    profileImage: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=150&h=150&fit=crop&crop=face",
    followers: 4567,
    connections: 2340,
    isFollowing: true,
    isOnline: true,
    skills: ["Developer Relations", "Education", "Community"],
    company: "CodeHer Academy"
  },
  {
    id: 7,
    name: "Jessica Chen",
    role: "Cybersecurity Expert",
    location: "Singapore",
    bio: "Protecting digital spaces and ensuring online safety. Cybersecurity is not just my job, it's my mission to keep everyone secure.",
    profileImage: "https://images.unsplash.com/photo-1515378791036-0648a814c963?w=150&h=150&fit=crop&crop=face",
    followers: 1876,
    connections: 1123,
    isFollowing: false,
    isOnline: true,
    skills: ["Cybersecurity", "Threat Detection", "Security"],
    company: "SecureSpace"
  },
  {
    id: 8,
    name: "Aaliyah Johnson",
    role: "Machine Learning Engineer",
    location: "Boston, USA",
    bio: "Using AI to revolutionize healthcare. My ML models for early disease detection are helping save lives around the world.",
    profileImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=150&h=150&fit=crop&crop=face",
    followers: 2543,
    connections: 1678,
    isFollowing: true,
    isOnline: false,
    skills: ["Machine Learning", "Healthcare AI", "Research"],
    company: "HealthAI Diagnostics"
  },
  {
    id: 9,
    name: "Priya Sharma",
    role: "Blockchain Developer",
    location: "Mumbai, India",
    bio: "Building the decentralized future with blockchain technology. DeFi enthusiast working on financial inclusion for all.",
    profileImage: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=150&h=150&fit=crop&crop=face",
    followers: 3421,
    connections: 1987,
    isFollowing: false,
    isOnline: true,
    skills: ["Blockchain", "DeFi", "Smart Contracts"],
    company: "CryptoInnovate"
  },
  {
    id: 10,
    name: "Amara Okafor",
    role: "Fintech Innovator",
    location: "Accra, Ghana",
    bio: "Democratizing financial services across Africa. Building microfinance solutions that empower women entrepreneurs.",
    profileImage: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=150&h=150&fit=crop&crop=face",
    followers: 2187,
    connections: 1345,
    isFollowing: true,
    isOnline: false,
    skills: ["Fintech", "Microfinance", "Financial Inclusion"],
    company: "FinanceHer"
  }
];

const industries = ["All", "Technology", "Healthcare", "Finance", "Education", "Sustainability", "AI/ML"];
const locations = ["All", "USA", "UK", "Nigeria", "India", "Ghana", "Singapore", "Czech Republic"];

export default function Network() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState("All");
  const [selectedLocation, setSelectedLocation] = useState("All");
  const [showFilters, setShowFilters] = useState(false);
  const [usersList, setUsersList] = useState(users);
  const [showMessagesPopup, setShowMessagesPopup] = useState(false);

  const handleFollow = (userId) => {
    setUsersList(prev => prev.map(user => 
      user.id === userId 
        ? { ...user, isFollowing: !user.isFollowing, followers: user.isFollowing ? user.followers - 1 : user.followers + 1 }
        : user
    ));
  };

  const handleMessage = (user) => {
    console.log(`Opening message to ${user.name}`);
    setShowMessagesPopup(true);
  };

  const handleUserClick = (userName) => {
    // Convert user name to URL-friendly format
    const username = userName.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
    navigate(`/profile/${username}`);
  };

  // Filter users
  const filteredUsers = usersList.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.bio.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesIndustry = selectedIndustry === "All" || 
                           user.skills.some(skill => skill.toLowerCase().includes(selectedIndustry.toLowerCase())) ||
                           user.role.toLowerCase().includes(selectedIndustry.toLowerCase());
    
    const matchesLocation = selectedLocation === "All" || 
                           user.location.includes(selectedLocation);
    
    return matchesSearch && matchesIndustry && matchesLocation;
  });

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Search and Filters */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search by name, role, skills, or bio..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              />
            </div>
            <Button 
              variant="secondary" 
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2"
            >
              <Filter className="w-4 h-4" />
              Filters
            </Button>
          </div>

          {/* Filter Options */}
          {showFilters && (
            <Card className="mb-6">
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Industry</label>
                    <div className="flex flex-wrap gap-2">
                      {industries.map(industry => (
                        <button
                          key={industry}
                          onClick={() => setSelectedIndustry(industry)}
                          className={`px-3 py-1 rounded-full text-sm font-medium transition ${
                            selectedIndustry === industry
                              ? 'bg-pink-500 text-white'
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          {industry}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                    <div className="flex flex-wrap gap-2">
                      {locations.map(location => (
                        <button
                          key={location}
                          onClick={() => setSelectedLocation(location)}
                          className={`px-3 py-1 rounded-full text-sm font-medium transition ${
                            selectedLocation === location
                              ? 'bg-pink-500 text-white'
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          {location}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Users Grid */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              Network Members ({filteredUsers.length})
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredUsers.map(user => (
              <Card key={user.id} className="group hover:shadow-lg">
                <CardContent>
                  <div className="flex items-start gap-4 mb-4">
                    <div className="relative">
                      <img 
                        src={user.profileImage} 
                        alt={user.name}
                        className="w-16 h-16 rounded-full object-cover cursor-pointer hover:ring-2 hover:ring-pink-500 transition"
                        onClick={() => handleUserClick(user.name)}
                      />
                      <div className={`absolute -bottom-1 -right-1 w-5 h-5 rounded-full border-2 border-white ${
                        user.isOnline ? 'bg-green-500' : 'bg-gray-400'
                      }`}></div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 
                        className="font-bold text-lg text-gray-900 hover:text-pink-500 transition truncate cursor-pointer"
                        onClick={() => handleUserClick(user.name)}
                      >
                        {user.name}
                      </h3>
                      <p className="text-pink-600 text-sm font-medium mb-1">{user.role}</p>
                      <div className="flex items-center text-gray-500 text-xs mb-2">
                        <MapPin className="w-3 h-3 mr-1" />
                        {user.location}
                      </div>
                      <div className="flex items-center text-gray-500 text-xs">
                        <Briefcase className="w-3 h-3 mr-1" />
                        {user.company}
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {user.bio}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {user.skills.slice(0, 3).map((skill, index) => (
                      <span key={index} className="px-2 py-1 bg-pink-100 text-pink-700 rounded text-xs font-medium">
                        {skill}
                      </span>
                    ))}
                    {user.skills.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                        +{user.skills.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {user.connections} connections
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4" />
                        {user.followers} followers
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <button 
                      className={`text-sm px-4 py-2 border border-pink-500 rounded-full transition flex-1 ${
                        user.isFollowing 
                          ? 'bg-green-100 text-green-700 border-green-500 hover:bg-green-200' 
                          : 'text-pink-500 hover:bg-pink-100'
                      }`}
                      onClick={() => handleFollow(user.id)}
                    >
                      {user.isFollowing ? "Following" : "Follow"}
                    </button>
                    <button 
                      className="text-sm px-4 py-2 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition flex-1"
                      onClick={() => handleMessage(user)}
                    >
                      Message
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* No Results */}
        {filteredUsers.length === 0 && (
          <div className="text-center py-12">
            <Users className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No members found</h3>
            <p className="text-gray-500">Try adjusting your search criteria or filters</p>
          </div>
        )}
      </div>

      {/* Messages Popup */}
      <MessagesPopup 
        isOpen={showMessagesPopup} 
        onClose={() => setShowMessagesPopup(false)} 
      />
    </>
  );
}