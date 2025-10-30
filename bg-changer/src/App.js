/* eslint-disable no-unused-vars */
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [color,setColor]=useState("olive")
  return (
  <>
  <div className='w-full h-screen duration-200'
  style={{backgroundColor:color}}
  >
    <div className='fixed flex flex-wrap  justify-center bottom-12 inset-x-0 px-2'>
      <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl'>
        <button 
        onClick={()=> setColor("Red")}
        className='outline-none px-4 rounded-md text-white' style={{background:'Red'}}>
          Red
        </button>
        <button 
        onClick={()=> setColor("Blue")}
        className='outline-none px-4 rounded-md text-white' style={{background:'Blue'}}>
          Blue
        </button>
        <button 
        onClick={()=> setColor("Black")}
        className='outline-none px-4 rounded-md text-white' style={{background:'Black'}}>
          Black
        </button>
        <button 
        onClick={()=> setColor("Orange")}
        className='outline-none px-4 rounded-md text-white' style={{background:'Orange'}}>
          Orange
        </button>
        <button 
        onClick={()=> setColor("Green")}
        className='outline-none px-4 rounded-md text-white' style={{background:'Green'}}>
          Green
        </button>
          {['Red', 'Blue', 'Black', 'Orange', 'Green'].map((clr) => (
            <button
              key={clr}
              onClick={() => setColor(clr)}
              className="outline-none px-4 rounded-md text-white"
              style={{ background: clr }}
            >
              {clr}
            </button>
          ))}
      </div>
    </div>
  </div>
  </>
  );
}

export default App;
