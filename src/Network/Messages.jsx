import React, { useState } from 'react';
import { X, Send, Search, MoreVertical, Phone, Video, Info, Smile, Paperclip, Circle, ArrowLeft } from 'lucide-react';

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

// Sample conversations data
const conversations = [
  {
    id: 1,
    user: {
      name: "Fatima Bello",
      role: "Founder @ ThriveHer",
      profileImage: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face",
      isOnline: true
    },
    lastMessage: "That sounds like an amazing opportunity! I'd love to collaborate.",
    timestamp: "2m ago",
    unreadCount: 2,
    messages: [
      {
        id: 1,
        sender: "Fatima Bello",
        content: "Hi! I saw your post about the new AI project. Very impressive work!",
        timestamp: "10:30 AM",
        isOwn: false
      },
      {
        id: 2,
        sender: "You",
        content: "Thank you! I'm really excited about the potential impact it could have.",
        timestamp: "10:32 AM",
        isOwn: true
      },
      {
        id: 3,
        sender: "Fatima Bello",
        content: "I'm working on a similar initiative for women entrepreneurs in Africa. Would you be interested in exploring a collaboration?",
        timestamp: "10:35 AM",
        isOwn: false
      },
      {
        id: 4,
        sender: "You",
        content: "That sounds like an amazing opportunity! I'd love to collaborate.",
        timestamp: "10:37 AM",
        isOwn: true
      }
    ]
  },
  {
    id: 2,
    user: {
      name: "Luna Taylor",
      role: "Developer Advocate",
      profileImage: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=150&h=150&fit=crop&crop=face",
      isOnline: true
    },
    lastMessage: "The workshop materials are ready for review",
    timestamp: "1h ago",
    unreadCount: 0,
    messages: [
      {
        id: 1,
        sender: "Luna Taylor",
        content: "Hey! How's the preparation for the tech workshop going?",
        timestamp: "9:15 AM",
        isOwn: false
      },
      {
        id: 2,
        sender: "You",
        content: "Going well! I've finished the slides and demo. How about the venue setup?",
        timestamp: "9:20 AM",
        isOwn: true
      },
      {
        id: 3,
        sender: "Luna Taylor",
        content: "Perfect! Everything is set up. The workshop materials are ready for review",
        timestamp: "9:25 AM",
        isOwn: false
      }
    ]
  },
  {
    id: 3,
    user: {
      name: "Jessica Chen",
      role: "Cybersecurity Expert",
      profileImage: "https://images.unsplash.com/photo-1515378791036-0648a814c963?w=150&h=150&fit=crop&crop=face",
      isOnline: false
    },
    lastMessage: "Thanks for the security audit recommendations!",
    timestamp: "3h ago",
    unreadCount: 1,
    messages: [
      {
        id: 1,
        sender: "You",
        content: "Hi Jessica! Could you review our app's security architecture?",
        timestamp: "Yesterday 4:30 PM",
        isOwn: true
      },
      {
        id: 2,
        sender: "Jessica Chen",
        content: "Of course! I'll take a look and send you my recommendations by tomorrow.",
        timestamp: "Yesterday 4:45 PM",
        isOwn: false
      },
      {
        id: 3,
        sender: "Jessica Chen",
        content: "Thanks for the security audit recommendations!",
        timestamp: "7:30 AM",
        isOwn: false
      }
    ]
  },
  {
    id: 4,
    user: {
      name: "Priya Sharma",
      role: "Blockchain Developer",
      profileImage: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=150&h=150&fit=crop&crop=face",
      isOnline: true
    },
    lastMessage: "The smart contract is deployed successfully! 🎉",
    timestamp: "5h ago",
    unreadCount: 0,
    messages: [
      {
        id: 1,
        sender: "Priya Sharma",
        content: "Working on the final testing for the DeFi protocol",
        timestamp: "Yesterday 2:00 PM",
        isOwn: false
      },
      {
        id: 2,
        sender: "You",
        content: "Awesome! Let me know if you need any help with the testing",
        timestamp: "Yesterday 2:15 PM",
        isOwn: true
      },
      {
        id: 3,
        sender: "Priya Sharma",
        content: "The smart contract is deployed successfully! 🎉",
        timestamp: "5:30 AM",
        isOwn: false
      }
    ]
  },
  {
    id: 5,
    user: {
      name: "Aaliyah Johnson",
      role: "ML Engineer",
      profileImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=150&h=150&fit=crop&crop=face",
      isOnline: false
    },
    lastMessage: "The model accuracy improved to 94%!",
    timestamp: "1d ago",
    unreadCount: 0,
    messages: [
      {
        id: 1,
        sender: "Aaliyah Johnson",
        content: "The model accuracy improved to 94%!",
        timestamp: "Yesterday 10:00 AM",
        isOwn: false
      }
    ]
  }
];

