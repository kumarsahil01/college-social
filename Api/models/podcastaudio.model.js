const mongoose = require('mongoose');

const podcastAudioSchema = new mongoose.Schema({
  filename: {
    type: String,
    required: true,
  },
  contentType: {
    type: String,
    required: true,
  },
});

const PodcastAudio = mongoose.model('PodcastAudio', podcastAudioSchema);

module.exports = PodcastAudio;
