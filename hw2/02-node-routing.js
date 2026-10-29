const http = require('http');

const port = process.env.PORT || 5001;

// http://localhost:5001/welcome should return a status code 200 with a welcome message of your choice in html format

// http://localhost:5001/redirect should redirect the request to '/redirected' by using 302 as the status code / the redirected page should return a redirected message of your choice

// http://localhost:5001/cache should return 'this resource was cached' in html format and set the cache max age to a day

// http://localhost:5001/cookie should return 'cookies… yummm' in plain text and set 'hello=world' as a cookie

// For other routes, such as http://localhost:5001/other, this exercise should return a status code 404 with '404 - page not found' in html format

const server = http.createServer((req, res) => {
  const url = new URL(req.url, 'http://localhost');
  const path = url.pathname;

  if (path === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>Welcome to the homepage!</h1>');
    return;
  }
  if (path === '/welcome') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>Oh hey, you found the front door. Uhhhh Welcome!</h1>');
    return;
  }
  if (path === '/redirect') {
    res.writeHead(302, { Location: '/redirected' });
    res.end();
    return;
  }
  if (path === '/redirected') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>"Gator turns vans upside down like they\'re in a crazy washing machine!" - Will Ferrell in The Other Guys... You have been redirected </h1>');
    return;
  }
  if (path === '/cache') {
    res.writeHead(200, { 'Content-Type': 'text/html', 'Cache-Control': 'max-age=86400' });
    res.end('<h1>I find value in this! Or I am too lazy to look it up later. SO TOO THE CACHE IT GOES!</h1>');
    return;
  }
  if (path === '/cookie') {
    res.writeHead(200, { 'Content-Type': 'text/plain', 'Set-Cookie': 'hello=world' });
    res.end('SallysBakingAddiction is my newest Baking cookbook. She has a good website. Anyways that is all to say that cookies have been baked here!');
    return;
  }

  res.writeHead(404, { 'Content-Type': 'text/html' });
  res.end('<h1>404 - page not found</h1>');
});

server.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running at http://localhost:${port}`);
});
