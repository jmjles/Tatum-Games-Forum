const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    catId:{
        type: Number,
        required: true
    },
    id:{
        type:Number,
        required:true
    },
    type:{
        type: String,
        default: 'Normal'
    },
    title: {
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    },
    context:{
        type: String,
        required: true
    },
    author:{
        type: String,
        required: true
    }
});
module.exports = Post = mongoose.model('post', PostSchema);