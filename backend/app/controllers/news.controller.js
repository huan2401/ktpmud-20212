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
    // news.price = price;
    news.acreage = acreage;
    news.typehome = typehome;
    news.bedroom = bedroom;
    news.toilet = toilet;
    // news.kitchenroom = kitchenroom;
    news.createAt = createAt || Date.now();
    news.updateAt = updateAt || Date.now();
    // news.img_infor = img_infor;
    news.img_infor = "test";
    news.userId = currentUser._id;
    // for (key in utilities) {
    //   news.utilities[`${key}`] = utilities[`${key}`];
    // }
    for (key in news.utilities) {
      const keyNew = key.split("_")[1];
      news.utilities[`${key}`] = utilities.includes(keyNew);
    }
    for (key in address) {
      console.log("key", address[`${key}`]);
      news.address[`${key}`] = address[`${key}`];
    }
    for (key in price) {
      news.price[`${key}`] = price[`${key}`];
    }
    for (key in kitchenroom) {
      news.kitchenroom[`${key}`] = kitchenroom[`${key}`];
    }

    console.log("news create", news);

    await news.save((err) => {
      if (err) {
        console.log("lỗi đăng tin", err);
        return res.json({
          message: "Lỗi không thể đăng tin!! Vui lòng kiểm tra lại",
          result: false,
        });
      }
      res.json({
        message: "Đăng tin thành công",
        result: true,
        userId: req.userId,
      });
    });
  } catch (error) {}
};

exports.getAllNews = async (req, res) => {
  let news = await News.findOne();
  res.json({
    news: news,
  });
};

exports.getNewsByUser = async (req, res) => {
  let newsByUser = await News.findOne({ userId: req.userId }).exec();
  res.json({
    newsByUser: newsByUser,
  });
};
