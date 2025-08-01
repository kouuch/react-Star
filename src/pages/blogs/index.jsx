import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
        <div key={index}>
          <Link to={`/blog/${item.id}`}> -{item.title}</Link>
        </div>
      ))}
    </>
  );
}

export default Blogs;
