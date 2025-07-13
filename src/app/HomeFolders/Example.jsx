"use client";
import React, { useEffect, useState } from "react";
import PublicUrl from "../Components/URL/PublicUrl";

export default function Example() {
  const [data, setData] = useState([]);
  const axiosPublic = PublicUrl();
  useEffect(() => {
    axiosPublic
      .get("/api/userPosts")
      .then((res) => setData(res.data))
      .catch((e) => console.log(e.message));
  }, []);

  console.log(data);

  console.log("data");
  return <div></div>;
}
