const mongoose = require("mongoose");

const profilePictureSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        contentType: {
            type: String,
            required: true,
        },
        size: {
            type: Number,
            required: true,
        },
    },
    { timestamps: true }
);
