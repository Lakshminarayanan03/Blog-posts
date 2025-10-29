const express = require('express')
const router = express.Router();
const protect = require('../middleware/authMiddleware')
const {createPosts, getPosts, deletePosts, getSinglePost, updatePost} = require('../controllers/postController')

router.get('/',getPosts)
router.get('/:id',getSinglePost)

router.post('/',protect, createPosts);
router.put('/:id',protect, updatePost)
router.delete('/:id',protect, deletePosts);

module.exports = router;