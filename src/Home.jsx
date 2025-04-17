// All-in-one Home.jsx file with local Card, CardContent, and Button components + hover effects + images + icons + profile pictures

import React from "react";
import {
  Lightbulb,
  TrendingUp,
  Users,
  HandCoins,
  Network,
  Settings,
  Rocket,
  Store,
  Shield,
  Megaphone,
} from "lucide-react";
import Footer from "./components/footer";
import Navbar from "./components/navbar";

// Local Card Components
const Card = ({ children, className = "" }) => (
  <div
    className={`bg-white rounded-2xl shadow-md hover:shadow-xl transition-transform transform hover:scale-105 overflow-hidden ${className}`}
  >
    {children}
  </div>
);

const CardContent = ({ children, className = "" }) => (
  <div className={`p-6 ${className}`}>{children}</div>
);

// Local Button Component
const Button = ({ children, className = "", ...props }) => (
  <button
    className={`px-4 py-2 border rounded-md font-medium transition text-pink-500 border-pink-500 hover:bg-pink-50 ${className}`}
    {...props}
  >
    {children}
  </button>
);

// SectionCard Component
const SectionCard = ({ title, items }) => {
  return (
    <>
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-pink-700 mb-6">
            {title}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {items.map((item, idx) => (
              <Card key={idx}>
                {item.image && (
                  <div className="relative w-full h-40 bg-pink-50 overflow-hidden">
                    {/* Main image */}
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-40 object-cover"
                      loading="lazy"
                      style={{ display: "block" }}
                      onError={(e) => {
                        console.error(`Failed to load image: ${item.image}`);
                        e.target.src =
                          "https://placehold.co/600x400/pink/white?text=SheInnovate";
                      }}
                    />
                  </div>
                )}
                <CardContent>
                  <div className="flex items-center gap-2 mb-2 text-pink-500">
                    {item.icon &&
                      React.createElement(item.icon, { className: "w-5 h-5" })}
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                  </div>
                  {item.user && (
                    <div className="flex items-center gap-2 mb-1">
                      <img
                        src={item.user.image}
                        alt={item.user.name}
                        className="w-6 h-6 rounded-full object-cover"
                      />
                      <p className="text-gray-600 text-sm italic">
                        {item.user.name}
                      </p>
                    </div>
                  )}
                  <p className="text-gray-600 text-sm mb-2">{item.idea}</p>
                  <p className="text-gray-500 text-xs mb-4">{item.metric}</p>
                  <Button>{item.buttonText || "See More"}</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

// Main Homepage Component
export default function HomepageSections() {
  return (
    <>
      <Navbar />
      <SectionCard
        title="Idea Zone"
        items={[
          {
            title: "Trending Idea",
            user: {
              name: "Lena M.",
              image: "https://randomuser.me/api/portraits/women/44.jpg",
            },
            idea: "An AI-based mental health app tailored for teen girls.",
            metric: "15k+ engagements · 3 investors onboard",
            image:
              "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600",
            icon: TrendingUp,
          },
          {
            title: "Most Supported Idea",
            user: {
              name: "Amara B.",
              image: "https://randomuser.me/api/portraits/women/65.jpg",
            },
            idea: "Reusable eco-packaging made by local artisans.",
            metric: "20k+ votes · $40k pledged",
            image:
              "https://images.pexels.com/photos/6963944/pexels-photo-6963944.jpeg?auto=compress&cs=tinysrgb&w=600",
            icon: HandCoins,
          },
          {
            title: "Your Ideas",
            user: {
              name: "You",
              image: "https://randomuser.me/api/portraits/lego/1.jpg",
            },
            idea: "AI-powered networking hub for rural entrepreneurs.",
            metric: "8k+ views · Positive feedback",
            image:
              "https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=600",
            icon: Lightbulb,
          },
        ]}
      />

      <SectionCard
        title="Funding Hub"
        items={[
          {
            title: "Top Funded Woman",
            user: {
              name: "Jade T.",
              image: "https://randomuser.me/api/portraits/women/55.jpg",
            },
            idea: "Biotech startup solving period pain with organic solutions.",
            metric: "$120k raised · Backed by 2 angel investors",
            image:
              "https://images.pexels.com/photos/3912368/pexels-photo-3912368.jpeg?auto=compress&cs=tinysrgb&w=600",
            icon: HandCoins,
          },
          {
            title: "Most Funded Projects",
            user: {
              name: "Various",
              image: "https://randomuser.me/api/portraits/lego/5.jpg",
            },
            idea: "Projects with over $500k in combined funding.",
            metric: "10+ ventures · Majority led by women",
            image:
              "https://images.pexels.com/photos/7821702/pexels-photo-7821702.jpeg?auto=compress&cs=tinysrgb&w=600",
            icon: Rocket,
          },
          {
            title: "Pitch Deck Guide",
            user: {
              name: "Platform Team",
              image: "https://randomuser.me/api/portraits/lego/2.jpg",
            },
            idea: "Step-by-step pitch deck guide used by top startups.",
            metric: "Used by 1k+ users · Proven funding results",
            image:
              "https://images.pexels.com/photos/7688460/pexels-photo-7688460.jpeg?auto=compress&cs=tinysrgb&w=600",
            icon: Settings,
          },
        ]}
      />

      <SectionCard
        title="Network"
        items={[
          {
            title: "Find Mentors",
            user: {
              name: "Global Mentorship",
              image: "https://randomuser.me/api/portraits/men/32.jpg",
            },
            idea: "Search profiles and connect with startup mentors.",
            metric: "300+ mentors · 4.8 average rating",
            image:
              "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=600",
            icon: Users,
          },
          {
            title: "Peer Network",
            user: {
              name: "Community",
              image: "https://randomuser.me/api/portraits/women/77.jpg",
            },
            idea: "Forums, chat groups and local meetups to grow together.",
            metric: "5k active members · 24/7 community support",
            image:
              "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600",
            icon: Network,
          },
          {
            title: "Incubator Connect",
            user: {
              name: "Partnerships Team",
              image: "https://randomuser.me/api/portraits/lego/3.jpg",
            },
            idea: "Apply to featured incubators matched to your startup.",
            metric: "20 incubators · Monthly slots open",
            image:
              "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=600",
            icon: Rocket,
          },
        ]}
      />

      <SectionCard
        title="Resources"
        items={[
          {
            title: "Hackathons",
            user: {
              name: "Tech Events",
              image: "https://randomuser.me/api/portraits/men/22.jpg",
            },
            idea: "Apply for upcoming coding and startup hackathons.",
            metric: "Next: April 28 · $5k prize pool",
            image:
              "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=600",
            icon: Rocket,
          },
          {
            title: "Workshops",
            user: {
              name: "Skill Builders",
              image: "https://randomuser.me/api/portraits/women/12.jpg",
            },
            idea: "Join virtual and local workshops by industry leaders.",
            metric: "Weekly sessions · Free & Paid options",
            image:
              "https://images.pexels.com/photos/3153198/pexels-photo-3153198.jpeg?auto=compress&cs=tinysrgb&w=600",
            icon: Settings,
          },
          {
            title: "Toolkits",
            user: {
              name: "Startup Essentials",
              image: "https://randomuser.me/api/portraits/lego/4.jpg",
            },
            idea: "Download templates, planners, and checklists.",
            metric: "100+ downloads · Updated monthly",
            image:
              "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600",
            icon: Shield,
          },
        ]}
      />

      <SectionCard
        title="Marketplace"
        items={[
          {
            title: "Products by Women",
            user: {
              name: "Women Brands",
              image: "https://randomuser.me/api/portraits/women/28.jpg",
            },
            idea: "Shop cosmetics, clothing, and more from women-led startups.",
            metric: "1.2k+ sales · Top rated",
            image:
              "https://images.pexels.com/photos/6169668/pexels-photo-6169668.jpeg?auto=compress&cs=tinysrgb&w=600",
            icon: Store,
          },
          {
            title: "Service Providers",
            user: {
              name: "Business Support",
              image: "https://randomuser.me/api/portraits/men/16.jpg",
            },
            idea: "Find legal, marketing, and tech support partners.",
            metric: "300+ listings · Verified",
            image:
              "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600",
            icon: Shield,
          },
          {
            title: "Promote Yours",
            user: {
              name: "You",
              image: "https://randomuser.me/api/portraits/lego/6.jpg",
            },
            idea: "List your product or service and reach thousands.",
            metric: "Instant listing · Community promoted",
            image:
              "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600",
            icon: Megaphone,
          },
        ]}
      />

      <Footer />
    </>
  );
}
