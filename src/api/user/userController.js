import User from "./userModel";

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

export { params, get, getOne };
