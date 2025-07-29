import React from 'react'
import post from '../post.json'
import Article from '../components/Article'

function Homepage(){
  return (
    <>
    <h1>ini halaman Homepage</h1>
    {post.map((blog) => (
      <Article key={blog.title} title = {blog.title} tags={blog.tags} date={blog.date} />
    ))}
    </>
  )
}

export default Homepage
