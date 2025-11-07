
import './App.css'
import Cart from './Components/Cart'
import Item from './Components/Item'
// import { useContext } from 'react'
// import { CounterContext } from './context/CounterProvider'
// import Counter from './Components/Counter'
function App() {
  
  // const counterState=useContext(CounterContext)
  // console.log(counterState);
  

  return (
    <>
    <Item name='Macbook' price={1000}/>
    <Item name='Samsuung' price={2000}/>
    <Item name='Mobile' price={3000}/>
    <Cart/>
      {/* <h1>Count is {counterState.count}</h1>
      <Counter/>
      <Counter/>
      <Counter/>
      <Counter/> */}
    </>
  )
}

export default App
