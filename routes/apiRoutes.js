const path = require("path");
const router = require("express").Router();
const {readFromFile , writeToFile, readAndAppend} = require("../helpers/helper.js")

router.get('/notes', (req, res)=>{
    console.info("recieved notes")
    readFromFile("./db/db.json").then((data)=> res.json(JSON.parse(data)));
});

router.post("/")

module.exports = router