import React from "react";
import { useState } from "react";
import postData from "../post.json";
import Article from "../components/Article";
import Search from "../components/Search";

function Homepage() {
  // // let search = '' //biasa di js

  // const [search, setSearch] = useState(""); //menggunakan usetate
  // const changeSearch = (e) => {
  //   console.log(e.target.value);
  //   // search = e.target.value //biasa di js
  //   setSearch(e.target.value);
  // };
  const [post, setposts] = useState(postData);
  const [totalPosts, setTotalPosts] = useState(0);

  const changeSearch = (value) => {
    console.log(value)
    const filterPost = postData.filter((item) =>
    item.title.includes(value)
  )
  setposts(filterPost)
  setTotalPosts(filterPost.length)
  }
  return (
    <>
      <h1>ini halaman Homepage</h1>
      <br />
      <Search changeSearch={changeSearch} totalPosts={totalPosts}/>
      {post.map(({ id, title, tags, date , isNew}) => (
        // exmple 1
        // <Article key={id} title = {title} tags={tags} date={date} />
        // exmple 2 refactor
        <Article key={id} {...{ title, tags, date , isNew}} />
      ))}
    </>
  );
}

export default Homepage;
