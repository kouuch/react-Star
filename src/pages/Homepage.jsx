import React from "react";
import { useState } from "react";
import post from "../post.json";
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
  return (
    <>
      <h1>ini halaman Homepage</h1>
      <br />
      <Search />
      {post.map(({ id, title, tags, date }) => (
        // exmple 1
        // <Article key={id} title = {title} tags={tags} date={date} />
        // exmple 2 refactor
        <Article key={id} {...{ title, tags, date }} />
      ))}
    </>
  );
}

export default Homepage;
