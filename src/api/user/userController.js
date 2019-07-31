const user = require("./userModel");

const params = (req, res, next, id) => {
  user.findById(id).then(
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
  user.find({}).then(
    function(users) {
      res.json(
        users.map(function(user) {
          return user.toJson();
        })
      );
    },
    function(err) {
      next(err);
    }
  );
};

const getOne = (req, res) => {
  const user = req.user.toJson();
  res.json(user);
};

module.exports = {
  params: params,
  get: get,
  getOne: getOne
};
