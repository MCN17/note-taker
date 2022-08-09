const express = require("express");

const htmlRoutes = require("./routes/htmlRoutes/index");

const apiRoutes = require("./routes/apiRoutes/index");

const PORT = process.env.PORT || 3001;

const app = express();

// Express.js middleware that instructs the server to make certain files readily available.
app.use(express.static('public'));

// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());

app.use('/', htmlRoutes);

app.use("/api", apiRoutes);


app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});

