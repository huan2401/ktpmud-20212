const { verifySignUp } = require("../middlewares");
const { authJwt } = require("../middlewares");
const controller = require("../controllers/address.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  app.get("/api/citys", controller.getAllCity);
  app.get("/api/districts", controller.getAllDistricts);
  app.get("/api/streets", controller.getAllStreets);

  app.get("/api/get-districts-by-city", controller.getDistrictsByCity);
  app.get("/api/get-street-by-districts", controller.getStreetByDistricts);
};
