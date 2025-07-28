const express = require("express");
const router = express.Router();
//Index route
router.get("/",(req,res) => {
    res.send("GET for posts");
})
//show
router.get("/:id" ,(req,res) => {
    res.send("GET for post id")
})
//Post -
router.post("/" , (req,res) => {
    res.send("Post for posts");
})
//delete for post
router.delete("/" , (req,res) => {
    res.send("Post for post id");
})
module.exports = router;