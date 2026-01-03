const apiDevelopmentData = {
  id: 6,
  name: "API Development",
  icon: "🔌",
  shortDescription:
    "Creating robust and scalable APIs for seamless system integrations.",
  fullDescription:
    "RESTful and GraphQL API development with Node.js, Express, and modern frameworks. I design and implement secure, scalable APIs with comprehensive documentation and best practices.",
  totalProjects: 38,
  githubLink: "https://github.com/Khushdil380",
  liveDemoLink: "https://khushdil-ansari-portfolio-frontend.vercel.app/",
  projects: [
    {
      name: "Payment Processing API",
      description:
        "Secure payment gateway integration supporting multiple providers (Stripe, PayPal, Razorpay). Features transaction webhooks, refund handling, and PCI-compliant architecture. Handles 100K+ requests/day.",
      tech: "Node.js, Stripe, JWT, Redis",
      codeLink: "https://github.com/Khushdil380/payment-api",
      demoLink: "https://api.payment-demo.com/docs",
    },
    {
      name: "Social Media GraphQL API",
      description:
        "High-performance GraphQL API for social networking platform. Features posts, comments, likes, real-time notifications, and friend connections. Optimized queries reducing response time by 70%.",
      tech: "GraphQL, MongoDB, Redis, DataLoader",
      codeLink: "https://github.com/Khushdil380/social-graphql",
      demoLink: "https://api.social-demo.com/graphql",
    },
    {
      name: "Real-time Analytics API",
      description:
        "WebSocket-based analytics API providing live metrics and event streaming. Features data aggregation, custom dashboards, and webhook integrations with 99.9% uptime.",
      tech: "Express, PostgreSQL, WebSocket, Bull",
      codeLink: "https://github.com/Khushdil380/analytics-api",
      demoLink: "https://api.analytics-demo.com",
    },
    {
      name: "E-commerce REST API",
      description:
        "Comprehensive e-commerce backend with product catalog, inventory management, order processing, and customer accounts. Rate limiting, caching, and horizontal scaling implemented.",
      tech: "Node.js, MongoDB, Redis, Swagger",
      codeLink: "https://github.com/Khushdil380/ecommerce-api",
      demoLink: "https://api.shop-demo.com/docs",
    },
    {
      name: "AI Content Generation API",
      description:
        "ML-powered API for text generation, image captioning, and sentiment analysis. Integrates OpenAI GPT and custom models with rate limiting and usage tracking.",
      tech: "Python, FastAPI, OpenAI, PostgreSQL",
      codeLink: "https://github.com/Khushdil380/ai-content-api",
      demoLink: "https://api.ai-demo.com/docs",
    },
    {
      name: "Authentication Microservice",
      description:
        "OAuth2/JWT authentication service with SSO support, role-based access control, and multi-factor authentication. Handles user management for multiple applications.",
      tech: "Node.js, Passport.js, PostgreSQL",
      codeLink: "https://github.com/Khushdil380/auth-service",
      demoLink: "https://auth.demo.com/docs",
    },
  ],
  testimonials: [
    {
      client: "CTO, FinTech Startup",
      feedback:
        "Handles 100K+ requests/day with 99.9% uptime. The API architecture is scalable and well-documented with Swagger.",
    },
    {
      client: "Backend Lead, Social App",
      feedback:
        "GraphQL implementation reduced our API calls by 70%. Response time improved from 800ms to 120ms on average.",
    },
  ],
};

export default apiDevelopmentData;
