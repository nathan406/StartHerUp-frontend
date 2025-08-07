import React, { useState } from 'react';
import { Search, Filter, Star, ExternalLink, Heart, Eye, Calendar, User, Tag, TrendingUp, Plus, Sparkles, MessageCircle, X } from 'lucide-react';
import Navbar from '../components/navbar';
import LaunchForm from './Launchform';

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
    ghost: "text-gray-600 hover:text-pink-500 hover:bg-pink-50"
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

// Sample product data
const products = [
  {
    id: 1,
    name: "ThriveHer Platform",
    description: "Comprehensive ecosystem for women entrepreneurs featuring mentorship matching, funding opportunities, and business resources.",
    founder: "Fatima Bello",
    founderImage: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face",
    image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=400&h=250&fit=crop",
    category: "Platform",
    tags: ["Entrepreneurship", "Mentorship", "Funding"],
    launchDate: "March 2024",
    likes: 342,
    views: 2847,
    rating: 4.8,
    status: "Live",
    featured: true
  },
  {
    id: 2,
    name: "MaternalCare App",
    description: "Mobile application providing prenatal care guidance and connecting expectant mothers with healthcare professionals.",
    founder: "Nina Kotová",
    founderImage: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=150&h=150&fit=crop&crop=face",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop",
    category: "Healthcare",
    tags: ["Health", "Mobile App", "Maternal Care"],
    launchDate: "February 2024",
    likes: 289,
    views: 1892,
    rating: 4.9,
    status: "Live",
    featured: true
  },
  {
    id: 3,
    name: "EcoTech Solutions",
    description: "Sustainable technology platform helping businesses reduce their carbon footprint through smart analytics and recommendations.",
    founder: "Isabella Davis",
    founderImage: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?w=150&h=150&fit=crop&crop=face",
    image: "https://images.unsplash.com/photo-1534081333815-ae5019106622?w=400&h=250&fit=crop",
    category: "Sustainability",
    tags: ["Environment", "Analytics", "B2B"],
    launchDate: "January 2024",
    likes: 156,
    views: 1234,
    rating: 4.7,
    status: "Live",
    featured: false
  },
  {
    id: 4,
    name: "CodeHer Academy",
    description: "Online coding bootcamp specifically designed for women entering tech, with mentorship and job placement support.",
    founder: "Luna Taylor",
    founderImage: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=150&h=150&fit=crop&crop=face",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop",
    category: "Education",
    tags: ["Coding", "Education", "Women in Tech"],
    launchDate: "December 2023",
    likes: 423,
    views: 3156,
    rating: 4.9,
    status: "Live",
    featured: true
  },
  {
    id: 5,
    name: "SecureSpace",
    description: "Cybersecurity platform providing comprehensive protection for small and medium businesses with AI-powered threat detection.",
    founder: "Jessica Chen",
    founderImage: "https://images.unsplash.com/photo-1515378791036-0648a814c963?w=150&h=150&fit=crop&crop=face",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=250&fit=crop",
    category: "Cybersecurity",
    tags: ["Security", "AI", "B2B"],
    launchDate: "November 2023",
    likes: 267,
    views: 1876,
    rating: 4.6,
    status: "Live",
    featured: false
  },
  {
    id: 6,
    name: "HealthAI Diagnostics",
    description: "Machine learning platform for early disease detection, helping healthcare providers improve patient outcomes.",
    founder: "Aaliyah Johnson",
    founderImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=150&h=150&fit=crop&crop=face",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=250&fit=crop",
    category: "Healthcare",
    tags: ["AI", "Healthcare", "Diagnostics"],
    launchDate: "October 2023",
    likes: 389,
    views: 2543,
    rating: 4.8,
    status: "Beta",
    featured: true
  },
  {
    id: 7,
    name: "FinanceHer",
    description: "Microfinance platform connecting women entrepreneurs in Africa with investors and providing financial literacy resources.",
    founder: "Amara Okafor",
    founderImage: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=150&h=150&fit=crop&crop=face",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop",
    category: "Fintech",
    tags: ["Finance", "Microfinance", "Africa"],
    launchDate: "September 2023",
    likes: 298,
    views: 2187,
    rating: 4.7,
    status: "Live",
    featured: false
  },
  {
    id: 8,
    name: "SmartCity IoT",
    description: "IoT platform for smart city management, monitoring air quality, traffic, and energy consumption in real-time.",
    founder: "Yuki Tanaka",
    founderImage: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=150&h=150&fit=crop&crop=face",
    image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=400&h=250&fit=crop",
    category: "IoT",
    tags: ["IoT", "Smart Cities", "Monitoring"],
    launchDate: "August 2023",
    likes: 234,
    views: 1654,
    rating: 4.5,
    status: "Live",
    featured: false
  }
];

const categories = ["All", "Platform", "Healthcare", "Education", "Fintech", "Cybersecurity", "Sustainability", "IoT"];

