const { verifySignUp, authJwt } = require("../middlewares");
const controller = require("../controllers/auth.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post(
    "/api/auth/signup",
    [
      verifySignUp.checkDuplicateUsernameOrEmail,
      // verifySignUp.checkRolesExisted,
    ],
    controller.signup
  );

  app.post("/api/auth/signin", controller.signin);

  app.post("/api/auth/forgot", controller.forgotPassword);

  app.post("/api/auth/reset", authJwt.verifyToken, controller.resetPassword);

  app.post("/api/auth/updateProfile", authJwt.verifyToken, controller.updateProfile);

  app.post("/api/auth/refreshtoken", controller.refreshToken);

  app.get(
    "/api/auth/signUpRenter",
    authJwt.verifyToken,
    controller.signUpRenter
  );

  app.get("/api/user-by-id", controller.getUserById);

};
