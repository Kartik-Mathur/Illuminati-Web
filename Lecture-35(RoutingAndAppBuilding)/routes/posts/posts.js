const router = require('express').Router();
const postHandler = require('../../handlers/createPosts/script');

router.get('/createpost',postHandler.getCreatePost);
router.post('/createpost',postHandler.postCreatePost);

router.get('/deleteitem',postHandler.getDeleteItem);

router.get('/updatepost',postHandler.getUpdatePost);
router.post('/updatepost',postHandler.postUpdatePost);

module.exports = router;