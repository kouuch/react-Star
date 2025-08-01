import React from "react";
import { useEffect, useState } from "react";

function Blogs() {
  const [post, setposts] = useState([]);
  //usf
  const [externalPosts, setexternalPosts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setposts(json));
  }, []);

  return (
    <>
      <h2>My Blog Post</h2>
      {post.map((item, index) => (
        <div key={index}> -{item.title}</div>
      ))}
    </>
  );
}

export default Blogs