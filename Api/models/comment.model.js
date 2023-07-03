const mongoose=require('mongoose');
 const commentSchema = new mongoose.Schema({
        desc:{
            type:String,
            required:true,
        },  
        postedBy:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'User',
            required:true,
        },

    },{timestamps:true});
const Comment=mongoose.model('Comment',commentSchema);
module.exports=Comment;