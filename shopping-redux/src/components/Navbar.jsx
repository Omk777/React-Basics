import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
    const data=useSelector((state)=>state.cart)
  return(
    <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
    <span className="logo">Redux</span>
    <div>
      <Link className="navLink" to="/">Home</Link>
      <Link className="navLink" to="/cart">Cart</Link>
      <span className="cartCount">Cart item :{data.length}</span>
    </div>
  </div>
  )

}
export default Navbar;
