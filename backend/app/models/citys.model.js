const mongoose = require("mongoose");

const Citys = mongoose.model(
  "City",
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
  })
);

module.exports = Citys;
