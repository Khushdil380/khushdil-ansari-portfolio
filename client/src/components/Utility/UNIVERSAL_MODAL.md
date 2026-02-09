# UniversalModal Component

## 📋 Overview

`UniversalModal` is a centralized, reusable modal component that provides a consistent modal experience across the entire portfolio. It replaces separate modal implementations with a single, flexible solution.

## 📁 Location

`client/src/components/Utility/UniversalModal.js`  
`client/src/components/Utility/UniversalModal.css`

## 🎯 Features

- **Multiple Sizes**: Small (600px), Medium (900px), Large (1200px), XLarge (1400px)
- **Theme Integration**: Automatically applies theme colors and CSS variables
- **Flexible Content**: Accepts any React children
- **Backdrop Click Control**: Optional closing on backdrop click
- **Close Button Control**: Optional close button visibility
- **Custom Styling**: Support for additional CSS classes
- **Responsive Design**: Mobile, tablet, and desktop optimized
- **Smooth Animations**: Fade-in overlay and slide-up content

## 📦 Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `isOpen` | boolean | Yes | - | Controls modal visibility |
| `onClose` | function | Yes | - | Callback when modal closes |
| `size` | string | No | "medium" | Modal size: "small", "medium", "large", "xlarge" |
| `children` | node | Yes | - | Content to render inside modal |
| `showCloseButton` | boolean | No | true | Show/hide close button |
| `closeOnBackdropClick` | boolean | No | true | Allow closing on backdrop click |
| `customClass` | string | No | "" | Additional CSS class for styling |

## 🔧 Usage Examples

### Basic Modal

```javascript
import React, { useState } from "react";
import UniversalModal from "../Utility/UniversalModal";

const MyComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      
      <UniversalModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        size="medium"
      >
        <div style={{ padding: "2rem" }}>
          <h2>Modal Content</h2>
          <p>Your content here...</p>
        </div>
      </UniversalModal>
    </>
  );
};
```

### Small Modal (Form)

```javascript
<UniversalModal
  isOpen={isOpen}
  onClose={onClose}
  size="small"
  closeOnBackdropClick={false}
>
  <form onSubmit={handleSubmit}>
    {/* Form fields */}
  </form>
</UniversalModal>
```

### Large Modal (Complex Content)

```javascript
<UniversalModal
  isOpen={isOpen}
  onClose={onClose}
  size="xlarge"
  customClass="my-custom-modal"
>
  <div className="complex-layout">
    {/* Projects, testimonials, etc. */}
  </div>
</UniversalModal>
```

### Modal Without Close Button

```javascript
<UniversalModal
  isOpen={isOpen}
  onClose={onClose}
  size="medium"
  showCloseButton={false}
>
  <div>
    <h2>Confirm Action</h2>
    <button onClick={onClose}>Cancel</button>
    <button onClick={handleConfirm}>Confirm</button>
  </div>
</UniversalModal>
```

## 🎨 Size Guide

| Size | Max Width | Best For |
|------|-----------|----------|
| `small` | 600px | Forms, alerts, confirmations |
| `medium` | 900px | General content, moderate details |
| `large` | 1200px | Rich content, galleries, data tables |
| `xlarge` | 1400px | Complex layouts, dashboards |

## 🏗️ Current Implementations

### 1. Resume Request Modal
**Location**: `Utility/RequestResumeModal.js`  
**Size**: `small`  
**Backdrop Click**: Disabled  
**Usage**: Resume request form on home page

```javascript
<UniversalModal
  isOpen={isOpen}
  onClose={onClose}
  size="small"
  closeOnBackdropClick={false}
  customClass="resume-modal-wrapper animated-border"
>
  {/* Form content */}
</UniversalModal>
```

### 2. Service Modal
**Location**: `Services/ServiceModal/ServiceModal.js`  
**Size**: `xlarge`  
**Backdrop Click**: Enabled  
**Usage**: Service details on services page

```javascript
<UniversalModal
  isOpen={!!service}
  onClose={onClose}
  size="xlarge"
  closeOnBackdropClick={true}
  customClass="service-modal-wrapper"
>
  {/* Service details, projects, testimonials */}
</UniversalModal>
```

