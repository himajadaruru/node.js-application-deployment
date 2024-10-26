// app.js
const express = require('express');
const app = express();

// Serve static files from the "public" directory
app.use(express.static('public'));

// Basic route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
