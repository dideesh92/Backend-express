// You are developing a book review application where users can submit reviews for different books. Implement middleware to parse JSON bodies and handle a POST request to submit a review. 
// The review data should include the book title and review content.

const express = require('express');
const app = express();
const port = 3000;


app.use(express.json());

let reviews = [];

app.post('/submit-review', (req, res) => {
  const { title, review } = req.body;

   if (!title || !review) {
    return res.status(400).send({ error: 'Title and review content are required.' });
  }
    reviews.push({ title, review });

  res.status(201).send({ message: 'Review submitted successfully!', review: { title, review } });
});

app.get('/reviews', (req, res) => {
  res.send(reviews);
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
