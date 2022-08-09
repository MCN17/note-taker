const fs = require("fs");
const router = require("express").Router();
const path = require("path");



router.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../../db/db.json"));
    
  });

  router.get("/notes/:id", (req, res) => {
    let notesInFile = JSON.parse(fs.readFileSync("../../db/db.json", "utf8"))
    res.json(notesInFile[Number(req.params.id)]);
    
  });


  router.post("/notes", (req, res) => {
    // set id based on what the next index of the array will be
    
    let notesInFile = JSON.parse(fs.readFileSync(
        // path.join(__dirname, "../../db/db.json"), "utf8"));
        path.join(__dirname, "../../db/db.json"), "utf8"));
    req.body.id = notesInFile.length.toString();
    
    notesInFile.push(req.body);
    fs.writeFileSync("db/db.json", JSON.stringify(notesInFile));
      res.json(notesInFile);
  });



  module.exports = router;