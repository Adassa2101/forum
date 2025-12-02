import {Schema} from "mongoose";

const CommentSchema = new Schema( {
    user:{
        type:String,
        required: true
    },
    message:{
        type:String,
        required: true
    },
    dataCreated:{
        type:Date,
        default:Date.now
    },
    likes:{
        type:Number,
        default:0
    }
}, {
        _id:false,
    toJSON: {
        transform: (doc, ret) => {
            ret.dataCreated = ret.dataCreated.toISOString().slice(0, 19);
        }
    }
    })
export default CommentSchema;