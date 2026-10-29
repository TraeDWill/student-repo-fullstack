const express = require('express');

const app = express();
const port = process.env.PORT || 5001;

// http://localhost:5001/welcome should return a status code 200 with a welcome message of your choice in html format

// http://localhost:5001/redirect should redirect the request to '/redirected' by using 302 as the status code / the redirected page should return a redirected message of your choice

// http://localhost:5001/cache should return 'this resource was cached' in html format and set the cache max age to a day

// http://localhost:5001/cookie should return 'cookies… yummm' in plain text and set 'hello=world' as a cookie

// For other routes, such as http://localhost:5001/other, this exercise should return a status code 404 with '404 - page not found' in html format

app.get('/', (req, res) => {
  res.status(200);
  res.set({ 'Content-Type': 'text/html' });
  res.send('<h1>Express Routing Exercise(Kinda cool. Also must make big text)</h1>');
});

app.get('/welcome', (req, res) => {
  res.status(200);
  res.set({ 'Content-Type': 'text/html' });
  res.send('<h1>Oh hey, you found the front door. Uhhhh Welcome!</h1>');
});

app.get('/redirect', (req, res) => {
  res.redirect(302, '/redirected');
});

app.get('/redirected', (req, res) => {
  res.status(200);
  res.set({ 'Content-Type': 'text/html' });
  res.send('<h1>"Gator turns vans upside down like they\'re in a crazy washing machine!" - Will Ferrell in The Other Guys... You have been redirected </h1>');
});

app.get('/cache', (req, res) => {
  res.status(200);
  res.set({ 'Content-Type': 'text/html', 'Cache-Control': 'max-age=86400' });
  res.send('<h1>I find value in this! Or I am too lazy to look it up later. SO TOO THE CACHE IT GOES!</h1>');
});

app.get('/cookie', (req, res) => {
  res.status(200);
  res.set({ 'Content-Type': 'text/plain', 'Set-Cookie': 'hello=world' });
  res.send('<h1>SallysBakingAddiction is my newest Baking cookbook. She has a good website. Anyways that is all to say that cookies have been baked here!</h1>');
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running at http://localhost:${port}`);
});
