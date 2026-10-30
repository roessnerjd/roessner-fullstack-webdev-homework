const express = require("express");
const app = express();
const port = process.env.PORT || 5001;

// http://localhost:5001/welcome should return a status code 200 with a welcome message of your choice in html format

// http://localhost:5001/redirect should redirect the request to '/redirected' by using 302 as the status code / the redirected page should return a redirected message of your choice

// http://localhost:5001/cache should return 'this resource was cached' in html format and set the cache max age to a day

// http://localhost:5001/cookie should return 'cookies… yummm' in plain text and set 'hello=world' as a cookie

// For other routes, such as http://localhost:5001/other, this exercise should return a status code 404 with '404 - page not found' in html format

/*
Notes from assignment: 

Use file 03-express-routing.js and run this file with the following command: node 03-express-routing.js 
- Open localhost to view the web page.
You must use Express.js in this exercise.
- The node_modules should be part of the .gitignore file.
Create each of the routes specified in the file:
- /welcome → return status code 200 and write your own welcome message for the user
- /redirect → redirect the request to '/redirected' by using 302 as the status code / the redirected page should return a redirected message of your choice
- /cache → return 'this resource was cached' in html format and set the cache max age to a day
- /cookie → return 'cookies… yummm' in plain text and set 'hello=world' as a cookie
- return status code 404 and a custom 404 message for all other routes

*/

app.get("/", (req, res) => {
  res.status(200);
  res.set({ "Content-Type": "text/html" });
  res.send("Express Routing Exercise");
});

// welcome page w/ message
app.get("/welcome", (req, res) => {
  res.status(200);
  res.type("html");
  res.send(
    "<h1>Welcome to Jake's website, this is my 3rd one I think ...</h1>",
  );
});

// redirect page
app.get("/redirect", (req, res) => {
  res.redirect(302, "/redirected");
});

// redirected page w/ message
app.get("/redirected", (req, res) => {
  res.status(200);
  res.type("html");
  res.send("<h1>another redirection! @_@</h1>");
});

// cache page for one day
app.get("/cache", (req, res) => {
  res.status(200);
  res.set("Cache-Control", "public, max-age=86400");
  res.type("html");
  res.send("<h1>this resource was cached</h1>");
});

// set cookie w/ message
app.get("/cookie", (req, res) => {
  res.status(200);
  res.cookie("hello", "world");
  res.type("text/plain; charset=utf-8");
  res.send("cookies... yummm");
});

// error message for unkown pages
app.use((req, res) => {
  res.status(404);
  res.type("html");
  res.send("<h1>404 - page not found</h1>");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
