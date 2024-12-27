const Blog = require('../models/blog');

exports.addBlog = async(req, res) => {
  try {
    const blog = await Blog.findOne({id: req.body.id});
    if(blog){
      const response = await Blog.updateOne(
        {id: req.body.id},
        req.body
      );
      if(response){
        return res.status(200).json({
          message:"Blog updated successfully"
        });
      }
    }
    else{
      const response = await Blog.create(req.body);
      if(response){
        return res.status(200).json({
          message:"Blog created successfully"
        });
      }
    }
  } catch (error) {
    return res.status(500).json({
      message:"Error occured",
      error: error
    });
  }
}

exports.getBlogs = async(req, res) => {
  try {
    const blogs = await Blog.find();
    if(blogs){
      return res.status(200).json({
        blogs: blogs
      });
    }
    else{
      return res.status(400).json({
        message:"Blog does not exist"
      });
    }
  } catch (error) {
    return res.status(500).json({
      message:"Error occured",
      error: error
    });
  }
}

exports.deleteBlog = async(req, res) => {
  try {
    const resp = await Blog.deleteOne({id : req.body.id});
    if(resp){
      return res.status(200).json({
        message:"Blog deleted successfully"
      })
    }
  } catch (error) {
    return res.status(500).json({
      message:"Error occured",
      error: error
    });
  }
}