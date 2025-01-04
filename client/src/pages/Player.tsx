import { useParams } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { AudioPlayer } from "@/components/AudioPlayer";
import { Button } from "@/components/ui/button";
import { Share2 } from "lucide-react";
import { useState } from "react";
import { ShareModal } from "@/components/ShareModal";

export default function Player() {
  const params = useParams();
  const category = params.category || "";
  const topic = decodeURIComponent(params.topic || "");
  const [showShare, setShowShare] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  return (
    <div className="w-full max-w-md mx-auto">
      <Card>
        <CardContent className="pt-6">
          <h2 className="text-2xl font-bold mb-2 capitalize">{topic}</h2>
          <p className="text-muted-foreground mb-6">
            Find a comfortable position and prepare for your journey.
          </p>
          <AudioPlayer 
            url={`/api/audio/${category}/${encodeURIComponent(topic)}.mp3`}
            onComplete={() => setIsCompleted(true)}
          />

          {isCompleted && (
            <div className="mt-6">
              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => setShowShare(true)}
              >
                <Share2 className="mr-2 h-4 w-4" />
                Share Your Experience
              </Button>
            </div>
          )}

          <ShareModal 
            open={showShare}
            onOpenChange={setShowShare}
            title={topic}
          />
        </CardContent>
      </Card>
    </div>
  );
}