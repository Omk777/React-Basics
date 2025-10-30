/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-comment-textnodes */
import './App.css';
import Card from './components/card';

function App() {
  let myObj={
    username:'Omkar',
    password:1234
  }

  let newArr=[1,2,3,4]
  return (
 <>
  <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4 flex justify-center items-center'>Tailwind test</h1>
  

 <Card channel="React Crash" obj={myObj} arr={newArr} btnText="Click Me"/>
 <Card channel="Omkar" btnText=""/>

 </>
  
  );
}


export default App;
