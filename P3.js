
// 4.Create a route that accepts a dynamic parameter for a user's ID and returns a welcome message including the user's ID.
//  Ensure that the route works correctly with various user IDs.

const express = require('express');
const app = express();
const PORT = 3000;

app.get('/user/:id', (req, res) => {
  const userId = req.params.id;
  res.send(`Welcome, user ${userId}!`);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
