import { useState, useEffect } from "react";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { PlayCircle, PauseCircle, RotateCcw, Volume2 } from "lucide-react";
import { audioManager } from "@/lib/audio";

interface AudioPlayerProps {
  url: string;
  onComplete?: () => void;
}

export function AudioPlayer({ url, onComplete }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      const current = audioManager.getCurrentTime();
      const total = audioManager.getDuration();
      const newProgress = (current / total) * 100;
      setProgress(newProgress);

      // Check if the audio has completed
      if (newProgress >= 99.5 && onComplete) {
        onComplete();
      }
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  const togglePlay = async () => {
    if (isPlaying) {
      audioManager.pause();
    } else {
      await audioManager.play(url);
    }
    setIsPlaying(!isPlaying);
  };

  const handleReset = () => {
    audioManager.stop();
    setIsPlaying(false);
    setProgress(0);
  };

  const handleVolumeChange = (value: number[]) => {
    const newVolume = value[0] / 100;
    setVolume(newVolume);
    audioManager.setVolume(newVolume);
  };

  const handleSeek = (value: number[]) => {
    const newTime = (value[0] / 100) * audioManager.getDuration();
    audioManager.seek(newTime);
  };

  return (
    <div className="w-full p-4 bg-white rounded-lg shadow-md">
      <div className="flex items-center justify-between mb-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={togglePlay}
          className="w-12 h-12"
        >
          {isPlaying ? (
            <PauseCircle className="w-8 h-8" />
          ) : (
            <PlayCircle className="w-8 h-8" />
          )}
        </Button>

        <Button variant="ghost" size="icon" onClick={handleReset}>
          <RotateCcw className="w-6 h-6" />
        </Button>
      </div>

      <Slider
        value={[progress]}
        onValueChange={handleSeek}
        max={100}
        step={1}
        className="mb-4"
      />

      <div className="flex items-center gap-2">
        <Volume2 className="w-4 h-4" />
        <Slider
          value={[volume * 100]}
          onValueChange={handleVolumeChange}
          max={100}
          step={1}
          className="w-24"
        />
      </div>
    </div>
  );
}