const express = require("express");
const router = express.Router();
const {addMongodbadmin,getAll,getOne,updateMongodbadmin,deleteMongodbadmin} = require ("../controller/codeomongodbadmin");

router.post("/", addMongodbadmin);
router.get("/", getAll);
router.get("/:_id", getOne);
router.put("/:_id", updateMongodbadmin);
router.delete("/:_id", deleteMongodbadmin);

module.exports = router;