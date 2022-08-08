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
exports.getCityByCode = async (req, res) => {
  let cityByCode = await Citys.findOne({ code: req.query.id });
  res.json({
    cityByCode: cityByCode,
  });
};
exports.getDistrictByCode = async (req, res) => {
  let districtByCode = await Districts.findOne({ code: req.query.id });
  res.json({
    districtByCode: districtByCode,
  });
};
exports.getStreetByCode = async (req, res) => {
  let streetByCode = await Streets.findOne({ code: req.query.id });
  res.json({
    streetByCode: streetByCode,
  });
};
