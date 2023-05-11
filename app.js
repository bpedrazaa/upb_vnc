const express = require('express');
const app = express();
require('dotenv').config();

// Serve static files from the public directory
app.use(express.static('public/noVNC/', {
  defaultFiles: ['vnc.html'],
}));

app.get('/', (req, res) => {
  // Redirect to a specific HTML file
  res.redirect('vnc.html');
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port localhost:3000');
});

