// Continuing from your base, here's the added homepage sections with card layout

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const SectionCard = ({ title, items }) => (
  <section className="py-12">
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-2xl md:text-3xl font-bold text-pink-700 mb-6">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {items.map((item, idx) => (
          <Card key={idx} className="rounded-2xl shadow-md bg-white hover:shadow-lg transition">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-pink-600 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{item.description}</p>
              <Button variant="outline" className="text-pink-500 border-pink-500 hover:bg-pink-50">
                {item.buttonText || "See More"}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default function HomepageSections() {
  return (
    <>
      <SectionCard
        title="Idea Zone"
        items={[
          { title: "Trending Idea", description: "Explore top trending startup ideas supported by the community." },
          { title: "Most Supported Idea", description: "See the ideas with the most backing and why they resonate." },
          { title: "Your Ideas", description: "Track feedback and engagement on your submitted ideas." },
        ]}
      />

      <SectionCard
        title="Funding Hub"
        items={[
          { title: "Top Funded Woman", description: "Get inspired by the most funded women on our platform." },
          { title: "Most Funded Projects", description: "Discover projects that secured the highest support." },
          { title: "Pitch Deck Guide", description: "Learn how to build a pitch deck that attracts funding." },
        ]}
      />

      <SectionCard
        title="Network"
        items={[
          { title: "Find Mentors", description: "Connect with industry leaders ready to guide you." },
          { title: "Peer Network", description: "Engage with a supportive community of founders." },
          { title: "Incubator Connect", description: "Match with the right incubator or accelerator." },
        ]}
      />

      <SectionCard
        title="Resources"
        items={[
          { title: "Hackathons", description: "Join upcoming innovation challenges and win support." },
          { title: "Workshops", description: "Hands-on sessions to level up your entrepreneurial skills." },
          { title: "Toolkits", description: "Templates, planners, and resources to simplify your journey." },
        ]}
      />

      <SectionCard
        title="Marketplace"
        items={[
          { title: "Products by Women", description: "Support and shop from women-led brands." },
          { title: "Service Providers", description: "Find trusted partners for your startup needs." },
          { title: "Promote Yours", description: "List your own product or service on the marketplace." },
        ]}
      />
    </>
  );
}
