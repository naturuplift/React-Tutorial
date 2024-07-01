import React from 'react'
import './Booklist.css'

function Booklist() {
  return (
    <section className='booklist'>
      <Book />
      <Book />
      <Book />
    </section>
  )
}

const Book = () => {
  return (
    <article>
      <Image />
      <Title />
      <Author />
    </article>
  )
}

const Image = () => (
  <img src='./images/book-1.jpg' alt='The Housemaid Is Watching' />
)
const Title = () => {
  return <h2>The Housemaid Is Watching</h2>
}
const Author = () => <h4>Freida McFadden</h4>

export default Booklist
