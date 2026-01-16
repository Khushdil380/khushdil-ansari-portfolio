# Bubble Effect System

This folder contains the centralized bubble hover effect system for tech and skill icons throughout the portfolio.

## 📁 File Structure

```
BubbleEffect/
├── index.js          # Main bubble creation logic
├── techColors.js     # Tech color configuration
├── BubbleEffect.css  # Animation styles
└── README.md         # This file
```

## 🎯 How It Works

When you hover over a tech/skill icon, the system:

1. Creates 18-20 bubbles at random positions across the viewport
2. Shows the tech name with brand-specific gradient colors
3. Animates bubbles with 5 different flight patterns
4. Fades out after 1.5-2 seconds

## ✨ Adding New Tech Icons

### Step 1: Add Icon File

Place your SVG icon in the centralized folder:

```
client/src/assets/techIcons/
└── powerpoint.svg  ← Add here
```

**Naming Convention:** Use lowercase, hyphen-separated names

- `nodejs.svg` (not `NodeJs.svg` or `node_js.svg`)
- `powerpoint.svg` (not `PowerPoint.svg` or `ppt.svg`)

### Step 2: Add Color Configuration

Update `techColors.js` in this folder:

```javascript
export const techColors = {
  // ... existing colors

  PowerPoint: {
    text: "PowerPoint", // Display name in bubble
    textColor: "#fff", // Text color (use "#fff" or "#000")
    bgColor1: "#D24726", // Gradient start color (brand primary)
    bgColor2: "#A5451E", // Gradient end color (brand secondary)
  },
};
```

**Finding Brand Colors:**

