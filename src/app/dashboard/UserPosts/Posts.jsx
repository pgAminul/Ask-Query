"use client";
import axios from "axios";
import { useState } from "react";

const Posts = () => {
  const name = "Aminul islam";
  const [formData, setFormData] = useState({
    name,
    title: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const post = async () => {
      await axios
        .post(`http://localhost:3000/api/userPosts`, formData)
        .then((res) => console.log("Form submitted:", res.data))
        .catch((e) => console.log(e.message));
    };
    post();
  };

  return (
    <div className="p-6 max-w-xl mx-auto bg-base-100 rounded-xl shadow-md">
      <h2 className="text-2xl font-bold text-white mb-6 text-center">
        Write Your Post{" "}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="form-control">
          <label className="label" htmlFor="title">
            <span className="label-text pb-2 text-white font-bold">Title</span>
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter title"
            className="input text-white  hover:border-none outline-none w-full"
            required
          />
        </div>

        <div className="form-control">
          <label className="label" htmlFor="description">
            <span className="label-text pb-2 text-white font-bold">
              Description
            </span>
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Enter description"
            className="textarea text-white hover:border-none outline-none  h-24 w-full"
            required
          />
        </div>

        <div className="form-control mt-6">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Posts;
