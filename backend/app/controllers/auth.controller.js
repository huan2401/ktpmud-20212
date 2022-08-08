const config = require("../config/auth.config");
const db = require("../models");
const { user: User, role: Role, refreshToken: RefreshToken } = db;

const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

exports.signup = async (req, res) => {
  const user = new User({
    username: req.body.username,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    gender: req.body.gender,
    // avatar: req.body.avatar,
    avatar: "",
    phone: req.body.phone,
    password: bcrypt.hashSync(req.body.password, 8),
  });
  await user.save((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    if (req.body.roles) {
      Role.find(
        {
          name: { $in: req.body.roles },
        },
        (err, roles) => {
          if (err) {
            res.status(500).send({ message: err });
            return;
          }

          user.roles = roles.map((role) => role._id);
          user.save((err) => {
            if (err) {
              res.status(500).send({ message: err });
              return;
            }

            res.send({ message: "User was registered successfully!" });
          });
        }
      );
    } else {
      Role.findOne({ name: "user" }, (err, role) => {
        if (err) {
          res.status(500).send({ message: err });
          return;
        }

        user.roles = [role._id];
        user.save((err) => {
          if (err) {
            res.status(500).send({ message: err });
            return;
          }

          res.send({ message: "User was registered successfully!" });
        });
      });
    }
  });
};

exports.signin = (req, res) => {
  User.findOne({
    username: req.body.username,
  })
    .populate("roles", "-__v")
    .exec(async (err, user) => {
      console.log("user",user)
      if (err) {
        res.status(500).send({ message: err });
        return;
      }

      if (!user) {
        return res.status(404).send({ message: "User Not found." });
      }

      let passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );

      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password!",
        });
      }

      let token = jwt.sign({ id: user.id }, config.secret, {
        expiresIn: config.jwtExpiration,
      });


      let authorities = [];

      for (let i = 0; i < user.roles.length; i++) {
        // authorities.push("ROLE_" + user.roles[i].name.toUpperCase());
        authorities.push(user.roles[i].name);
      }
      res.status(200).send({
        _id: user._id,
        username: user.username,
        email: user.email,
        firstname: user.firstname,
        lastname: user.lastname,
        gender: user.gender,
        avatar: user.avatar,
        phone: user.phone,
        roles: authorities,
        accessToken: token,
      });
    });
};

exports.forgotPassword = (req, res) => {
  User.findOne({ username: req.body.username }).exec((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    if (!user) {
      return res.status(500).send({ message: "User không tồn tại" });
    }
    console.log("first", user);
    let chars =
      "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let string_length = 8;
    let randomstring = "";
    for (let i = 0; i < string_length; i++) {
      let rnum = Math.floor(Math.random() * chars.length);
      randomstring += chars.substring(rnum, rnum + 1);
    }
    console.log("randomstring", randomstring);
    user.password = bcrypt.hashSync(randomstring, 8);
    user.save((err) => {
      if (err) {
        res.send({
          message: "Không thể lấy lại mật khẩu",
          result: false,
        });
      }
      res.send({
        message: "Lấy lại mật khẩu thành công",
        password: user.password,
      });
    });
    console.log("user forgot", user);
  });
};

exports.resetPassword = async (req, res) => {
  let currentUser;
  let { password, passwordOld } = req.body;

  currentUser = await User.findOne({ _id: req.userId }).exec();

  let passwordIsValid = bcrypt.compareSync(passwordOld, currentUser.password);

  if (!passwordIsValid) {
    return res.status(500).send({
      result: false,
      message: "Đổi mật khẩu thất bại!!",
    });
  }

  currentUser.password = bcrypt.hashSync(password, 8);
  currentUser.save((err) => {
    if (err) {
      return res.send({
        message: err,
      });
    }
    return res.send({
      message: "Đổi mật khẩu thành công",
    });
  });
};

exports.signUpRenter = async (req, res) => {
  currentUser = await User.findOne({ _id: req.userId }).exec();
  let roles = await Role.find();
  roles.forEach((item) => {
    if (!currentUser.roles.includes(item._id)) {
      currentUser.roles.push(item._id);
    }
  });
  currentUser.save((err) => {
    if (err) {
      return res.status(500).json({ message: err });
    }
    return res
      .status(200)
      .json({ message: "Đăng ký đăng bài thành công", user: currentUser });
  });
};

exports.updateProfile = async (req, res) => {
  const currentUser = await User.findOne({ _id: req.userId }).exec();
  console.log("currentUser", currentUser);

  const profileUser = {
    username: req.body.username,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    gender: req.body.gender,
    phone: req.body.phone,
  };

  for (key in profileUser) {
    if (!!profileUser[`${key}`]) {
      currentUser[`${key}`] = profileUser[`${key}`];
    }
  }

  let { password, passwordOld } = req.body;
  let passwordIsValid;
  if (!!password && !!passwordOld) {
    passwordIsValid = bcrypt.compareSync(passwordOld, currentUser.password);

    if (!passwordIsValid) {
      return res.status(500).send({
        result: false,
        message: "Đổi mật khẩu thất bại!!",
      });
    }

    currentUser.password = bcrypt.hashSync(password, 8);
  }

  currentUser.save((err) => {
    if (err) {
      return res.send({
        message: err,
      });
    }
    return res.send({
      message: "Chỉnh sửa thông tin thành công",
      data: currentUser,
    });
  });
};

exports.getUserById = async (req, res) => {
  let userById = await User.findOne({ _id: req.query.id }).exec();
  res.json({
    userById: userById,
  });
};

exports.refreshToken = async (req, res) => {
  const { refreshToken: requestToken } = req.body;

  if (requestToken == null) {
    return res.status(403).json({ message: "Refresh Token is required!" });
  }

  try {
    let refreshToken = await RefreshToken.findOne({ token: requestToken });

    if (!refreshToken) {
      res.status(403).json({ message: "Refresh token is not in database!" });
      return;
    }

    if (RefreshToken.verifyExpiration(refreshToken)) {
      RefreshToken.findByIdAndRemove(refreshToken._id, {
        useFindAndModify: false,
      }).exec();

      res.status(403).json({
        message: "Refresh token was expired. Please make a new signin request",
      });
      return;
    }

    let newAccessToken = jwt.sign(
      { id: refreshToken.user._id },
      config.secret,
      {
        expiresIn: config.jwtExpiration,
      }
    );

    return res.status(200).json({
      accessToken: newAccessToken,
      refreshToken: refreshToken.token,
    });
  } catch (err) {
    return res.status(500).send({ message: err });
  }
};
