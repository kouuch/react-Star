import React from 'react'
import { useState } from 'react';
import post from '../post.json'
import Article from '../components/Article'

function Homepage(){
  let search = ''
  
  const changeSearch = (e) =>{
    console.log(e.target.value)
    search = e.target.value
  }
  return (
    <>
    <h1>ini halaman Homepage</h1>
    <br />
    <div>
      Cari Artikel : <input onChange={changeSearch} />
    </div>
    <small>0 data dengan pencarian kata {search}</small>
    <br />
    <br />
    {post.map(({id, title, tags, date}) => (
      // exmple 1
      // <Article key={id} title = {title} tags={tags} date={date} />
      // exmple 2 refactor
      <Article key={id} {...{title,tags,date}} />
      
    ))}
    </>
  )
}

export default Homepage
