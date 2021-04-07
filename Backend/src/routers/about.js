const express = require("express");
require("../db/conn")
const About = require("../models/About");
const app = express();

// for json parsar
app.use(express.json());

// this piece of code will handle about Post request
app.post("/about", async (req, res) => {
    try {
        const addingabout = new About(req.body)
        console.log(req.body);
        const insertData = await addingabout.save();
        res.status(200).send(insertData);
    }
    catch (e) {
        res.send(e);
    }
})

// this piece of code will handle about Get request
app.get("/about", async (req, res) => {

    try {
        const getabout = await About.find({})
        res.send(getabout);

    }
    catch (e) {
        res.send(e);
    }
})

module.exports = app;