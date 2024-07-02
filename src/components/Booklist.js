import React from 'react'
import './Booklist.css'

const author = 'Freida McFadden'
const title = 'The Housemaid Is Watching'
const img = './images/book-1.jpg'

function Booklist() {
  return (
    <section className='booklist'>
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  )
}

const Book = () => {
  return (
    <article className='book'>
      <img src={img} alt='The Housemaid Is Watching' />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  )
}

export default Booklist