const port = process.env.PORT || 5001;

const express = require('express');

const path = require('path');

const app = express();
app.use(express.urlencoded({ extended: true }));
// http://localhost:5001/form should return a form with input elements for username, email, and submit button

// http://localhost:5001/submit should return all the data the user entered

app.get('/form', (req, res) => {
  res.status(200);
  res.set({ 'Content-Type': 'text/html' });
  res.sendFile(path.join(__dirname, 'form.html'));
});

app.post('/submit', (req, res) => {
  const {
    username, email, comments, newsletter,
  } = req.body;
  res.status(200);
  res.set({ 'Content-Type': 'text/html' });
  res.send(`
    <h1>Form Submission</h1>
    <p>Username: ${username}</p>
    <p>Email: ${email}</p>
    <p>Comments: ${comments}</p>
    <p>Newsletter: ${newsletter ? 'Yes, IT WILL BE AWESOME' : 'No... But, why not?'}</p>
  `);
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running on http://localhost:${port}`);
});
