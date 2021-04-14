
const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,

    },

    email: {
        type: String,
        required: true,
    },

    subject: {
        type: String,
        required: true,
    },

    message: {
        type: String,
        required: true,
    },

});

// we are creating a new collectuion
const Contact = new mongoose.model("contact", contactSchema);
module.exports = Contact;