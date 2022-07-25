const News = require("../models/news.model");

exports.createNews = async (req, res) => {
  try {
    let news = new News();
    let {
      name,
      title,
      description,
      price,
      acreage,
      typehome,
      bedroom,
      toilet,
      kitchenroom,
      datetime_create,
      date_now,
      datetime_finish,
      utilities,
      img_infor,
      address,
      userId,
    } = req.body;
    news.name = name;
    news.title = title;
    news.description = description;
    news.price = price;
    news.acreage = acreage;
    news.typehome = typehome;
    news.bedroom = bedroom;
    news.toilet = toilet;
    news.kitchenroom = kitchenroom;
    news.datetime_create = datetime_create;
    news.date_now = date_now;
    news.datetime_finish = datetime_finish;
    // news.utilities = { ...utilities };
    news.img_infor = img_infor;
    // news.address = { ...address };
    news.userId = userId;
    for (key in utilities) {
      news.utilities[`${key}`] = utilities[`${key}`];
    }
    for (key in address) {
      news.address[`${key}`] = address[`${key}`];
    }
    console.log("news", news);
  } catch (error) {}
};
