const { verifySignUp } = require("../middlewares");
const { authJwt } = require("../middlewares");
const controller = require("../controllers/news.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  // app.post("/api/news", authJwt.isRenter, controller.createNews);
  app.post(
    "/api/news",
    authJwt.verifyToken,
    authJwt.isRenter,
    controller.createNews
  );

  app.get("/api/news", controller.getAllNews);

  app.get("/api/news-by-user", controller.getNewsByUser);

  app.get("/api/news-by-id", controller.getNewsById);

  app.get("/api/user-from-news", controller.getUserFromNews);
};
