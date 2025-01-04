import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Share2, Twitter, Facebook, Linkedin } from "lucide-react";
import { SiX } from "react-icons/si";

interface ShareModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
}

export function ShareModal({ open, onOpenChange, title }: ShareModalProps) {
  const shareUrl = window.location.href;
  const shareText = `I just completed "${title}" on Guided Imagination! 🧘‍♂️✨`;

  const handleShare = async (platform?: string) => {
    if (!platform && navigator.share) {
      try {
        await navigator.share({
          title: "Guided Imagination",
          text: shareText,
          url: shareUrl,
        });
      } catch (err) {
        console.error("Error sharing:", err);
      }
      return;
    }

    const shareUrls = {
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
      x: `https://x.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`,
    };

    if (platform && platform in shareUrls) {
      window.open(shareUrls[platform as keyof typeof shareUrls], '_blank');
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Share Your Journey</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-4">
          {navigator.share && (
            <Button onClick={() => handleShare()} className="w-full">
              <Share2 className="mr-2 h-4 w-4" />
              Share
            </Button>
          )}
          <div className="grid grid-cols-2 gap-4">
            <Button variant="outline" onClick={() => handleShare('twitter')}>
              <Twitter className="mr-2 h-4 w-4" />
              Twitter
            </Button>
            <Button variant="outline" onClick={() => handleShare('x')}>
              <SiX className="mr-2 h-4 w-4" />
              X
            </Button>
            <Button variant="outline" onClick={() => handleShare('facebook')}>
              <Facebook className="mr-2 h-4 w-4" />
              Facebook
            </Button>
            <Button variant="outline" onClick={() => handleShare('linkedin')}>
              <Linkedin className="mr-2 h-4 w-4" />
              LinkedIn
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
