const http = require('http');



  const server = http.createServer((req, res) => {
    // Get the URL path from the request
    const { url } = req;
  
    // Check the requested route and respond accordingly
    if (url === '/movies') {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ message: 'All Movies Data in JSON format from Mongo DB' }));
    } else if (url === '/genres') {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ message: 'All Genres Data in JSON format from Mongo DB' }));
    } else if (url === '/artists') {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ message: 'All Artists Data in JSON format from Mongo DB' }));
    } else {
      // Handle other routes or 404 Not Found
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404 Not Found');
    }
  });
  
  const port = 3000; // Replace with your desired port number
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
