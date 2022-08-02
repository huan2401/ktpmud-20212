const mongoose = require("mongoose");

const Streets = mongoose.model(
  "Street",
  new mongoose.Schema({
    code: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    parent_code: {
      type: Number,
      required: true,
    },
    parent_code_city: {
      type: Number,
      required: true,
    },
  })
);

module.exports = Streets;
