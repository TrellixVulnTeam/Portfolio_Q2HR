const express = require("express");
require("../db/conn")
const Contact = require("../models/Contact");
const app = express();

// for json parsar
app.use(express.json());

// this piece of code will handle contact Post request
app.post("/contact", async (req, res) => {
    try {
        const addrequest = new Contact(req.body)
        console.log(req.body);
        const insertData = await addrequest.save();
        res.status(200).send(insertData);
    }
    catch (e) {
        res.send(e);
    }
})


module.exports = app;