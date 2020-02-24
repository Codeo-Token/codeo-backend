const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var mongodbadminSchema = new Schema(
  {
    username_admin: { 
        type: String,
        require: true 
         },
    password_admin: { 
        type: String,
        require: true 
        },
    email_admin: { 
        type: String,
        require: true 
     }
  }
);

const Mongodbadmin = mongoose.model("admin", mongodbadminSchema);
module.exports = Mongodbadmin;