import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { PageTransition } from "@/components/PageTransition";

export default function Welcome() {
  const [_, setLocation] = useLocation();

  return (
    <PageTransition>
      <div className="flex flex-col items-center justify-center min-h-[90vh]">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          <Card className="w-full max-w-md">
            <CardContent className="pt-6 text-center">
              <motion.h1 
                className="text-3xl font-bold mb-6"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.4 }}
              >
                Guided Imagination
              </motion.h1>
              <motion.p 
                className="text-muted-foreground mb-8"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.4 }}
              >
                Welcome to your journey of relaxation and mindfulness
              </motion.p>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.4 }}
              >
                <Button
                  size="lg"
                  className="w-full"
                  onClick={() => setLocation("/terms")}
                >
                  Start Journey
                </Button>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </PageTransition>
  );
}