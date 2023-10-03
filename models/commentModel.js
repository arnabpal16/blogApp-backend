//mongoose instant import
const mongoose = require("mongoose")

//route handler
const commentSchema = new mongoose.Schema({

    // 3 type konsi post par comment kar raga ho 
    post:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "Post" , //reference to the post model
    },

    //kon comment kar raha he
    user:{
        type:String,
        required:true,
    },

    //keya comment kar rahe he
    body:{
        type:String,
        required:true,
    }
});

//export
module.exports = mongoose.model("Comment" ,commentSchema);