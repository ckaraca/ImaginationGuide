import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Home, ChevronLeft, Menu } from "lucide-react";
import { AnimatePresence } from "framer-motion";

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  const [location, setLocation] = useLocation();

  const showNav = location !== "/";

  return (
    <div className="min-h-screen bg-gray-50">
      {showNav && (
        <header className="fixed top-0 left-0 right-0 h-14 bg-white border-b flex items-center justify-between px-4 z-50">
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => window.history.back()}
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" onClick={() => setLocation("/")}>
              <Home className="w-5 h-5" />
            </Button>
          </div>
          <Button variant="ghost" size="icon">
            <Menu className="w-5 h-5" />
          </Button>
        </header>
      )}
      <main
        className={`container mx-auto px-4 ${showNav ? "pt-20 pb-6" : "py-6"}`}
      >
        <AnimatePresence mode="wait">
          {children}
        </AnimatePresence>
      </main>
    </div>
  );
}