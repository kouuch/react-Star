import React from 'react'
import post from '../post.json'
import Article from '../components/Article'

function Homepage(){
  return (
    <>
    <h1>ini halaman Homepage</h1>
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