### 3. Future: Skills Coding Stats
**Planned Location**: `Skills/SkillsStatsModal.js`  
**Size**: `medium` or `large`  
**Usage**: Display coding statistics when clicking on skills

### 4. Future: Education Coding Stats
**Planned Location**: `Education/EducationStatsModal.js`  
**Size**: `medium` or `large`  
**Usage**: Display coding statistics in education section

## 🎨 Styling

### Theme Variables Available

All modals automatically receive theme CSS variables:
- `--accent-color`
- `--border-color`
- `--heading-color`
- `--content-color`
- `--primary-bg`
- `--secondary-bg`
- `--card-bg`

### Custom Styling

Add custom classes via `customClass` prop:

```javascript
<UniversalModal customClass="my-modal">
  {/* Content */}
</UniversalModal>
```

Then in your CSS:
```css
.my-modal .universal-modal__content {
  /* Custom styles */
}

.my-modal .universal-modal__body {
  /* Custom body styles */
}
```

## 📱 Responsive Behavior

### Desktop (> 768px)
- Full specified size (600px - 1400px)
- 1rem padding around modal
- Standard close button size

### Tablet (≤ 768px)
- 100% width with constraints
- 0.5rem padding
- Slightly smaller close button

### Mobile (≤ 480px)
- Full width with minimal padding
- 0.25rem padding
- Compact close button

## ⚙️ Technical Details

### Z-Index
- Modal overlay: `z-index: 1000`
- Close button: `z-index: 10` (relative to modal)

### Animations
- **Overlay**: Fade-in (0.3s ease)
- **Content**: Slide-up (0.4s ease)

### Backdrop
- Color: `rgba(0, 0, 0, 0.75)`
- Blur: `8px` (with webkit fallback)

### Scroll Behavior
- Overlay: `overflow-y: auto` (allows scrolling when content is tall)
- Content: `overflow-y: auto`, `overflow-x: hidden`

## 🔄 Migration Guide

### From ServiceModal to UniversalModal

**Before:**
```javascript
<div className="service-modal" onClick={handleBackdropClick}>
  <div className="service-modal__content">
    <CloseButton onClick={onClose} />
    {/* Content */}
  </div>
</div>
```

**After:**
```javascript
<UniversalModal isOpen={true} onClose={onClose} size="xlarge">
  {/* Content */}
</UniversalModal>
```

### From RequestResumeModal to UniversalModal

**Before:**
```javascript
<div className="resume-modal-overlay">
  <div className="resume-modal-content">
    <CloseButton onClick={onClose} />
    {/* Content */}
  </div>
</div>
```

**After:**
```javascript
<UniversalModal isOpen={isOpen} onClose={onClose} size="small">
  {/* Content */}
</UniversalModal>
```

## 🐛 Common Issues

### Modal Not Closing on Backdrop Click
- Ensure `closeOnBackdropClick={true}` is set
- Check if custom content is capturing click events

### Content Overflow
- Add padding to your content wrapper
- Use `overflow-y: auto` on child elements if needed

### Theme Colors Not Applying
- Check if ThemeContext is properly configured
- Verify CSS variables are being used in child styles

### Modal Not Scrolling
- Modal has `overflow-y: auto` by default
- Ensure content height exceeds modal height

## 🎯 Best Practices

1. **Choose Appropriate Size**: Match modal size to content complexity
2. **Backdrop Click**: Disable for forms, enable for informational content
3. **Custom Classes**: Use for specific styling needs, not for overriding base behavior
4. **Content Padding**: Always add padding to your content wrapper
5. **Close Button**: Hide only when providing alternative close methods
6. **Accessibility**: Ensure keyboard navigation works (ESC to close)

## 📚 Related Components

- **CloseButton** (`Utility/CloseButton.js`) - Close button with animation
- **Button** (`Utility/Button.js`) - Primary/secondary buttons
- **AnimatedBorder** (`Utility/AnimatedBorder.css`) - Animated border effect
- **ThemeContext** (`context/ThemeContext.js`) - Theme provider

## 🔮 Future Enhancements

- ESC key to close modal
- Focus trap for accessibility
- Multiple modal stacking support
- Custom animation variants
- Modal title/header component
- Predefined modal templates
