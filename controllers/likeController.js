//import model for like 
const Post = require("../models/postModel")
const Like = require("../models/likeModel")

//testing
// exports.dummyLink = (req,res) => {
//     res.send("this is for tasting");
// };

//bussiness logic 
// exports.likePost = async (req,res) => {
//     try{
//         //create an like object and saved it
//         const {post,user} = req.body


//         const like = new Like({
//             post,user,
//         })
//         const savedLike = await like.save();

//         const udpatedPost = await Post.findByIdAndUpdate(post,{$push:{likes : savedLike._id}},{new:true});

//         res.json({
//             post:udpatedPost,
//         });
//     }
//     catch (error) {
//         console.log(error);
//         return res.status(500).json({
//             error: "Error While liking post",
//         }); 
//     }
// }
exports.likePost = async (req, res) => {
    try {
        const { post, user } = req.body;
        const like = new Like({
            post, user,
        });
        const savedLike = await like.save();

        //update the post collection basis on this
        const udpatedPost = await Post.findByIdAndUpdate(post, { $push: { likes: savedLike._id } }, { new: true })
            .populate("likes").exec();

        res.json({
            post: udpatedPost,
        });

    }
    catch (error) {
        return res.status(400).json({
            error: "Error while Liking post",
        });
    }
}

//unlike
exports.unlikePost = async (req, res) => {

    try {
        const { post, like } = req.body;
        //find and delete the like collection me se
        const deletedLike = await Like.findOneAndDelete({ post: post, _id: like });

        //udpate the post collection
        const udpatedPost = await Post.findByIdAndUpdate(post,
            { $pull: { likes: deletedLike._id } },
            { new: true });

        res.json({
            post: udpatedPost,
        });

    }
    catch (error) {
        return res.status(400).json({
            error: "Error while Unliking post",
        });
    }

}
