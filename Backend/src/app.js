const express = require("express");
const worklistRoute =require("../src/routers/worklist")
const aboutRoute =require("../src/routers/about")

const app = express();
const port = process.env.PORT || 5100;

app.use(worklistRoute);
app.use(aboutRoute);

// listen to port 5100
app.listen(port, () => {
    console.log(`Connection is live at port ${port}`);
});
