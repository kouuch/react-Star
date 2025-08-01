import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useLoaderData } from "react-router-dom";

function _id() {
  const post = useLoaderData()

  // tidak dibutuhkan setalah menambahakan loader
  // const params = useParams();
  // const [post, setposts] = useState();

  // useEffect(() => {
  //   fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
  //     .then((response) => response.json())
  //     .then((json) => setposts(json));
  // }, []);
  return (
    <>
      <h2>{post?.title}</h2>
      <br />
      <div>{post?.body}</div>
    </>
  );
}

export default _id;