const MessagesPopup = ({ isOpen, onClose }) => {
  const [selectedConversation, setSelectedConversation] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [newMessage, setNewMessage] = useState("");
  const [conversationsList, setConversationsList] = useState(conversations);
  const [showConversationList, setShowConversationList] = useState(true);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!newMessage.trim() || !selectedConversation) return;

    const updatedConversations = conversationsList.map(conv => {
      if (conv.id === selectedConversation.id) {
        const newMsg = {
          id: Date.now(),
          sender: "You",
          content: newMessage.trim(),
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          isOwn: true
        };
        return {
          ...conv,
          messages: [...conv.messages, newMsg],
          lastMessage: newMessage.trim(),
          timestamp: "now"
        };
      }
      return conv;
    });

    setConversationsList(updatedConversations);
    setSelectedConversation(prev => ({
      ...prev,
      messages: [...prev.messages, {
        id: Date.now(),
        sender: "You",
        content: newMessage.trim(),
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isOwn: true
      }]
    }));
    setNewMessage("");
  };

  const handleSelectConversation = (conversation) => {
    setSelectedConversation(conversation);
    setShowConversationList(false); // Hide conversation list on mobile when chat is selected
  };

  const handleBackToConversations = () => {
    setShowConversationList(true);
    setSelectedConversation(null);
  };

  const filteredConversations = conversationsList.filter(conv =>
    conv.user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    conv.user.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
    conv.lastMessage.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-2 sm:p-4">
      <div className="bg-white rounded-lg sm:rounded-2xl w-full max-w-6xl h-[95vh] sm:h-[85vh] flex overflow-hidden">
        {/* Conversations List - Hidden on mobile when chat is selected */}
        <div className={`${
          showConversationList ? 'flex' : 'hidden'
        } md:flex w-full md:w-1/3 border-r border-gray-200 flex-col`}>
          {/* Header */}
          <div className="p-3 sm:p-4 border-b border-gray-200">
            <div className="flex items-center justify-between mb-3 sm:mb-4">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900">Messages</h2>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full transition"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search conversations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 text-sm"
              />
            </div>
          </div>

          {/* Conversations */}
          <div className="flex-1 overflow-y-auto">
            {filteredConversations.map(conversation => (
              <div
                key={conversation.id}
                onClick={() => handleSelectConversation(conversation)}
                className={`p-3 sm:p-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50 transition ${
                  selectedConversation?.id === conversation.id ? 'bg-pink-50 border-pink-200' : ''
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className="relative">
                    <img
                      src={conversation.user.profileImage}
                      alt={conversation.user.name}
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
                    />
                    <div className={`absolute -bottom-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 rounded-full border-2 border-white ${
                      conversation.user.isOnline ? 'bg-green-500' : 'bg-gray-400'
                    }`}></div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-semibold text-gray-900 truncate text-sm">
                        {conversation.user.name}
                      </h3>
                      <span className="text-xs text-gray-500 ml-2">{conversation.timestamp}</span>
                    </div>
                    <p className="text-xs text-gray-500 mb-1 truncate">{conversation.user.role}</p>
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-gray-600 truncate flex-1 pr-2">
                        {conversation.lastMessage}
                      </p>
                      {conversation.unreadCount > 0 && (
                        <span className="bg-pink-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0">
                          {conversation.unreadCount}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chat Area - Full width on mobile when conversation is selected */}
        <div className={`${
          showConversationList ? 'hidden' : 'flex'
        } md:flex flex-1 flex-col`}>
          {selectedConversation ? (
            <>
              {/* Chat Header */}
              <div className="p-3 sm:p-4 border-b border-gray-200 bg-gray-50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 sm:gap-3">
                    {/* Back button for mobile */}
                    <button
                      onClick={handleBackToConversations}
                      className="md:hidden p-2 hover:bg-gray-200 rounded-full transition mr-1"
                    >
                      <ArrowLeft className="w-4 h-4 text-gray-600" />
                    </button>
                    <div className="relative">
                      <img
                        src={selectedConversation.user.profileImage}
                        alt={selectedConversation.user.name}
                        className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover"
                      />
                      <div className={`absolute -bottom-1 -right-1 w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full border-2 border-white ${
                        selectedConversation.user.isOnline ? 'bg-green-500' : 'bg-gray-400'
                      }`}></div>
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-semibold text-gray-900 text-sm sm:text-base truncate">
                        {selectedConversation.user.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-500 truncate">
                        {selectedConversation.user.isOnline ? 'Online' : 'Offline'} • {selectedConversation.user.role}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 sm:gap-2">
                    <button className="p-1.5 sm:p-2 hover:bg-gray-200 rounded-full transition">
                      <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
                    </button>
                    <button className="p-1.5 sm:p-2 hover:bg-gray-200 rounded-full transition">
                      <Video className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
                    </button>
                    <button className="p-1.5 sm:p-2 hover:bg-gray-200 rounded-full transition">
                      <Info className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-3 sm:space-y-4">
                {selectedConversation.messages.map(message => (
                  <div
                    key={message.id}
                    className={`flex ${message.isOwn ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`max-w-[85%] sm:max-w-xs lg:max-w-md px-3 sm:px-4 py-2 rounded-2xl ${
                      message.isOwn
                        ? 'bg-pink-500 text-white'
                        : 'bg-gray-100 text-gray-900'
                    }`}>
                      <p className="text-sm break-words">{message.content}</p>
                      <p className={`text-xs mt-1 ${
                        message.isOwn ? 'text-pink-100' : 'text-gray-500'
                      }`}>
                        {message.timestamp}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Message Input */}
              <div className="p-3 sm:p-4 border-t border-gray-200">
                <form onSubmit={handleSendMessage} className="flex items-center gap-2">
                  <button
                    type="button"
                    className="p-1.5 sm:p-2 hover:bg-gray-100 rounded-full transition flex-shrink-0"
                  >
                    <Paperclip className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
                  </button>
                  <div className="flex-1 relative">
                    <input
                      type="text"
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      placeholder="Type a message..."
                      className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-sm"
                    />
                    <button
                      type="button"
                      className="absolute right-2 sm:right-3 top-1/2 transform -translate-y-1/2 p-1 hover:bg-gray-100 rounded-full transition"
                    >
                      <Smile className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600" />
                    </button>
                  </div>
                  <button
                    type="submit"
                    disabled={!newMessage.trim()}
                    className="p-1.5 sm:p-2 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0"
                  >
                    <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                </form>
              </div>
            </>
          ) : (
            /* No Conversation Selected */
            <div className="flex-1 flex items-center justify-center p-4">
              <div className="text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Circle className="w-6 h-6 sm:w-8 sm:h-8 text-gray-400" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-600 mb-2">Select a conversation</h3>
                <p className="text-sm text-gray-500 px-4">Choose a conversation from the list to start messaging</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MessagesPopup;