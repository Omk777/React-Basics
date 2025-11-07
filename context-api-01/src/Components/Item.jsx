import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../context/Cart'

const Item = (props) => {

    const cart=useContext(CartContext)
    console.log(cart);
    
  return (
    <div className='item-card'>
        <h1>{props.name}</h1>
        <p>Price:{props.price}</p>
        <button onClick={()=>cart.setItems([...cart.items,{ name:props.name,price:props.price}])}>Add to Cart</button>
    </div>
  )
}

export default Item