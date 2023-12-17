// Install and use the request library to make the HTTP request (We know this library is deprecated but it is still ok to use for our purposes.)
// Use Node's fs (file system) module to write the file
// Use the callback based approach we've been learning so far
// Do not use the pipe function
// Do not use synchronous functions (see warning above)

const request = require("request");
request("http://www.example.edu/", (error, response, body) => {
  console.log("error:", error); // Print the error if one occurred
  console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
  console.log("body:", body); // Print the HTML for the Google homepage.

  const fs = require("fs");
  const content = body;
  fs.writeFile(
    "/Users/yiva/Documents/lighthouse/page-fetcher/text.txt",
    content,
    (err) => {
      if (err) {
        console.error(err);
      }
      // file written successfully
    }
  );
});
