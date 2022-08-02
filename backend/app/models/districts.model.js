const mongoose = require("mongoose");

const Districts = mongoose.model(
  "District",
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
  })
);

module.exports = Districts;
