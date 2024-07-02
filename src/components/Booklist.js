import React from 'react'
import './Booklist.css'

const author = 'Freida McFadden'
const title = 'The Housemaid Is Watching'
const img = './images/book-1.jpg'

const Booklist = () => {
  return (
    <section className='booklist'>
      <Book author={author} title={title} img={img} />
      <Book author={author} title={title} img={img} />
      <Book title='random title' number={22} />
    </section>
  )
}

const Book = (props) => {
    console.log(props)
  return (
    <article className='book'>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
      {/* <p>{props.job}</p>
      <p>{props.title}</p>
      <p>{props.number}</p> */}
    </article>
  )
}

export default Booklist