- Visit official website or brand guidelines
- Use tools like [Brand Colors](https://brandcolors.net/)
- For gradients, use primary color as `bgColor1` and a darker/lighter shade as `bgColor2`

### Step 3a: For Education Page Skills

Update `client/src/components/Education/SkillItem.js`:

```javascript
// 1. Add import at top
import powerpointIcon from "../../assets/techIcons/powerpoint.svg";

// 2. Add to skillIcons mapping (around line 21)
const skillIcons = {
  C: cIcon,
  "C++": cppIcon,
  // ... existing icons
  PowerPoint: powerpointIcon, // Key must match skill name in educationData.js
};
```

Then update `client/src/components/Education/educationData.js`:

```javascript
{
  name: "PowerPoint",  // Must match key in skillIcons and techColors
  proficiency: 85,
  githubRepo: "https://github.com/yourusername/powerpoint-project"
}
```

### Step 3b: For Project Page Tech

Update project data file (e.g., `client/src/components/Projects/data/project1/data.js`):

```javascript
// 1. Add import at top
import powerpointIcon from "../../../../assets/techIcons/powerpoint.svg";

// 2. Add to technologies array
const project1 = {
  // ... other fields
  technologies: [
    { name: "PowerPoint", icon: powerpointIcon },
    //    ↑ Must match key in techColors.js
  ],
};
```

## 🔗 Critical Connection: Name Matching

**The `name` field is the connection point between all systems:**

```
technologies: [{ name: "PowerPoint", icon: powerpointIcon }]
                       ↓
              techColors["PowerPoint"]
                       ↓
              { text: "PowerPoint", textColor: "#fff", ... }
```

### ✅ Correct Setup

```javascript
// project1/data.js
{ name: "PowerPoint", icon: powerpointIcon }

// techColors.js
"PowerPoint": { text: "PowerPoint", ... }

// Result: Shows PowerPoint icon + "PowerPoint" bubble ✓
```

### ❌ Common Mistakes

```javascript
// Different casing
{ name: "powerpoint", icon: powerpointIcon }  // Won't find "PowerPoint" in techColors
"PowerPoint": { ... }

// Typo in name
{ name: "PowerPont", icon: powerpointIcon }   // Won't find color config
"PowerPoint": { ... }

// Wrong icon variable
{ name: "PowerPoint", icon: reactIcon }       // Shows React icon but "PowerPoint" bubble
```

## 🎨 Choosing Colors

### Text Color (`textColor`)

- Use `"#fff"` (white) for dark backgrounds
- Use `"#000"` (black) for light backgrounds
- Test visibility: text should be clearly readable on the gradient

### Gradient Colors (`bgColor1`, `bgColor2`)

**Light Background (yellow, cyan, light blue):**

```javascript
JavaScript: {
  textColor: "#000",  // Black text
  bgColor1: "#F7DF1E",
  bgColor2: "#FFE66D",
}
```

**Dark Background (blue, purple, red):**

```javascript
Python: {
  textColor: "#fff",  // White text
  bgColor1: "#3776AB",
  bgColor2: "#FFD43B",
}
```

### Gradient Direction

- `bgColor1` → `bgColor2` creates left-to-right gradient
- Use complementary colors for smooth transition
- Avoid high contrast between gradient colors

## 🔍 Testing Your Setup

1. **Check icon displays correctly:**

   - Navigate to Education or Projects page
   - Icon should load and display properly

2. **Check bubble effect:**

   - Hover over the icon
   - Verify correct text appears (not "Tech")
   - Verify colors match your configuration

3. **Check fallback:**
   - If no icon exists, initials should show (e.g., "PP" for PowerPoint)
   - Hover should still show correct bubble text

## 🛠️ Troubleshooting

### Icon doesn't show

- ✓ Check file path: `client/src/assets/techIcons/youricon.svg`
- ✓ Check import path: `../../../../assets/techIcons/youricon.svg`
- ✓ Restart dev server

### Bubble shows "Tech" instead of tech name

- ✓ Check name matches exactly in techColors.js (case-sensitive)
- ✓ Verify techColors.js exports the new tech
- ✓ Check for typos in name field

### Wrong colors appear

- ✓ Verify hex color format: `#RRGGBB` (6 characters)
- ✓ Check textColor is either `#fff` or `#000`
- ✓ Clear browser cache

### Icon shows but wrong icon appears

- ✓ Check import variable name matches usage
- ✓ Verify correct icon file is imported
- ✓ Check for duplicate variable names

## 📋 Quick Reference Checklist

Adding a new tech? Follow this checklist:

- [ ] Icon SVG added to `client/src/assets/techIcons/`
- [ ] Colors added to `techColors.js` with exact name match
- [ ] Icon imported in component file
- [ ] Name matches in all three places: techColors, import, and usage
- [ ] Tested: Icon displays correctly
- [ ] Tested: Hover shows correct bubble text and colors
- [ ] Git commit with clear message

## 🎯 Best Practices

1. **Use One Icon Folder:** Always import from `assets/techIcons/` - never duplicate icons
2. **Consistent Naming:** Use the official brand name as key (e.g., "Node.js" not "NodeJS")
3. **Brand Colors:** Use official brand colors for authenticity
4. **Test on Hover:** Always verify bubble text matches icon before committing
5. **Document Additions:** Update this file's tech list when adding popular technologies

## 📦 Currently Configured Technologies

### Languages (8)

- C, C++, CSS, Java, JavaScript, Python, C#, TypeScript

### Frameworks & Libraries (8)

- React, Node.js, React Native, Redux, Vue.js, Next.js, Express, Tailwind, Chart.js

### Databases (4)

- SQL, MongoDB, PostgreSQL, Firebase

### Tools & Others (6)

- GraphQL, Docker, Unity, Blender, Photoshop, OpenWeather API

### Default Fallback

- Anything not configured shows "Tech" with purple gradient

## 🚀 Performance Notes

- **Lazy Loading:** Bubble effect module loads only on first hover (not on page load)
- **Memory Efficient:** Bubbles auto-remove after animation completes
- **No Dependencies:** Pure CSS animations with minimal JavaScript

## 📝 Example: Adding "Figma"

```javascript
// 1. Add figma.svg to client/src/assets/techIcons/

// 2. Add to techColors.js
"Figma": {
  text: "Figma",
  textColor: "#fff",
  bgColor1: "#F24E1E",  // Figma brand orange
  bgColor2: "#A259FF",  // Figma brand purple
},

// 3. In project1/data.js
import figmaIcon from "../../../../assets/techIcons/figma.svg";

technologies: [
  { name: "Figma", icon: figmaIcon },
],
```

---

**Need Help?** Check the existing implementations in `SkillItem.js` or any `project*/data.js` file for reference.
