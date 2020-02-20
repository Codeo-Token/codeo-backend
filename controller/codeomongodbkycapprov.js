const Mongodbkycapprov = require("../models/codeomongodbkycapprov");

module.exports = {
  getAll: (req, res) => {
    Mongodbkycapprov.find((error, result) => {
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
    Mongodbkycapprov.findOne({ _id: req.params._id }, (error, result) => {
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

  addMongodbkycapprov: async (req, res) => {
    try {
      Mongodbkycapprov.create({
        date_updateuser: req.body.date_updateuser,
        nama_user: req.body.nama_user,
        country_update: req.body.country_update,
        edit_document: req.body.edit_document,
        verified_status: req.body.verified_status
      });
      res.status(200).send({
        message: "data kyc is created",
        Mongodbkycapprov
      });
    } catch (error) {
      res.status(400).send({
        message: `failed to created`,
        error: error.message
      });
    }
  },

  updateMongodbkycapprov: (req, res) => {
    console.log(req.body);
    Mongodbkycapprov.findOneAndUpdate(
      { _id: req.params._id },
      req.body,
      (error, result) => {
        if (error) {
          res.status(400).send({
            message: `data kyc failed to update`,
            error
          });
        } else {
          res.status(200).send({
            message: `data kyc update`,
            result
          });
        }
      }
    );
  },

  deleteMongodbkycapprov: (req, res) => {
    Mongodb.findOneAndDelete({ _id: req.params._id }, (error, result) => {
      if (error) {
        res.status(400).send({
          message: `data kyc failed to delete`,
          error
        });
      } else {
        res.status(200).send({
          message: `data kyc delete`,
          result
        });
      }
    });
  }
};
