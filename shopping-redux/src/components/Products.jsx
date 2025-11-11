/* eslint-disable no-unused-vars */
import React, { useState,useEffect } from 'react'
import { add } from '../store/cartSlice'
import { useDispatch,useSelector } from 'react-redux'
import { fetchProd } from '../store/productsSlice'
import { STATUSES } from '../store/productsSlice'

const Products = () => {

    const dispatch=useDispatch()

    const {data:product,status}=useSelector((state)=> state.product)
    
    // eslint-disable-next-line no-unused-vars
    // const [product, setProduct] = useState([])

    useEffect(()=>{
        dispatch(fetchProd())
        // const fetchProd=async ()=>{
        //     const res =await fetch('https://fakestoreapi.com/products')
        //     const data=await res.json()
        //     console.log(data);
        //     setProduct(data)
            
        // }
        // fetchProd()
    },[])

    const handleAdd=(product)=>{
        console.log('Dispatching product',product);
        
       dispatch(add(product))
        
    }

    if(status===STATUSES.LOADING){
        return <h2>Loading!</h2>
    }

    if(status===STATUSES.ERROR){
        return <h2>Something went wrong!</h2>
    }
  return (
    <div className='productsWrapper'>
        {
            product.map(product=>(
                console.log(product),
                
                <div className='card' key={product.id}>
                    <img src={product.image} alt="" />
                    <h4>{product.title}</h4>
                    <h5>{product.price}</h5>
                    <button onClick={()=>handleAdd(product)} className='btn'>Add to Cart</button>
                </div>
            )
            )
        }
    </div>
  )
}

export default Products