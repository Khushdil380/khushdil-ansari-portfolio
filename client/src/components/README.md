# Portfolio Client - Component Documentation

## Component Structure

### Layout Components

- **Layout.js** - Main application wrapper
- **Header.js** - Fixed navigation header with theme toggle and hamburger menu

### Navigation Components

- **ThemeToggle.js** - Sun/moon icon for dark/light mode switching
- **HamburgerIcon.js** - Animated hamburger menu icon
- **CloseButton.js** - Close button for navigation overlay

### Hero Section Components

- **HeroSection.js** - Main landing section container
- **QuoteComponent.js** - Rotating professional quotes with typewriter effect
- **ProfilePicture.js** - Animated profile image with hover effects
- **HeadlineComponent.js** - "I Am [Role]" with typewriter animation
- **DescriptionComponent.js** - Role-specific descriptions

### Utility Components

- **Button.js** - Reusable button component with accent styling
- **SocialIcon.js** - Social media icon links with SVG icons

## Props Documentation

### HeadlineComponent

- `onRoleChange` (function) - Callback when role changes

### DescriptionComponent

- `currentRole` (string) - Current role to display description for

### Button

- `onClick` (function) - Click handler
- `variant` (string) - 'primary' | 'secondary'
- `type` (string) - Button type attribute

### SocialIcon

- `platform` (string) - Platform name (GitHub, LinkedIn, Email, WhatsApp, Medium, Quora, X)
- `url` (string) - Link URL

## State Management

- Theme context (`ThemeContext.js`) provides global theme state
- `isDarkMode` (boolean) - Current theme mode
- `theme` (object) - Current theme colors
- `toggleTheme` (function) - Theme switcher

## Best Practices Followed

✅ Consistent React hooks usage
✅ Proper prop passing
✅ useEffect dependency arrays
✅ Component modularity
✅ Mobile-first responsive design
✅ Accessibility (aria-labels, semantic HTML)
✅ Smooth animations and transitions
