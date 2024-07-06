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
      <EventExamples />
      {books.map((book) => {
        return <Book {...book} key={book.id} />
      })}
    </section>
  )
}

const EventExamples = () => {
  const handleFormInput = (event) => {
    console.log(event)
    // e.target - element
    console.log(`Input Name : ${event.target.name}`)
    console.log(`Input Value : ${event.target.value}`)
    // console.log('handle form input')
  }
  const handleButtonClick = () => {
    alert('handle button click')
  }
  const handleFormSubmission = (event) => {
    event.preventDefault()
    console.log('form submitted')
  }
  return (
    <section>
      <form onSubmit={handleFormSubmission}>
        <h2>Typical Form</h2>
        <input
          type='text'
          name='example'
          onChange={handleFormInput}
          style={{ margin: '1rem 0' }}
        />
      </form>
      <button onClick={handleButtonClick}>click me</button>
    </section>
  )
}

const Book = (props) => {
  const { img, title, author } = props
  //   console.log(props)
  return (
    <article className='book'>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  )
}

export default Booklist
