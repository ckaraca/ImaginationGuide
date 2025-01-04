import { useParams } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { AudioPlayer } from "@/components/AudioPlayer";

export default function Player() {
  const params = useParams();
  const category = params.category || "";
  const topic = decodeURIComponent(params.topic || "");

  return (
    <div className="w-full max-w-md mx-auto">
      <Card>
        <CardContent className="pt-6">
          <h2 className="text-2xl font-bold mb-2 capitalize">{topic}</h2>
          <p className="text-muted-foreground mb-6">
            Find a comfortable position and prepare for your journey.
          </p>
          <AudioPlayer url={`/api/audio/${category}/${encodeURIComponent(topic)}.mp3`} />
        </CardContent>
      </Card>
    </div>
  );
}
