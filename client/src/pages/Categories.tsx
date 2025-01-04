import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Waves, Mountain, Palmtree, Stars } from "lucide-react";

const categories = [
  { id: "nature", name: "Nature Scenes", icon: Waves },
  { id: "adventure", name: "Adventures", icon: Mountain },
  { id: "relaxation", name: "Relaxation", icon: Palmtree },
  { id: "meditation", name: "Meditation", icon: Stars },
];

export default function Categories() {
  const [_, setLocation] = useLocation();

  return (
    <div className="w-full max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-6">Choose Your Journey</h2>
      <div className="grid grid-cols-2 gap-4">
        {categories.map((category) => (
          <Card
            key={category.id}
            className="cursor-pointer hover:bg-accent transition-colors"
            onClick={() => setLocation(`/subtopics/${category.id}`)}
          >
            <CardContent className="p-6 text-center">
              <category.icon className="w-10 h-10 mx-auto mb-3" />
              <h3 className="font-medium">{category.name}</h3>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}