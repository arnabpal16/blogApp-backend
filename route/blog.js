const express = require("express")
const router = express.Router()

//import controller
const {dummyLink ,likePost,unlikePost} = require("../controllers/LikeController")
const {createComment} = require("../controllers/CommentController");
const { crearePost,getallPost } = require("../controllers/PostController");
const { create } = require("../models/postModel");

//Mapping create
// router.get("/dummyroute", dummyLink);
router.post("/comments/create", createComment);
router.post("/post/create",crearePost);
router.get("/posts",getallPost);
router.post("/dolike",likePost);
router.post("/dolike/dislike",unlikePost);

//export
module.exports = router ;
