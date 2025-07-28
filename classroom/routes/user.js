const express = require("express");
const router = express.Router();
//index routs
router.get("/",(req,res) => {
    res.send("GET for users");
})
//show - users
router.get("/:id" ,(req,res) => {
    res.send("GET for user id")
})
//Post -users
router.post("/" , (req,res) => {
    res.send("Post for users");
})
//delete for user id
router.delete("/" , (req,res) => {
    res.send("Post for user id");
})
module.exports = router;