import React from 'react'
import './Booklist.css'

const books = [
  {
    author: 'Freida McFadden',
    title: 'The Housemaid Is Watching',
    img: './images/book-1.jpg',
    id: 1,
  },
  {
    author: 'James Clear',
    title: 'Atomic Habits',
    img: 'https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg',
    id: 2,
  },
]

const Booklist = () => {
  return (
    <section className='booklist'>
      {books.map((book) => {
        const { img, title, author, id } = book
        return <Book img={img} title={title} author={author} key={id}/>
      })}
    </section>
  )
}

const Book = (props) => {
  const { img, title, author } = props
  console.log(props)
  return (
    <article className='book'>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  )
}

export default Booklist
