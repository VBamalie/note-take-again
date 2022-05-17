const path = require("path");
const router = require("express").Router();
const {readFromFile , writeToFile, readAndAppend} = require("../helpers/helper.js")
const uuid = require("../helpers/uuid")

router.get('/notes', (req, res)=>{
    console.info("recieved notes")
    readFromFile("./db/db.json").then((data)=> res.json(JSON.parse(data)));
});

router.post("/notes", (req, res)=> {
    console.log("adding note....")
    const {title, text} = req.body;
    if (req.body){
        const newNote = {
            title,
            text,
            note_id: uuid()
        }
        readAndAppend(newNote, "./db/db.json");
        res.json("new note added succesfully")
    } else res.error("error adding note")
})

module.exports = router