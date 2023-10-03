//import mongoose
const mongoose = require("mongoose")

//route controller
const likeSchema = new mongoose.Schema({

    //3 type konsi post par like kar raha ho 
    post:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "Post" , //reference to the post model
    },

    //kon like kar raha he
    user:{
        type:String,
        required:true,
    },
});

//export(in the name of lIke)
module.export = mongoose.model("Like",likeSchema);