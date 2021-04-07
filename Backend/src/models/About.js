
const mongoose = require("mongoose");

const aboutSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true,

    },

    about: {
        type: String,
        required: true,
    },

});

// we are creating a new collectuion
const About = new mongoose.model("about", aboutSchema);
module.exports = About;