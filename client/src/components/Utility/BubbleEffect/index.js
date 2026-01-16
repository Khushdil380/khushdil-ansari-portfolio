import { getTechColor } from "./techColors";
import "./BubbleEffect.css";

// Create bubble container if it doesn't exist
const ensureBubbleContainer = () => {
  let container = document.getElementById("tech-bubble-container");
  if (!container) {
    container = document.createElement("div");
    container.id = "tech-bubble-container";
    container.className = "tech-bubble-container";
    document.body.appendChild(container);
  }
  return container;
};

// Create bubble effect with gradient colors
export const createTechBubble = (techName) => {
  const container = ensureBubbleContainer();
  const bubbleCount = Math.floor(Math.random() * 3) + 18; // 18-20 bubbles
  const colorConfig = getTechColor(techName);

  for (let i = 0; i < bubbleCount; i++) {
    const bubble = document.createElement("div");
    const randomAnim = Math.floor(Math.random() * 5) + 1;
    const delay = Math.random() * 400;

    bubble.className = `tech-bubble anim-${randomAnim}`;
    bubble.textContent = colorConfig.text;

    // Set CSS variables for gradient and text color
    bubble.style.setProperty("--bubble-bg1", colorConfig.bgColor1);
    bubble.style.setProperty("--bubble-bg2", colorConfig.bgColor2);
    bubble.style.setProperty("--bubble-text-color", colorConfig.textColor);

    // Random position
    bubble.style.left = `${Math.random() * window.innerWidth}px`;
    bubble.style.top = `${Math.random() * window.innerHeight}px`;
    bubble.style.transform = "translateX(-50%)";
    bubble.style.animationDelay = `${delay}ms`;

    container.appendChild(bubble);

    setTimeout(() => bubble.remove(), 1500 + randomAnim * 100 + delay);
  }
};
