const fs = require("fs");
// allows you to declare routes in any file as long as you use the proper middleware.
const router = require("express").Router();
// This is another module built into the Node.js API that provides utilities for working with file and directory paths. 
const path = require("path");


// Client fetches from /notes route
router.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../../db/db.json"));
    
  });

  // Client fetches from /notes/:id route
  router.get("/notes/:id", (req, res) => {
    let notesInFile = JSON.parse(fs.readFileSync("../../db/db.json", "utf8"))
    res.json(notesInFile[Number(req.params.id)]);
    
  });

// A param route must come after the other GET route.

  // Client requests the server to accept data 
  router.post("/notes", (req, res) => {
    // set id based on what the next index of the array will be
    let notesInFile = JSON.parse(fs.readFileSync(
        // path.join(__dirname, "../../db/db.json"), "utf8"));
        path.join(__dirname, "../../db/db.json"), "utf8"));
    req.body.id = notesInFile.length.toString();
    
    // Writes/adds to db.json
    notesInFile.push(req.body);
    fs.writeFileSync("db/db.json", JSON.stringify(notesInFile));
      res.json(notesInFile);
  });



  module.exports = router;