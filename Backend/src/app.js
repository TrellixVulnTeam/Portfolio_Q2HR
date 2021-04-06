const express = require("express");
require("../src/db/conn")
const WorksList = require("../src/models/Works");
const app = express();
const port = process.env.PORT || 5100;

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


app.get("/worklist", async (req, res) => {
    res.send("going well man");
});

app.listen(port, () => {
    console.log(`Connection is live at port ${port}`);
});