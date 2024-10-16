const express = require("express");
const router = express.Router();
const authenticateToken = require("../middlewares/auth");
const { get_postProf, get_postProf_id, add_postProf, update_postProf, delete_postProf, getPostprof1 } = require("../controllers/post_Prof");

router.post("/", async (req,res) => {
    res.sendStatus(400);
});
router.get("/", get_postProf);
router.get("/:id", authenticateToken, get_postProf_id);
router.post("/add", authenticateToken, add_postProf);
router.put("/update/:id", authenticateToken, update_postProf);
router.delete("/delete/:id", authenticateToken, delete_postProf);

router.get("/get",authenticateToken, getPostprof1);
module.exports = router;