const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
    id:{
        type: Number,
        required: true
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
    shortDesc:{
        type: String
    },
    author:{
        type: String,
        required: true
    }
});

module.exports= Category = mongoose.model('category', CategorySchema);