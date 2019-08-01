const User = require("./userModel");

const params = (req, res, next, id) => {
  User.findById(id).then(
    function(user) {
      if (!user) {
        next(new Error("No user with that id"));
      } else {
        req.user = user;
        next();
      }
    },
    function(err) {
      next(err);
    }
  );
};

const get = (req, res, next) => {
  User.find({}).then(
    function(users) {
      res.json(
        users.map(function(user) {
          return user;
        })
      );
    },
    function(err) {
      next(err);
    }
  );
};

const getOne = (req, res) => {
  const user = req.user;
  res.json(user);
};

const post = (req, res, next) => {
  const newUser = new User(req.body);

  newUser.save(function(err, saved) {
    if (err) {
      return next(err);
    } else {
      res.json(saved);
    }
  });
};

module.exports = {
  get: get,
  getOne: getOne,
  params: params,
  post: post
};
