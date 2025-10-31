
import './App.css';
import { useState,useEffect } from 'react';

// function App() {

//   const [state,Setstate]=useState('state')
  
//  useEffect(()=>{
//   const interval=setInterval(()=>{
//     console.log('useEffect Ran');
    
//   },2000);
  

//   return()=>{
//     // clean code
//     clearInterval(interval)
//     console.log('Cleanup');
    

//   }
//  },[state])
   
//   return (
//     <>
//     <div className='flex justify-center items-center align-middle'>

//       <button onClick={()=>{Setstate('state 1')}}>State 1 </button>
//     <button onClick={()=>{Setstate('state 2')}}>State 2</button>
//     <button onClick={()=>{Setstate('state 3')}}>State 3</button>
//     <div className='display'>{state}</div>
//     </div>
//     </>
//   );
// }

// export default App;


function LifecycleDemo() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("🟢 Mounted or Updated");

    // This is your cleanup function
    return () => {
      console.log("🔴 Cleanup before re-render or unmount");
    };
  }, [count]); // Runs whenever count changes

  return (
    <div className="p-4 text-center">
      <h2>React Lifecycle Example</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(c => c + 1)}>Increase</button>
    </div>
  );
}

export default LifecycleDemo;
