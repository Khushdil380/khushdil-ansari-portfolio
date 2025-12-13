# Portfolio Project

A modern, full-stack developer portfolio website built with React, Node.js, and MongoDB.

## Features

- 🌓 Dark/Light mode with smooth transitions
- 📱 Mobile-first responsive design
- ⚡ Micro-component-based architecture
- 🎨 Modern, minimalistic design
- ✨ Smooth animations and typewriter effects

## Tech Stack

### Frontend

- React 18
- CSS3 with custom properties
- Context API for state management

### Design System

- **Font**: Roboto Slab
- **Colors**: Custom theme with dark/light modes
- **Animations**: CSS transitions and keyframes

## Project Structure

```
client/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Hero/
│   │   │   ├── HeroSection.js
│   │   │   ├── QuoteComponent.js
│   │   │   ├── ProfilePicture.js
│   │   │   ├── HeadlineComponent.js
│   │   │   └── DescriptionComponent.js
│   │   ├── Navigation/
│   │   │   ├── Header.js
│   │   │   ├── ThemeToggle.js
│   │   │   ├── HamburgerIcon.js
│   │   │   └── CloseButton.js
│   │   ├── Utility/
│   │   │   ├── Button.js
│   │   │   └── SocialIcon.js
│   │   └── Layout/
│   │       └── Layout.js
│   ├── context/
│   │   └── ThemeContext.js
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
└── package.json
```

## Getting Started

### Installation

```bash
cd client
npm install
```

### Running the Development Server

```bash
npm start
```

The application will open at [http://localhost:3000](http://localhost:3000).

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Runs the test suite

## Components

### Core Components

- **Layout**: Main wrapper component
- **Header**: Fixed navigation with theme toggle
- **HeroSection**: Landing page with profile and intro

### Utility Components

- **Button**: Reusable button with accent styling
- **SocialIcon**: Social media link icons
- **ThemeToggle**: Dark/light mode switcher

### Animation Components

- **QuoteComponent**: Rotating quotes with typewriter effect
- **HeadlineComponent**: Animated role titles
- **DescriptionComponent**: Dynamic role descriptions
- **ProfilePicture**: Animated profile image with effects

## Theme System

The application uses a context-based theme system supporting:

- Dark Mode (default)
- Light Mode
- Smooth transitions between modes
- Consistent color palette across all components

## License

MIT
