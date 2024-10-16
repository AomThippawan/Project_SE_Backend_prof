const postProf = require ('../models/post_Prof');

exports.get_postProf = async (req, res) => {
    try {
        const posts = await postProf.find();
        res.status(200).json(posts);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.get_postProf_id = async (req, res) => {
    try {
        const { id } = req.params;
        const posts = await postProf.findById(id);
        res.status(200).json(posts);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


exports.add_postProf = async (req, res) => {
    try {
        const { 
            Jobtitle,
            Jobdescription,
            Joblocation,
            Jobbuilding,
            Jobroom,
            Jobtime_start,  
            Jobtime_end,   
            Count,           
            Reserve_count,
            Traveling_type,
            Food_Sup,
            Salary
        } = req.body;
        const posts = new postProf({ 
            Jobtitle,
            Jobdescription,
            Joblocation,
            Jobbuilding,
            Jobroom,
            Jobtime_start,  
            Jobtime_end,   
            Count,           
            Reserve_count,
            Traveling_type,
            Food_Sup,
            Salary 
        });
        const savedPost = await posts.save();
        res.status(201).json(savedPost);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.update_postProf = async (req, res) => {
    try {
        const { id } = req.params;
        const posts = await postProf.findById(id);
        if (!posts) return res.status(404).json({ message: 'Post not found' });
        const update = req.body;
        Object.assign(posts, update);
        const updatedPost = await posts.save();
        res.json(updatedPost);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.delete_postProf = async (req, res) => {
    try {
        const { id } = req.params;
        const posts = await postProf.findById(id);
        if (!posts) return res.status(404).json({ message: 'Post not found' });
        await postProf.findByIdAndDelete(id);
        res.json({ message: 'Post deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


//-------------------------------------------------------------------
exports.getPostprof1 = async (req, res) => {
    try {
        const posts = await postProf.find();
        res.status(200).json(posts);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
