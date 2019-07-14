import User from "./userModel";

export default {
  params: (req, res, next, id) => {
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
  },

  get: (req, res, next) => {
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
  },

  getOne: (req, res) => {
    const user = req.user.toJson();
    res.json(user);
  }
};
