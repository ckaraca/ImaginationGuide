import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Welcome() {
  const [_, setLocation] = useLocation();

  return (
    <div className="flex flex-col items-center justify-center min-h-[90vh]">
      <Card className="w-full max-w-md">
        <CardContent className="pt-6 text-center">
          <h1 className="text-3xl font-bold mb-6">Guided Imagination</h1>
          <p className="text-muted-foreground mb-8">
            Welcome to your journey of relaxation and mindfulness
          </p>
          <Button
            size="lg"
            className="w-full"
            onClick={() => setLocation("/terms")}
          >
            Start Journey
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
