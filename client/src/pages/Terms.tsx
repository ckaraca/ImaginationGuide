import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Terms() {
  const [_, setLocation] = useLocation();

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardContent className="pt-6">
        <h2 className="text-2xl font-bold mb-4">Terms & Conditions</h2>
        <ScrollArea className="h-[400px] mb-6 p-4 rounded-md border">
          <div className="space-y-4">
            <p>
              Welcome to our guided imagination exercises. Before proceeding,
              please read and accept our terms and conditions.
            </p>
            {/* Add more terms content here */}
          </div>
        </ScrollArea>
        <div className="flex flex-col gap-3">
          <Button onClick={() => setLocation("/description")}>
            Accept & Continue
          </Button>
          <Button variant="outline" onClick={() => setLocation("/")}>
            Decline
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
