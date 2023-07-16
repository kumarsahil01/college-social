import React, { useState } from "react";
import "../components/NewPost.scss";

const NewPost = () => {
  const [image, setImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setImage(URL.createObjectURL(file));
  };

  return (
    <div className="new-post">
      <h1 className="new-post-title">Create a New Post</h1>
      <form className="new-post-form">
        <div className="form-group">
          <label htmlFor="post-title" className="form-label">
            Title
          </label>
          <input
            type="text"
            id="post-title"
            className="form-input"
            placeholder="Enter post title"
          />
        </div>
        <div className="form-group">
          <label htmlFor="post-content" className="form-label">
            Content
          </label>
          <textarea
            id="post-content"
            className="form-textarea"
            placeholder="Enter post content"
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="post-image" className="form-label">
            Image
          </label>
          <input
            type="file"
            id="post-image"
            className="form-input"
            accept="image/*"
            onChange={handleImageUpload}
          />
          {image && (
            <img
              src={image}
              alt="Uploaded Image"
              className="uploaded-image"
            />
          )}
        </div>
        <div className="form-group">
          <label htmlFor="post-tags" className="form-label">
            Tags
          </label>
          <input
            type="text"
            id="post-tags"
            className="form-input"
            placeholder="Enter post tags (comma-separated)"
          />
        </div>
        <button type="submit" className="form-button">
          Publish
        </button>
      </form>
    </div>
  );
};

export default NewPost;
