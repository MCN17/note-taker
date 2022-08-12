const express = require("express");

// The require() statements will read the index.js files in each of the directories indicated
// with require(), the index.js file will be the default file read if no other file is provided
const apiRoutes = require("./routes/apiRoutes/index");
const htmlRoutes = require("./routes/htmlRoutes/index");



const PORT = process.env.PORT || 3001;

const app = express();

// Middleware - Express.js middleware that instructs the server to make certain files readily available.
app.use(express.static('public'));
// Middleware - parse incoming string or array data - takes incoming POST data and converts it to key/value pairings that can be accessed in the req.body object.
// The {extended: true} option set inside the method call informs our server that there may be sub-array data nested in it as well, so it needs to look as deep into the POST data as possible to parse all of the data correctly.
app.use(express.urlencoded({ extended: true }));
// Middleware - parse incoming JSON data
// The express.json() method we used takes incoming POST data in the form of JSON and parses it into the req.body JavaScript object. Both of the above middleware functions need to be set up every time you create a server that's looking to accept POST data
app.use(express.json());

// This is our way of telling the server that any time a client navigates to <ourhost>/api, the app will use the router we set up in apiRoutes. If / is the endpoint, then the router will serve back our HTML routes.
app.use("/api", apiRoutes);
app.use('/', htmlRoutes);



// Tells the server to listen for requests
app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});

