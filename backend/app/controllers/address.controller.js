const db = require("../models");
const Citys = require("../models/citys.model");
const Districts = require("../models/districts.model");
const Streets = require("../models/streets.model");

exports.getAllCity = async (req, res) => {
  let citys = await Citys.find();
  res.json({
    citys: citys,
  });
};
exports.getAllDistricts = async (req, res) => {
  let districts = await Districts.find();
  res.json({
    districts: districts,
  });
};
exports.getAllStreets = async (req, res) => {
  let streets = await Streets.find();
  res.json({
    streets: streets,
  });
};
exports.getDistrictsByCity = async (req, res) => {
  let districts = await Districts.find({ parent_code: req.query.id });
  res.json({
    districts: districts,
  });
};
exports.getStreetByDistricts = async (req, res) => {
  let streets = await Streets.find({ parent_code: req.query.id });
  res.json({
    streets: streets,
  });
};
