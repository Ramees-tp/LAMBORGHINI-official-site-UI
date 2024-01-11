import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Header from './Header'
import Content1 from './Content1'
import Content2 from './Content2'
import Content3 from './Content3'
import Content4 from './Content4'
import Footer from './Footer'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header/>
    <Content1/>
    <Content2/>
    <Content3/>
    <Content4/>
    <Footer/>
  </React.StrictMode>,
)
