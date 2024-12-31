const express = require("express");
const router = express.Router();
const blogController = require('../controllers/blog')

router.get('/',(req,res) => {
  res.send("Hello, Live check")
})

router.get('/api',(req,res) => {
  res.send("Hello, api check")
})

router.get('/hello',(req,res) => {
  res.send("Hello, Health check")
})

router.get('/api/hello',(req,res) => {
  res.send("Hello, api Health check")
})

router.post('/api/add-blog', blogController.addBlog)
router.get('/api/get-blogs', blogController.getBlogs)
router.post('/api/delete-blog', blogController.deleteBlog)

module.exports = router;