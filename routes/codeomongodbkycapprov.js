const express = require("express");
const router = express.Router();
const {addMongodbkycapprov,getAll,getOne,updateMongodbkycapprov,deleteMongodbkycapprov} = require ("../controller/codeomongodbkycapprov");

router.post("/", addMongodbkycapprov);
router.get("/", getAll);
router.get("/:_id", getOne);
router.put("/:_id", updateMongodbkycapprov);
router.delete("/:_id", deleteMongodbkycapprov);

module.exports = router;