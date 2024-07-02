import React from 'react'
import './Booklist.css'

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
      <Image />
      <Title />
      <Author />
    </article>
  )
}

const Image = () => (
  <img src='./images/book-1.jpg' alt='The Housemaid Is Watching' />
)
// const Title = () => {
//     const inlineHeadingStyles = {
//       color: '#1e12d7',
//       fontSize: '1.5rem',
//       marginTop: '0.9rem',
//       marginBottom: '0.3rem'
//     }
//   return <h2 style={inlineHeadingStyles}>The Housemaid Is Watching</h2>
// }
const Title = () => {
    return <h2>The Housemaid Is Watching</h2>
}
// const Author = () => (
// <h4 style={{color: '#617d98', fontSize: '0.75rem', marginTop: '0.5rem'}} >Freida McFadden</h4>
// )
const Author = () => (
  <h4>Freida McFadden</h4>
)

export default Booklist
