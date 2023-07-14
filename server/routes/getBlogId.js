const express = require('express')
const router = express.Router()


const Blog = require('../models/blogs')

router.get('/:blog_id', async (req, res, next) => {
    try {
        const blogId = req.params.blog_id
        const blog = await Blog.findById(blogId)
        if(!blog){
            res.status(200).json({
                message: "Blog does not exist"
            })
        } else{
            res.status(200).json(blog)
        }

    } catch (error) {
        res.status(500).json({
            error,
        })
    }
})


module.exports = router