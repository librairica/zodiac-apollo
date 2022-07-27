const mongoose = require("mongoose");

//Database Model
const contactSchema = new mongoose.Schema({
  ID: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  }
});

const Contact = mongoose.model("Contact", contactSchema);
