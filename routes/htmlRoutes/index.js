const path = require("path");
const router = require("express").Router();

//  It brings us to the root route of the server. This is the route used to create a homepage for a server.
//  responds with an HTML page to display in the browser.
// Uses res.sendFile() and all we have to do is tell them where to find the file we want our server to read and send back to the client.
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/index.html"));
});

 // This route will take client to /notes.
router.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../../public/notes.html"));
  });

  // Wildcard route
  // any route that wasn't previously defined will fall under this request and will receive the homepage as the response
  router.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../../public/index.html"));
  });

  module.exports = router;


  // The order of your routes matters! The * route should always come last. Otherwise, it will take precedence over named routes, and you won't see what you expect to see on routes like /notes.