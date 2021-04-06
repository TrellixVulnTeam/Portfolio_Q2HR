
const mongoose = require("mongoose");

const workSchema = new mongoose.Schema({

    id: {
        type: Number,
        required: true,
        unique: true,

    },

    title: {
        type: String,
        required: true,

    },

    description: {
        type: String,
        required: true,
    },

    images: {
        type: Array,
        "default": [],
        required: true,
    },

    date: {
        type: String,
        required: true,
    },

    link: {
        type: String,

    },

    technology: {
        type: String,
    }


});

// we are creating a new collectuion
const WorksList = new mongoose.model("WorkList", workSchema);
module.exports = WorksList;