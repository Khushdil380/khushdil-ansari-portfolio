const path = require("path");
const fs = require("fs");

// Email image attachments configuration
const getEmailAttachments = () => {
  // Try multiple paths for compatibility with both local and Vercel
  let imagePath = path.join(__dirname, "images");

  // If running on Vercel serverless, try alternative path
  if (!fs.existsSync(imagePath)) {
    imagePath = path.join(process.cwd(), "templates", "emails", "images");
  }

  // If still not found, try from root
  if (!fs.existsSync(imagePath)) {
    imagePath = path.join(
      process.cwd(),
      "server",
      "templates",
      "emails",
      "images"
    );
  }

  console.log("Image path resolved to:", imagePath);
  console.log("Image path exists:", fs.existsSync(imagePath));

  return [
    {
      filename: "heart.gif",
      path: path.join(imagePath, "heart.gif"),
      cid: "heart",
    },
    {
      filename: "messaging.gif",
      path: path.join(imagePath, "messaging.gif"),
      cid: "message",
    },
    {
      filename: "profile.png",
      path: path.join(imagePath, "profile.png"),
      cid: "profile",
    },
    {
      filename: "quote-start.png",
      path: path.join(imagePath, "quote-start.png"),
      cid: "quotestart",
    },
    {
      filename: "quote-end.png",
      path: path.join(imagePath, "quote-end.png"),
      cid: "quoteend",
    },
    {
      filename: "hello.gif",
      path: path.join(imagePath, "hello.gif"),
      cid: "hello",
    },
    {
      filename: "fullstack-dev.gif",
      path: path.join(imagePath, "fullstack-dev.gif"),
      cid: "service1",
    },
    {
      filename: "android-dev.gif",
      path: path.join(imagePath, "android-dev.gif"),
      cid: "service2",
    },
    {
      filename: "uiux-dev.gif",
      path: path.join(imagePath, "uiux-dev.gif"),
      cid: "service3",
    },
    {
      filename: "machine-learning.gif",
      path: path.join(imagePath, "machine-learning.gif"),
      cid: "service4",
    },
    {
      filename: "teaching.gif",
      path: path.join(imagePath, "teaching.gif"),
      cid: "service5",
    },
    {
      filename: "nav-projects.png",
      path: path.join(imagePath, "nav-projects.png"),
      cid: "nav1",
    },
    {
      filename: "nav-skills.png",
      path: path.join(imagePath, "nav-skills.png"),
      cid: "nav2",
    },
    {
      filename: "nav-education.png",
      path: path.join(imagePath, "nav-education.png"),
      cid: "nav3",
    },
    {
      filename: "nav-services.png",
      path: path.join(imagePath, "nav-services.png"),
      cid: "nav4",
    },
    {
      filename: "nav-blog.png",
      path: path.join(imagePath, "nav-blog.png"),
      cid: "nav5",
    },
    {
      filename: "portfolio-button.gif",
      path: path.join(imagePath, "portfolio-button.gif"),
      cid: "portfolio",
    },
    {
      filename: "social-github.png",
      path: path.join(imagePath, "social-github.png"),
      cid: "social1",
    },
    {
      filename: "social-linkedin.png",
      path: path.join(imagePath, "social-linkedin.png"),
      cid: "social2",
    },
    {
      filename: "social-medium.png",
      path: path.join(imagePath, "social-medium.png"),
      cid: "social3",
    },
    {
      filename: "social-quora.png",
      path: path.join(imagePath, "social-quora.png"),
      cid: "social4",
    },
    {
      filename: "social-x.png",
      path: path.join(imagePath, "social-x.png"),
      cid: "social5",
    },
    {
      filename: "social-whatsapp.png",
      path: path.join(imagePath, "social-whatsapp.png"),
      cid: "social6",
    },
  ];
};

module.exports = { getEmailAttachments };
