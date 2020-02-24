const Mongodbadmin = require("../models/codeomongodbadmin");

module.exports = {
  getAll: (req, res) => {
    Mongodbadmin.find((error, result) => {
      if (error) {
        res.status(400).send({
          message: `failed to get data`,
          error
        });
      } else {
        res.status(200).send({
          message: `All data get`,
          result
        });
      }
    })
  },

  getOne: (req, res) => {
    Mongodbadmin.findOne({ _id: req.params._id }, (error, result) => {
      if (error) {
        res.status(400).send({
          message: `can't find one`,
          error
        });
      } else {
        res.status(200).send({
          message: `we find it`,
          result
        });
      }
    })
  },

  addMongodbadmin: async (req, res) => {
    try {
      Mongodbadmin.create({
        username_admin: req.body.username_admin,
        password_admin: req.body.password_admin,
        email_admin: req.body.email_admin
      });
      res.status(200).send({
        message: "data admin is created",
        Mongodbadmin
      });
    } catch (error) {
      res.status(400).send({
        message: `failed to created`,
        error: error.message
      });
    }
  },

  updateMongodbadmin: (req, res) => {
    console.log(req.body);
    Mongodbadmin.findOneAndUpdate(
      { _id: req.params._id },
      req.body,
      (error, result) => {
        if (error) {
          res.status(400).send({
            message: `data admin failed to update`,
            error
          });
        } else {
          res.status(200).send({
            message: `data admin update`,
            result
          });
        }
      }
    );
  },

  deleteMongodbadmin: (req, res) => {
    Mongodbadmin.findOneAndDelete({ _id: req.params._id }, (error, result) => {
      if (error) {
        res.status(400).send({
          message: `data admin failed to delete`,
          error
        });
      } else {
        res.status(200).send({
          message: `data admin delete`,
          result
        });
      }
    });
  }
};
