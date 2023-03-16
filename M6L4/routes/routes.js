const express = require('express');
const router = express.Router();

const User = require('../models/User')
const Post = require('../models/Post')

router.get('/posts', async (req, res)=>{
    const posts = await Post.find().populate(['author', 'comments.author']) //Join - più lento ma tutti i dati reference sono riportati
    // const posts = await Post.find();//senza join, più veloce ma i dati reference saranno soltanto gli id

    // const firstPost = posts[0]

    // const autore = await User.findById(firstPost.author)
    res.send(posts)
})


router.get("/setup", async (req, res)=>{
    const user1 = await User.create({
        name: "User1"
    })
    const user2 = await User.create({
        name: "User2"
    })

    const post1 = Post.create({
        title: "Post1",
        body: "Post1",
        comments: [],
        author: user1._id
    })
    const post2 = Post.create({
        title: "Post2",
        body: "Post2",
        comments: [
            {
                body: "comment1",
                author: user1._id
            }
        ],
        author: user2._id
    })
    const post3 = Post.create({
        title: "Post3",
        body: "Post3",
        comments: [],
        author: user1._id
    })

    res.send("OK");
})


module.exports = router