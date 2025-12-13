const app = require("../server");

// Serverless function wrapper with explicit CORS headers
module.exports = (req, res) => {
  // Set CORS headers explicitly for all requests
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }
  
  // Pass to Express app
  return app(req, res);
};
