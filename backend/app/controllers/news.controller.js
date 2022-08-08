const News = require("../models/news.model");
const db = require("../models");
const mongoose = require("mongoose");
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
    // news.userId = req.userId;
    news.userId = mongoose.Types.ObjectId(req.userId);
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
  let news = await News.find();
  res.json({
    news: news,
  });
};

exports.getNewsByUser = async (req, res) => {
  let newsByUser = await News.find({ userId: req.query.id }).exec();
  res.json({
    newsByUser: newsByUser,
  });
};

exports.getNewsById = async (req, res) => {
  let newsById = await News.findOne({ _id: req.query.id }).exec();
  res.json({
    newsById: newsById,
  });
};

exports.getUserFromNews = async (req, res) => {
  console.log("id user news", req.query.id);
  let newsById = await News.findOne({ _id: req.query.id }).exec();

  let userFromNews = await User.findOne({ _id: newsById.userId }).exec();

  res.json({
    userFromNews: userFromNews,
  });
};
