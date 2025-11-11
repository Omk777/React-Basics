import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../store/cartSlice"; 

const Cart = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart); 

  const handleRemove = (id) => {
    dispatch(remove(id)); 
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
              <button className="btn" onClick={() => handleRemove(pro.id)}>
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
