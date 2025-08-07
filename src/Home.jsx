import React, { useState } from "react";
import { Users, Rocket, Heart, MessageCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navbar from "./components/navbar";

const Card = ({ children, className = "" }) => (
  <div className={`bg-white rounded-2xl border border-pink-200 hover:border-pink-500 transition-all ${className}`}>
    {children}
  </div>
);
const CardContent = ({ children, className = "" }) => <div className={`p-5 ${className}`}>{children}</div>;
const Button = ({ children, ...props }) => (
  <button className="px-4 py-2 border border-pink-500 text-pink-500 hover:bg-pink-50 rounded-md font-medium transition" {...props}>
    {children}
  </button>
);

const initialPosts = [
  {
    id: 1, user: { name: "Fatima Bello", role: "Founder @ ThriveHer" },
    content: "Launched our new empowerment platform for African women entrepreneurs! 🌍",
    timestamp: "2h ago",
    image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6",
    likes: 24, commentsCount: 3,
    comments: [
      { by: "Leila", text: "Huge congrats, that's amazing!" },
      { by: "Aisha", text: "This is so inspiring!" },
      { by: "Zara", text: "So proud of you!" }
    ]
  },
  {
    id: 2, user: { name: "Nina Kotová", role: "Impact Designer" },
    content: "Our maternal health initiative received a major grant! So excited to scale up. 👩‍⚕️",
    timestamp: "4h ago",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56",
    likes: 18, commentsCount: 2,
    comments: [
      { by: "Sarah", text: "Congratulations! You deserve it." },
      { by: "Maya", text: "So impactful!" }
    ]
  },
  {
    id: 3, user: { name: "Sophia Lin", role: "AI Enthusiast" },
    content: "Thrilled to announce my open-source AI project which is receiving recognition in the tech community! 🤖",
    timestamp: "3h ago",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
    likes: 57, commentsCount: 4,
    comments: [
      { by: "Lei", text: "Amazing work! Keep it up." },
      { by: "Samira", text: "Can't wait to see it in action." },
      { by: "Akira", text: "This is game-changing!" },
      { by: "Priya", text: "Inspiring for women in tech!" }
    ]
  },
  {
    id: 4, user: { name: "Emma Thompson", role: "Data Scientist @ Neuralify" },
    content: "Presented my research on data ethics at the Global AI Summit. Accountability and transparency are key! 🔍",
    timestamp: "5h ago",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    likes: 42, commentsCount: 3,
    comments: [
      { by: "Lila", text: "Data ethics is crucial. Well done!" },
      { by: "Ava", text: "Congrats on your presentation." },
      { by: "Zoe", text: "Important topic!" }
    ]
  },
  {
    id: 5, user: { name: "Isabella Davis", role: "Chief Innovator @ EcoTech" },
    content: "Excited to launch our new sustainable tech initiative! 🌿 Let's lead the change for a greener planet.",
    timestamp: "6h ago",
    image: "https://images.unsplash.com/photo-1534081333815-ae5019106622",
    likes: 68, commentsCount: 8,
    comments: [
      { by: "Clara", text: "Fantastic initiative!" },
      { by: "Lena", text: "Inspiring step forward." }
    ]
  }
];

// Map user names to real profile picture URLs
const profilePictures = {
  "Fatima Bello": "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face",
  "Nina Kotov��": "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=150&h=150&fit=crop&crop=face",
  "Sophia Lin": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
  "Emma Thompson": "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
  "Isabella Davis": "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?w=150&h=150&fit=crop&crop=face"
};

export default function Home() {
  const [posts, setPosts] = useState(initialPosts);
  const [postText, setPostText] = useState("");
  const [expandedComments, setExpandedComments] = useState({});
  const navigate = useNavigate();

  const handlePost = () => {
    if (!postText.trim()) return;
    const newPost = {
      id: Date.now(), user: { name: "You", role: "Entrepreneur" },
      content: postText.trim(), timestamp: "Just now",
      image: null, likes: 0, commentsCount: 0, comments: []
    };
    setPosts([newPost, ...posts]);
    setPostText("");
  };

  const toggleComments = (postId) => {
    setExpandedComments(prev => ({
      ...prev,
      [postId]: !prev[postId]
    }));
  };

  const handleUserClick = (userName) => {
    // Convert user name to URL-friendly format
    const username = userName.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
    navigate(`/profile/${username}`);
  };

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-6 mt-10 px-4">
        {/* Sidebar */}
        <aside className="w-full md:w-1/4 space-y-4">
          <div 
            className="bg-white rounded-2xl border border-pink-200 hover:border-pink-500 transition-all cursor-pointer hover:shadow-lg"
            onClick={() => navigate('/launch')}
          >
            <div className="p-5">
              <h3 className="text-pink-600 font-bold flex items-center gap-2">
                <Rocket className="w-4 h-4" /> Launchpad
              </h3>
              <ul className="text-gray-700 text-sm space-y-2">
                <li>Discover and promote your products</li>
              </ul>
            </div>
          </div>
          <div 
            className="bg-white rounded-2xl border border-pink-200 hover:border-pink-500 transition-all cursor-pointer hover:shadow-lg"
            onClick={() => navigate('/network')}
          >
            <div className="p-5">
              <h3 className="text-pink-600 font-bold flex items-center gap-2">
                <Users className="w-4 h-4" /> Network
              </h3>
              <ul className="text-gray-700 text-sm space-y-2">
                <li>Meet and Network with innovators</li>
              </ul>
            </div>
          </div>
        </aside>

        {/* Main Feed */}
        <main className="w-full md:w-3/4 space-y-6">
          {/* Post Input */}
          <Card>
            <CardContent>
              <textarea
                value={postText}
                onChange={(e) => setPostText(e.target.value)}
                placeholder="Share something inspiring..."
                rows={3}
                className="w-full border rounded-md p-2 focus:outline-none"
              />
              <div className="flex justify-end mt-2">
                <Button onClick={handlePost}>Post</Button>
              </div>
            </CardContent>
          </Card>

          {/* Posts */}
          {posts.map(post => (
            <Card key={post.id}>
              <CardContent>
                <div className="flex items-center gap-3 mb-3">
                  <img
                    src={profilePictures[post.user.name] || `https://avatars.dicebear.com/api/micah/${encodeURIComponent(post.user.name)}.svg`}
                    alt={post.user.name}
                    className="w-10 h-10 rounded-full object-cover cursor-pointer"
                    onClick={() => handleUserClick(post.user.name)}
                  />
                  <div>
                    <h4 
                      className="font-semibold text-sm cursor-pointer hover:text-pink-500 transition"
                      onClick={() => handleUserClick(post.user.name)}
                    >
                      {post.user.name}
                    </h4>
                    <p className="text-gray-500 text-xs">{post.user.role} • {post.timestamp}</p>
                  </div>
                </div>
                <p className="text-gray-800 mb-3">{post.content}</p>
                {post.image && (
                  <img src={`${post.image}?auto=format&crop=entropy&fit=crop&w=600&h=350`} 
                       alt="Post visual" className="w-full h-48 object-cover rounded-lg mb-3"/>
                )}
                <div className="flex items-center gap-4 text-pink-500 text-sm mb-2">
                  <button className="flex items-center gap-1 hover:underline">
                    <Heart className="w-4 h-4" /> {post.likes} Likes
                  </button>
                  <button 
                    className="flex items-center gap-1 hover:underline"
                    onClick={() => toggleComments(post.id)}
                  >
                    <MessageCircle className="w-4 h-4" /> {post.commentsCount} Comments
                  </button>
                </div>
                {post.comments && post.comments.length > 0 && (
                  <div className="border-t border-pink-100 pt-3 space-y-2">
                    {(expandedComments[post.id] ? post.comments : post.comments.slice(0, 2)).map((c, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <div className="w-6 h-6 rounded-full bg-pink-100 flex items-center justify-center text-xs font-semibold text-pink-600">
                          {c.by.charAt(0).toUpperCase()}
                        </div>
                        <div className="flex-1">
                          <p className="text-gray-600 text-sm">
                            <strong className="text-gray-800">{c.by}</strong> {c.text}
                          </p>
                        </div>
                      </div>
                    ))}
                    {post.comments.length > 2 && (
                      <button 
                        onClick={() => toggleComments(post.id)}
                        className="text-pink-500 text-sm hover:underline ml-8"
                      >
                        {expandedComments[post.id] 
                          ? "Hide comments" 
                          : `View ${post.comments.length - 2} more comments`
                        }
                      </button>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </main>
      </div>
    </>
  );
}