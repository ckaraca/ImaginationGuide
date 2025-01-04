# Guided Imagination Web App

A mobile-responsive web application designed for guided imagination and meditation experiences. The app provides an immersive, step-by-step audio-based journey through mental wellness exercises.

## Features

- 🎯 Multi-step user flow with intuitive navigation
- 🎵 Advanced audio playback controls
- 📱 Mobile-first responsive design
- 🌈 Beautiful animations and transitions
- 🔄 Progress tracking
- 📱 Social sharing capabilities

## Tech Stack

- React + TypeScript
- Vite for building and development
- Express.js backend
- ShadcN UI components
- Framer Motion for animations
- TailwindCSS for styling
- Web Audio API for audio management

## Prerequisites

- Node.js (v18 or later)
- npm (v9 or later)

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd guided-imagination
```

2. Install dependencies:
```bash
npm install
```

## Development

Start the development server:

```bash
npm run dev
```

This will start both the frontend and backend servers. The application will be available at `http://localhost:5000`.

## Building for Production

Build the application:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

## Project Structure

```
├── client/               # Frontend application
│   ├── src/
│   │   ├── components/  # Reusable components
│   │   ├── pages/       # Page components
│   │   ├── lib/         # Utilities and helpers
│   │   └── hooks/       # Custom React hooks
├── server/              # Backend application
│   ├── routes.ts        # API routes
│   └── index.ts         # Server entry point
└── public/              # Static assets
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run check` - Run TypeScript type checking

## Features Overview

1. Welcome Screen
   - Animated introduction
   - Terms and conditions
   - App description with audio guide

2. Category Selection
   - Four main categories:
     - Nature Scenes
     - Adventures
     - Relaxation
     - Meditation

3. Audio Player
   - Play/Pause controls
   - Progress tracking
   - Volume control
   - Share completion

## Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
