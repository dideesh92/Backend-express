// You are building a logging system for an online store's server. 
// You need to log every incoming request with its method and URL. 
// Implement a middleware function to achieve this, and ensure that it works for all routes.(Easy)

const express = require('express');
const app = express();
const port = 3000;


function logRequests(req, res, next) {
  console.log(`${req.method} ${req.url}`);
  next(); 
}


app.use(logRequests);


app.get('/', (req, res) => {
  res.send('Welcome to the online store!');
});

app.get('/products', (req, res) => {
  res.send('Here are the products.');
});

app.post('/checkout', (req, res) => {
  res.send('Checkout complete.');
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
