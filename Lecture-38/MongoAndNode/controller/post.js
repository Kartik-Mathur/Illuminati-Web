const Posts = require("../models/posts");

module.exports.getAddPost = (req,res,next)=>{
    res.render('addpost');
}

module.exports.postAddPost = (req,res,next)=>{
    const {imageUrl, title, description} = req.body;
    let newPost = new Posts(imageUrl,description,title);
    newPost.save()
        .then(()=>{
            res.redirect('/post');
        })
        .catch((err)=>{
            next(err);
        })
}

module.exports.getPost = (req,res,next)=>{
    Posts.getPosts()
        .then(data=>{
            console.log(data);
            res.render('posts',{
                data
            })
        })
        .catch(err=>{
            next(err);
        })
}
