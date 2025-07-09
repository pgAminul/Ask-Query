"use client";
import Title from "@/app/Components/ReusableComponent/Title";
import axios from "axios";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

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

    axios
      .post(`http://localhost:3000/api/userPosts`, formData)
      .then((res) => {
        if (res.data.error) {
          toast.error(res.data.error);
          return;
        }
        console.log("Form submitted:", res);
        toast.success("Your query has been submitted successfully!");
        setFormData({
          name,
          title: "",
          description: "",
        });
      })
      .catch((error) => {
        console.error(error.message);
        toast.error(error.message);
      });
  };

  return (
    <div>
      <Toaster /> {/* Toast handler must be here, outside of button */}
      <Title
        title={"Have a Question?"}
        description={"Ask anything and get expert advice instantly!"}
      />
      <div className="p-6 max-w-xl mx-auto bg-base-100 rounded-xl shadow-md">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="form-control">
            <label className="label" htmlFor="title">
              <span className="label-text pb-2 text-white font-bold">
                Title
              </span>
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter title"
              className="input text-white hover:border-none outline-none w-full"
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
              className="textarea text-white hover:border-none outline-none h-24 w-full"
            />
          </div>

          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Posts;
