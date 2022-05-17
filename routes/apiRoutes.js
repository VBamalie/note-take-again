const path = require("path");
const router = require("express").Router();
const {readFromFile , writeToFile, readAndAppend} = ("../helpers/helper.js")

router.get('/notes', (req, res)=>{
    console.info("recieved notes")
    readFromFile("../db/db.json").then((data)=> res.json(data))
});

router.post("/", )