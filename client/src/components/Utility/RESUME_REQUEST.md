# Resume Request Components

## 📁 Components

Located in: `components/Utility/`

```
RequestResumeButton.js      # Animated GIF button component
RequestResumeButton.css     # Button styles
RequestResumeModal.js       # Modal form component
RequestResumeModal.css      # Modal styles
```

## 🎯 Features

### RequestResumeButton

- Inline/flexible positioning (can be placed anywhere)
- Animated GIF image from `/public/resume-request.gif`
- Hover scale effect (1.05x on hover)
- Responsive sizing:
  - Desktop: 180px
  - Tablet (≤768px): 150px
  - Mobile (≤480px): 130px

### RequestResumeModal

- Center-aligned modal with backdrop blur (8px)
- Theme-consistent styling (uses ThemeContext)
- Form validation (required fields highlighted)
- API integration ready
- Success/error feedback messages
- Smooth animations (fadeIn + slideUp)
- Auto-close after successful submission (2s delay)
- Click outside to close

### Form Fields

1. **Company Name** (Required)
2. **Receiver Email** (Required, email validation)
3. **Requirement** (Required)
4. **Description** (Optional, textarea)

## 📝 Usage

### Import Components

```javascript
import RequestResumeButton from "../Utility/RequestResumeButton";
import RequestResumeModal from "../Utility/RequestResumeModal";
```

### Basic Implementation

```javascript
import React, { useState } from "react";
import RequestResumeButton from "../Utility/RequestResumeButton";
import RequestResumeModal from "../Utility/RequestResumeModal";

const YourComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      {/* Button can be placed anywhere */}
      <RequestResumeButton onClick={() => setIsModalOpen(true)} />

      {/* Modal */}
      <RequestResumeModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};
```

### Example: Hero Section Integration

```javascript
// Hero/HeroSection.js
<div className="hero-buttons">
  <Button onClick={handleContactClick}>Contact me</Button>
  <Button onClick={handleAboutClick} variant="secondary">
    About me
  </Button>
</div>;

{
  /* Resume request button below hero buttons */
}
<div className="hero-resume-request">
  <RequestResumeButton onClick={() => setIsResumeModalOpen(true)} />
</div>;

{
  /* Modal at the end */
}
<RequestResumeModal
  isOpen={isResumeModalOpen}
  onClose={() => setIsResumeModalOpen(false)}
/>;
```

## 🔌 Backend Integration

### API Endpoint Required

```
POST /api/contact/resume-request
```

### Request Body

```json
{
  "companyName": "string",
  "receiverEmail": "string (email)",
  "requirement": "string",
  "description": "string (optional)"
}
```

### Response

Success (200):

```json
{
  "message": "Resume request submitted successfully"
}
```

Error (400/500):

```json
{
  "error": "Error message"
}
```

### Backend Implementation Example

In `server/routes/contact.js`:

```javascript
router.post("/resume-request", async (req, res) => {
  try {
    const { companyName, receiverEmail, requirement, description } = req.body;

    // Validation
    if (!companyName || !receiverEmail || !requirement) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(receiverEmail)) {
      return res.status(400).json({ error: "Invalid email format" });
    }

    // Send email notification to portfolio owner
    const emailContent = `
      New Resume Request:
      
      Company: ${companyName}
      Receiver Email: ${receiverEmail}
      Requirement: ${requirement}
      ${description ? `Description: ${description}` : ""}
    `;

    // Use your email service here
    await sendEmail({
      to: process.env.PORTFOLIO_EMAIL,
      subject: `Resume Request from ${companyName}`,
      text: emailContent,
    });

    res.status(200).json({ message: "Resume request submitted successfully" });
  } catch (error) {
    console.error("Error processing resume request:", error);
    res.status(500).json({ error: "Failed to submit resume request" });
  }
});
```

## 🎨 Customization

### Button Styling

Edit `RequestResumeButton.css` to customize:

- Button size
- Hover effects
- Responsive breakpoints
- Positioning (if needed for specific use cases)

### Modal Styling

Edit `RequestResumeModal.css` to customize:

- Modal dimensions
- Colors (uses CSS variables from theme)
- Animations
- Backdrop blur intensity
- Form field styling

### Theme Variables Used

```css
--secondary-bg /* Modal background */
--heading-color /* Title color */
--content-color /* Text and input color */
--accent-color /* Focus states and borders */
```

## 📋 Required Assets

1. **GIF Image**: Place your animated GIF at `/public/resume-request.gif`
   - Recommended size: 180x180px or larger
   - Transparent background works best
   - Animated hover state optional

## ✅ Best Practices

1. **State Management**: Always use `useState` to manage modal open/close state
2. **Accessibility**: Button has `aria-label="Request Resume"` by default
3. **Error Handling**: Form includes built-in validation and error feedback
4. **Performance**: Modal only renders when `isOpen={true}`
5. **Responsive**: Components adapt to all screen sizes automatically

## 🐛 Troubleshooting

### Button not showing?

- Check if GIF exists at `/public/resume-request.gif`
- Verify import paths are correct
- Check browser console for errors

### Modal not opening?

- Verify `isOpen` state is being updated
- Check `onClick` handler is connected properly
- Look for z-index conflicts (modal uses z-index: 2000)

### Form submission failing?

- Ensure backend API endpoint is running
- Check network tab for API errors
- Verify CORS settings allow frontend domain
- Check backend validation rules match frontend

## 🎯 Current Implementation

Currently integrated in:

- **Hero Section** (`Hero/HeroSection.js`): Button appears below main hero buttons

Can be easily added to:

- Contact page
- About page footer
- Service pages
- Project detail pages
- Any other component where resume requests make sense
