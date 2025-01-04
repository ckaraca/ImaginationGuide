import type { Express } from "express";
import { createServer, type Server } from "http";
import path from "path";

export function registerRoutes(app: Express): Server {
  // Stub audio endpoints for development
  app.get("/api/audio/:category/:file", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/sample.mp3"));
  });

  const httpServer = createServer(app);
  return httpServer;
}
