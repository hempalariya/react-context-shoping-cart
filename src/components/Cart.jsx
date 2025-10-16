import React from "react";
import CartItem from "./CartItem";

export default function Cart({ dispatch, cart }) {
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
                return <CartItem item={item} dispatch={dispatch} />;
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
