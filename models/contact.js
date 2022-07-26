const { model, Schema } = require("mongoose");

const contactSchema = new Schema({
  firstName: String,
  lastName: String,
  birthday: Date
});

module.exports = model("Contact", contactSchema);

// Note: the id will be generated automatically
