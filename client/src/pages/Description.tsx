import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AudioPlayer } from "@/components/AudioPlayer";

export default function Description() {
  const [_, setLocation] = useLocation();

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardContent className="pt-6">
        <h2 className="text-2xl font-bold mb-4">How It Works</h2>
        <div className="space-y-4 mb-6">
          <p className="text-muted-foreground">
            Listen to the introduction below to learn how to get the most out
            of your guided imagination exercises.
          </p>
          <AudioPlayer url="/api/audio/intro.mp3" />
        </div>
        <Button
          className="w-full"
          onClick={() => setLocation("/categories")}
        >
          Continue to Categories
        </Button>
      </CardContent>
    </Card>
  );
}
