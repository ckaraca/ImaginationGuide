import { useLocation, useParams } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const topicsByCategory: Record<string, string[]> = {
  nature: ["Beach Sunset", "Forest Walk", "Mountain Stream", "Garden Peace"],
  adventure: ["Space Journey", "Ocean Depths", "Desert Quest", "Sky Soaring"],
  relaxation: ["Body Scan", "Peaceful Place", "Energy Flow", "Deep Rest"],
  meditation: ["Mindful Breath", "Loving Kindness", "Inner Light", "Sound Bath"],
};

export default function SubTopics() {
  const params = useParams();
  const [_, setLocation] = useLocation();
  const category = params.category || "";
  const topics = topicsByCategory[category] || [];

  return (
    <div className="w-full max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-6 capitalize">
        {category} Experiences
      </h2>
      <div className="space-y-3">
        {topics.map((topic) => (
          <Card
            key={topic}
            className="cursor-pointer hover:bg-accent transition-colors"
            onClick={() =>
              setLocation(`/player/${category}/${encodeURIComponent(topic)}`)
            }
          >
            <CardContent className="p-4">
              <h3 className="font-medium">{topic}</h3>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
