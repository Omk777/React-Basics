/* eslint-disable no-unused-vars */


import './App.css'
import First from './first';
function App() {
const username='React basics'
const name='Omkar';
  return (

    <>
    <Header></Header>
    <h1>Hello {name}</h1><p>Welcome to react course</p>
    <h2>React Crash Course with {username}</h2>
    <First/>
    </>
  )
}

function Header(){
  return (
    <h2>Header Section</h2>
  )
}


export default App
