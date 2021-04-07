const express = require("express");
require("../db/conn")
const WorksList = require("../models/Works");
const app = express();

// for json parsar
app.use(express.json());

// this piece of code will handle workslist Post request
app.post("/worklist", async (req, res) => {
    try {
        const addingWorksList = new WorksList(req.body)
        console.log(req.body);
        const insertData = await addingWorksList.save();
        res.status(200).send(insertData);
    }
    catch (e) {
        res.send(e);
    }
})

// this piece of code will handle workslist Get request
app.get("/worklist", async (req, res) => {

    try {
        const getWorkLists = await WorksList.find({})
        res.send(getWorkLists);

    }
    catch (e) {
        res.send(e);
    }
})

module.exports = app;