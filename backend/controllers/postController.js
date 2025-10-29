const Post = require('../models/postModel');


exports.getPosts = async (req,res) =>{
    const posts  = await Post.find();
    res.json(posts);
}

exports.getSinglePost = async(req,res) => {
    try{
        const post = await Post.findById(req.params.id);
        if(!post) res.status(404).json({messageZ:"Post not found"})
        res.json(post);
    }catch{
        res.status(400).json({message: error.message})
    }
}

exports.createPosts = async (req, res) => {
  const { title, description, author } = req.body;

  try {
    const post = await Post.create({
      title,
      description,
      author,
      user: req.user._id,
    });

    res.status(200).json(post);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updatePost = async (req,res) =>{
    const {id} = req.params;
    const{title, description, author} = req.body;
    try {
         const post = await Post.findByIdAndUpdate(
            id,
            {title, description, author},
            {new: true, runValidators: true}
         )
         if(!post)  return res.status(404).json({message:"Post not found"})
         return res.status(201).json(post);
    } catch (error) {
         return res.status(400).json({ message: error.message });
    }
}
   

exports.deletePosts = async (req,res) =>{
    try{
        const post = await Post.findById(req.params.id);
        if(!post){
            res.status(404).json({message:"Post not found"})
        }
        await post.deleteOne();
        res.json({message: "Post deleted succussfully"})
    }catch(error){
        res.status(400).json({message: error.message})
    }
}