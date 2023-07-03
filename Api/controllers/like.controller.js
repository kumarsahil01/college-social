const Post = require('../models/post.model');
const Podcast = require('../models/podcast.model');
const Video = require('../models/video.model');


exports.like = async (req, res) => {
    const id = req.query.id;
    const type = req.query.type;
    console.log(type);
    let entity;
    try {
        if(type==='post')
        entity=await Post.findById(id);
        else if(type==='podcast')
        entity=await Podcast.findById(id);
        else if(type==='video')
        entity=await Video.findById(id);
        if(!entity)
        return res.status(404).json({error:'entity not found'});
        const likes=entity.likes;
        entity.likes=likes+1;
        await entity.save();
        res.status(201).json({message:`${type} liked successfully`});
    } catch (error) {
        console.error(error);
        res.status(500).json({error:'Failed to create like'});
    }
        
}
exports.unlike = async (req, res) => {
    const id = req.query.id;
    const type = req.query.type;
    let entity;
    try {
        if(type==='post')
        entity=await Post.findById(id);
        else if(type==='podcast')
        entity=await Podcast.findById(id);
        else if(type==='video')
        entity=await Video.findById(id);
        if(!entity)
        return res.status(404).json({error:'entity not found'});
        const likes=entity.likes;
        entity.likes=likes-1;
        await entity.save();
        res.status(201).json({message: `${type} unliked successfully`});
    } catch (error) {
        console.error(error);
        res.status(500).json({error:'Failed to create like'});
    }
        
}