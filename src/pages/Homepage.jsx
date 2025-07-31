import React, { Component } from "react";
import { useState, useEffect } from "react";
import postData from "../post.json";
import Article from "../components/Article";
import Search from "../components/Search";
import js from "@eslint/js";

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
  //usf
  const [externalPosts, setexternalPosts] = useState([]);

  const changeSearch = (value) => {
    console.log(value);
    const filterPost = postData.filter((item) => item.title.includes(value));
    setposts(filterPost);
    setTotalPosts(filterPost.length);
  };

  //compinentDidmount
  //componenDidUpdate
  // Componentwillunmount / dihancurkan m,enjalankan atau memberssihkan sidede evect seperti addWventlestener

  // useEffect(() => {
  //   console.log('testtong')

  //   // setInterval(() => {

  //   // }, interval);

  //   return () => { //Componentwillunmount
  //     // removeEventListener dll
  //     //ex 2
  //     // clearInterval

  //     console.log('clean')
  //   }

  // }, [post]);
  // [post] ini tempat memamntau useEfeect componenDidUpdate

  //fetchdata API
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setexternalPosts(json));
  }, []);

  //multiple useEffect
  useEffect(() => {
    console.log('new post')
  }, [post]);

  useEffect(() => {
    console.log('tesst')
  });
  return (
    <>
      <h1>ini halaman Homepage</h1>
      <br />
      {/* <Search changeSearch={changeSearch} totalPosts={totalPosts}/> */}
      <Search changeSearch={changeSearch} totalPosts={totalPosts} />
      {post.map(({ id, title, tags, date, isNew }) => (
        // exmple 1
        // <Article key={id} title = {title} tags={tags} date={date} />
        // exmple 2 refactor
        <Article key={id} {...{ title, tags, date, isNew }} />
      ))}
      <hr />
      <h2>External Post</h2>
      {externalPosts.map((item, index) => (
        <div key={index}> -{item.title}</div>
      ))}
    </>
  );
}

export default Homepage;
