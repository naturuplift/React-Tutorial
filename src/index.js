import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Booklist from './components/Booklist'
import reportWebVitals from './reportWebVitals'
import { StrictMode } from 'react'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <StrictMode>
    <Booklist />
  </StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
