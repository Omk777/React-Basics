import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../store/cartSlice"; 
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cart = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart); 

 const handleRemove = (id, pro) => {
  const confirmDelete = window.confirm(`Are you sure you want to remove "${pro.title}" from the cart?`);

  if (confirmDelete) {
    dispatch(remove(id));
    toast.error(`${pro.title} removed from cart 🗑️`);
  } else {
    toast.info(`Action cancelled ❌`);
  }
};


  return (
    <div>
      <h2>🛒 Cart</h2>

      <div className="cartWrapper">
        {items.length === 0 ? (
          <p>No items in the cart</p>
        ) : (
          items.map((pro) => (
            <div className="cartCard" key={pro.id}>
              <img src={pro.image} alt={pro.title} />
              <h5>{pro.title}</h5>
              <h5>${pro.price}</h5>
              <button className="btn" onClick={() => handleRemove(pro.id,pro)}>
                Remove
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Cart;
