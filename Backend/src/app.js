const express = require("express");
var cors = require('cors');

const worklistRoute =require("../src/routers/worklist")
const aboutRoute =require("../src/routers/about")
const contactRoute =require("../src/routers/contact")

const app = express();
const port = process.env.PORT || 5100;

app.use(cors());
app.use(worklistRoute);
app.use(aboutRoute);
app.use(contactRoute);

// listen to port 5100
app.listen(port, () => {
    console.log(`Connection is live at port ${port}`);
});
