import React, { useState } from "react";
import axios from 'axios';
import './Major.css';

const AddProduct = () => {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const cloudName = "dklr77uyo";
  const preset = "cloudinaryTutorial";

  const handleUploadImage = async () => {
    const payload = new FormData();
    payload.append("file", file);
    payload.append("upload_preset", preset);
    try {
      const response = await axios.post(`https://api.cloudinary.com/v1_1/${cloudName}/upload`, payload);
      return response.data.secure_url;
    } catch (err) {
      console.error(err);
      return null;
    }
  };

  const handleAddProduct = async () => {
    const imageUrl = await handleUploadImage();
    if (!imageUrl) {
      console.error("Image upload failed");
      return;
    }

    const userId = JSON.parse(localStorage.getItem("user"));
    const priceNumber = parseFloat(price); // Convert price to Float

    const productData = {
      image: imageUrl,
      title,
      description,
      price: priceNumber,
      userId
    };

    try {
      let result = await fetch("http://localhost:3002/product/houses", {
        method: "POST",
        body: JSON.stringify(productData),
        headers: {
          "Content-Type": "application/json"
        }
      });
      result = await result.json();
      console.log(result);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="addProduct">
      <h1>Add Houses</h1>
      <input
        type="file"
        name="file"
        id="file"
        onChange={(e) => setFile(e.target.files[0])}
      />
      <input
        type="text"
        placeholder="Enter the title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter the description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter the price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button onClick={handleAddProduct}>Upload</button>
    </div>
  );
};

export default AddProduct;