// Message Popup Component
const MessagePopup = ({ isOpen, onClose, founderName }) => {
  const [message, setMessage] = useState('');

  const handleSendMessage = (e) => {
    e.preventDefault();
    // Here you would typically send the message to your backend
    console.log(`Message sent to ${founderName}: ${message}`);
    setMessage('');
    onClose();
    // You could show a success notification here
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-md w-full">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900">
              Send Message to {founderName}
            </h3>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
        <form onSubmit={handleSendMessage} className="p-6">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Your Message
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              placeholder={`Write your message to ${founderName}...`}
            />
          </div>
          <div className="flex gap-3">
            <Button
              type="button"
              variant="secondary"
              onClick={onClose}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              variant="primary"
              className="flex-1"
            >
              Send Message
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default function Launch() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("newest");
  const [showFilters, setShowFilters] = useState(false);
  const [showLaunchForm, setShowLaunchForm] = useState(false);
  const [showMessagePopup, setShowMessagePopup] = useState(false);
  const [selectedFounder, setSelectedFounder] = useState("");
  const [productsList, setProductsList] = useState(products);

  // Event handlers
  const handleAddProduct = (newProduct) => {
    setProductsList(prev => [newProduct, ...prev]);
    setShowLaunchForm(false);
  };

  const handleMessageFounder = (founderName) => {
    setSelectedFounder(founderName);
    setShowMessagePopup(true);
  };

  // Filter and sort products
  const filteredProducts = productsList
    .filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           product.founder.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "newest":
          return new Date(b.launchDate) - new Date(a.launchDate);
        case "popular":
          return b.likes - a.likes;
        case "rating":
          return b.rating - a.rating;
        default:
          return 0;
      }
    });

  const featuredProducts = products.filter(product => product.featured);

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            🚀 <span className="text-pink-500">Launch</span>pad
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            Discover amazing products and innovations launched by women entrepreneurs. 
            From tech platforms to healthcare solutions, explore the future built by female founders.
          </p>
          <button 
            onClick={() => setShowLaunchForm(true)}
            className="px-8 py-4 bg-pink-500 text-white rounded-full hover:bg-pink-600 font-medium text-lg shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center gap-2 mx-auto"
          >
            <Plus className="w-5 h-5" />
            Add Your Product
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <Card>
            <CardContent className="text-center py-6">
              <div className="text-3xl font-bold text-pink-500 mb-2">{productsList.length}</div>
              <div className="text-gray-600">Products Launched</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="text-center py-6">
              <div className="text-3xl font-bold text-pink-500 mb-2">
                {productsList.reduce((sum, p) => sum + p.likes, 0)}
              </div>
              <div className="text-gray-600">Total Likes</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="text-center py-6">
              <div className="text-3xl font-bold text-pink-500 mb-2">
                {productsList.reduce((sum, p) => sum + p.views, 0)}
              </div>
              <div className="text-gray-600">Total Views</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="text-center py-6">
              <div className="text-3xl font-bold text-pink-500 mb-2">
                {categories.length - 1}
              </div>
              <div className="text-gray-600">Categories</div>
            </CardContent>
          </Card>
        </div>

        {/* Featured Products */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <TrendingUp className="w-6 h-6 text-pink-500" />
            <h2 className="text-2xl font-bold text-gray-900">Featured Launches</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.slice(0, 3).map(product => (
              <Card key={product.id} className="group cursor-pointer">
                <div className="relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-48 object-cover rounded-t-2xl"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-pink-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                      Featured
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      product.status === 'Live' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {product.status}
                    </span>
                  </div>
                </div>
                <CardContent>
                  <h3 className="font-bold text-lg mb-2 group-hover:text-pink-500 transition">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {product.description}
                  </p>
                  <div className="flex items-center gap-3 mb-4">
                    <img 
                      src={product.founderImage} 
                      alt={product.founder}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-sm font-medium text-gray-900">{product.founder}</p>
                      <p className="text-xs text-gray-500">{product.launchDate}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Heart className="w-4 h-4" />
                        {product.likes}
                      </div>
                      <div className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        {product.views}
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-500" />
                        {product.rating}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Search and Filters */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search products, founders, or descriptions..."
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
                    <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                    <div className="flex flex-wrap gap-2">
                      {categories.map(category => (
                        <button
                          key={category}
                          onClick={() => setSelectedCategory(category)}
                          className={`px-3 py-1 rounded-full text-sm font-medium transition ${
                            selectedCategory === category
                              ? 'bg-pink-500 text-white'
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          {category}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Sort By</label>
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                    >
                      <option value="newest">Newest First</option>
                      <option value="popular">Most Popular</option>
                      <option value="rating">Highest Rated</option>
                    </select>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Products Grid */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              All Products ({filteredProducts.length})
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map(product => (
              <Card key={product.id} className="group cursor-pointer hover:shadow-lg">
                <div className="relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-48 object-cover rounded-t-2xl"
                  />
                  <div className="absolute top-4 right-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      product.status === 'Live' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {product.status}
                    </span>
                  </div>
                </div>
                <CardContent>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-1 bg-pink-100 text-pink-700 rounded text-xs font-medium">
                      {product.category}
                    </span>
                  </div>
                  <h3 className="font-bold text-lg mb-2 group-hover:text-pink-500 transition">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {product.description}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {product.tags.slice(0, 3).map((tag, index) => (
                      <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-3 mb-4">
                    <img 
                      src={product.founderImage} 
                      alt={product.founder}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-sm font-medium text-gray-900">{product.founder}</p>
                      <p className="text-xs text-gray-500">{product.launchDate}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Heart className="w-4 h-4" />
                        {product.likes}
                      </div>
                      <div className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        {product.views}
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-500" />
                        {product.rating}
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="secondary" size="sm" className="flex-1">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Product
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      onClick={() => handleMessageFounder(product.founder)}
                      className="px-3"
                    >
                      <MessageCircle className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Popups */}
      <LaunchForm
        isOpen={showLaunchForm}
        onClose={() => setShowLaunchForm(false)}
        onSubmit={handleAddProduct}
      />

      <MessagePopup
        isOpen={showMessagePopup}
        onClose={() => setShowMessagePopup(false)}
        founderName={selectedFounder}
      />
    </>
  );
}