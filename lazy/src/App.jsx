
import React, { Suspense } from 'react'
import './App.css'


const Datas=React.lazy(()=> import('./Data'))

function App() {


  return (
    <>
      <h2>Lazy</h2>
      <Suspense fallback='Please wait data is loading'>
         <Datas/>
      </Suspense>
     
    </>
  )
}

export default App
