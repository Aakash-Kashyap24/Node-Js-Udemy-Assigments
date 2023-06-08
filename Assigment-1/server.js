const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const url = req.url;

  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Home Page</title></head>");
    res.write("<body>");
    res.write("<h1>Welcome to the Home Page</h1>");
    res.write("<p>This is the body of the home page.</p>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  }

  if (url === "/users") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>User List</title></head>");
    res.write("<body>");
    res.write("<h1>User List</h1>");
    res.write("<ul>");
    res.write("<li>User 1</li>");
    res.write("<li>User 2</li>");
    res.write("<li>User 3</li>");
    res.write("</ul>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  }

  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>Not Found</title></head>");
  res.write("<body>");
  res.write("<h1>Page Not Found</h1>");
  res.write("</body>");
  res.write("</html>");
  res.end();
});

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
