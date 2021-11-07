let dbList = require("../db/db.json");
const fs = require('fs');


function reorderDB(dbArray){
  let newNote = [];
  for (let i = 0; i < dbArray.length; i++) {
    let reorderedNewNote = dbArray[i];
    reorderedNewNote.id = i + 1;
    newNote[i] = reorderedNewNote;
  }
  return newNote;
}

function copyDB(dbArray){
  fs.writeFile('./db/db.json', JSON.stringify(dbArray), function (err) {
    if (err) throw err;
  });
}


module.exports = function(app) {
  // API GET request route
  app.get("/api/notes", function(req, res) {
    res.json(dbList);
  });

 
  app.post("/api/notes", function(req, res) {
    //newNote from request
    const newNote = req.body;
    dbList.push(newNote);
    dbList = reorderDB(dbList);
    copyDB(dbList);
    res.json(newNote);
  });

  //API DELETE note
  app.delete("/api/notes/:id", function(req, res) {
    const deleteThisNote = req.params.id;
    const deletedNote = dbList.splice(deleteThisNote-1, 1);
   
    dbList = reorderDB(dbList);
    
    copyDB(dbList);

    res.json(deletedNote);
  });
};
