const { v4: uuidv4 } = require('uuid');
const Posts = require('../../database/scripts/posts');

module.exports.getCreatePost = (req,res)=>{
    res.render('createpost');
};

module.exports.postCreatePost = async (req,res,next)=>{
    const {title, imageUrl, caption} = req.body;
    console.log(title,imageUrl,caption);
    try{
        let posts = await Posts.addPost({
            title,
            imageUrl,
            caption,
            id:uuidv4()
        })
        // console.log(JSON.parse(posts));
        res.render('home',{
            posts
        });
    }
    catch(err){
        next();
    }
};


module.exports.getDeleteItem = async (req,res)=>{
    const {id} = req.query;
    try{
        let posts = await Posts.deletePost(id);
        res.render('home',{
            posts
        });
    }catch(err){
        next();
    }
};

module.exports.getUpdatePost = async (req,res,next)=>{
    const {id} = req.query;
    try{
        let item = await Posts.getOnePost(id);
        res.render('updatepost',{
            item
        });
    }catch(err){
        next();
    }
}

module.exports.postUpdatePost = async (req,res,next)=>{
    const {id,title,imageUrl,caption} = req.body;
    const post = {
        id,title,imageUrl,caption
    }
    try{
        let data = await Posts.updatePost(post);
        res.render('home',{
            posts: data
        });
    }
    catch(err){
        next();
    }
}