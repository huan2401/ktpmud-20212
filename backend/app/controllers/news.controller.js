const News = require("../models/news.model");
const db = require("../models");
const { user: User, role: Role, refreshToken: RefreshToken } = db;

exports.createNews = async (req, res) => {
  try {
    currentUser = await User.findOne({ _id: req.userId }).exec();
    let news = new News();
    let {
      title,
      description,
      price,
      acreage,
      typehome,
      bedroom,
      toilet,
      kitchenroom,
      createAt,
      updateAt,
      utilities,
      address,
    } = req.body;
    news.title = title;
    news.description = description;
    news.price = price;
    news.acreage = acreage;
    news.typehome = typehome;
    news.bedroom = bedroom;
    news.toilet = toilet;
    news.kitchenroom = kitchenroom;
    news.createAt = createAt || Date.now();
    news.updateAt = updateAt || Date.now();
    // news.img_infor = img_infor;
    news.img_infor = "test";
    news.userId = currentUser._id;
    for (key in utilities) {
      news.utilities[`${key}`] = utilities[`${key}`];
    }
    for (key in address) {
      news.address[`${key}`] = address[`${key}`];
    }

    await news.save((err) => {
      if (err) {
        return res.json({
          message: "Lỗi không thể đăng tin!! Vui lòng kiểm tra lại",
          result: false,
        });
      }
      res.json({
        message: "Đăng tin thành công",
        result: true,
      });
    });
  } catch (error) {}
};
