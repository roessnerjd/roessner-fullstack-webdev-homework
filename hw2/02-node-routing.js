const http = require("http");
const port = process.env.PORT || 5001;

// http://localhost:5001/welcome should return a status code 200 with a welcome message of your choice in html format

// http://localhost:5001/redirect should redirect the request to '/redirected' by using 302 as the status code / the redirected page should return a redirected message of your choice

// http://localhost:5001/cache should return 'this resource was cached' in html format and set the cache max age to a day

// http://localhost:5001/cookie should return 'cookies… yummm' in plain text and set 'hello=world' as a cookie

// For other routes, such as http://localhost:5001/other, this exercise should return a status code 404 with '404 - page not found' in html format

/*
Notes from assignment: 

Use file 02-node-routing.js and run this file with the following command: node 02-node-routing.js
- Open localhost to view the web page.
You must use Node.js only for this exercise.
Create each of the routes specified in the file:
- /welcome → return status code 200 and write your own welcome message for the user
- /redirect → redirect the request to '/redirected' by using 302 as the status code / the redirected page should return a redirected message of your choice
- /cache → return 'this resource was cached' in html format and set the cache max age to a day
- /cookie → return 'cookies… yummm' in plain text and set 'hello=world' as a cookie
- return status code 404 and a custom 404 message for all other routes

*/

// create server
const server = http.createServer((req, res) => {
  const routes = [
    "welcome",
    "redirect",
    "redirected",
    "cache",
    "cookie",
    "other",
  ];

  // welcome page w/ message
  if (req.url === "/welcome") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>Welcome to my website!</h1>");

    // redirect user to different page
  } else if (req.url === "/redirect") {
    res.writeHead(302, { Location: "/redirected" });
    res.end();

    // redirected page w/ message
  } else if (req.url === "/redirected") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>You have been redirected!</h1>");

    // cache page
  } else if (req.url === "/cache") {
    res.writeHead(200, {
      "Content-Type": "text/html",
      "Cache-Control": "max-age=86400",
    });
    res.end("<h1>this resource was cached</h1>");

    // set cookie w/ cookie message
  } else if (req.url === "/cookie") {
    res.writeHead(200, {
      "Content-Type": "text/plain",
      "Set-Cookie": "hello=world",
    });
    res.end("cookie... yummm");

    // error message for unkown pages
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("<h1>404 - page not found</h1>");
  }
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
