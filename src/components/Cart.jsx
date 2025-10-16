import React, { useContext } from "react";
import { CartContext } from "../store/shoping-cart-context";
import CartItem from "./CartItem";

export default function Cart() {

    const {cart, dispatch} = useContext(CartContext)


  return (
    <>
      <div
        className="blur"
        onClick={() => {
          dispatch({
            type: "cartClose",
          });
        }}
      ></div>

      <div className="cart">
        <div className="cart-header">
          <h3>Cart</h3>
        </div>
        {cart.cartItems.length === 0 && <h3 className="no-cart-items">Cart is empty.</h3>}
        {cart.cartItems.length > 0 && (
          <div className="cart-body">
            <div className="cart-items">
              {cart.cartItems.map((item) => {
                return <CartItem item={item} dispatch={dispatch} key={item.product_name}/>;
              })}
            </div>
            <div className="cart-total">
              <p>Cart total: {cart.cartTotal}/-</p>
            </div>
            <div className="cart-footer">
              <button>Checkout</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
