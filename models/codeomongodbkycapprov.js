const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var mongodbkycapprovSchema = new Schema(
  {
    date_updateuser: { 
        type: Date,
        default: Date.now 
         },
    nama_user: { 
        type: String,
        require: true 
        },
    country_update: { 
        type: String,
        require: true 
         },
    edit_document: { 
         type: String,
         require: true 
         },
    verified_status: {
         type: String,
         require: true
    }
  }
);

const Mongodbkycapprov = mongoose.model("kycapproval_tabels", mongodbkycapprovSchema);
module.exports = Mongodbkycapprov;