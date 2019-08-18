const express = require('express');
const router = express.Router();

const Post = require('../models/post');

router.get('/', (req, res) => {
    Post.find()
        .then(post => res.json(post))
});
module.exports = router;