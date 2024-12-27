const express = require("express");
const router = express.Router();
const blogController = require('../controllers/blog')

router.get('/hello',(req,res) => {
  res.send("Hello, Health check")
})

router.post('/add-blog', blogController.addBlog)
router.get('/get-blogs', blogController.getBlogs)
router.post('/delete-blog', blogController.deleteBlog)

module.exports = router;