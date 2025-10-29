/* eslint-disable no-unused-vars */
import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// eslint-disable-next-line no-unused-vars
// const reactElement={
//     type:'a',
//     props:{
//        href:'https://google.com',
//        target:'_blank'
//     },
//     children:'Click me to visit google'
// }

const reactElement=React.createElement(
  'a',
  {href:'https://google.com',target:'_blank'},
  'click me to visit google'
)


const anotherElement=(
  <a href="https://google.com" target='_blank'>Visit Google</a>
)
createRoot(document.getElementById('root')).render(
  
  <App/>
)
