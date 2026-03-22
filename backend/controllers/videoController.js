const Video = require('../models/video');

exports.uploadVideo = async (req, res) => {
    const video = new Video(req.body);
    try {
        await video.save();
        res.status(201).send(video);
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.getVideos = async (req, res) => {
    try {
        const videos = await Video.find();
        res.status(200).send(videos);
    } catch (error) {
        res.status(500).send(error);
    }
};
