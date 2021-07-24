import React from "react";
import "../../App.css";
import SingleCart from "../SingleCart";

const Cart = () => {
  return (
    <div className='products__container'>
      {/* <h1>You Total Amount is {price}</h1> */}

      <SingleCart />
    </div>
  );
};

export default Cart;
