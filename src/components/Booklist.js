import React from 'react'
import './Booklist.css'

const firstBook = {
  author: 'Freida McFadden',
  title: 'The Housemaid Is Watching',
  img: './images/book-1.jpg',
}
const secondBook = {
  author: 'James Clear',
  title: 'Atomic Habits',
  img: 'https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg',
}

const Booklist = () => {
  return (
    <section className='booklist'>
      <Book
        author={firstBook.author}
        title={firstBook.title}
        img={firstBook.img}
      >
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque
          repudiandae inventore eos qui animi sed iusto alias eius ea sapiente.
        </p>
        <button>click me</button>
        </Book>
      <Book
        author={secondBook.author}
        title={secondBook.title}
        img={secondBook.img}
      >
      </Book>
    </section>
  )
}

const Book = (props) => {
  const { img, title, author, children } = props
  console.log(props)
  return (
    <article className='book'>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
      {children}
      {/* <p>{job}</p>
      <p>{title}</p>
      <p>{number}</p> */}
    </article>
  )
}

export default Booklist
