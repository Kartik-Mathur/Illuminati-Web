const path = require('path');
const express = require('express');
const postController = require('../controller/post');
const router = express.Router();

router.get('/addpost',postController.getAddPost);
router.post('/addpost',postController.postAddPost);
router.get('/',postController.getPost);

module.exports = router;