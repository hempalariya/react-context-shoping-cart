import React, { useEffect, useReducer } from "react";
import Header from "./components/Header";
import Loading from "./components/Loading";
import List from "./components/List";
import Cart from "./components/Cart";

const initialState = {
  products: [],
  status: "loading", // "loading" | "ready" | "error"
  cart: [],
  cartOpen: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "ready":
      return { ...state, status: "ready", products: action.payload };
    case "error":
      return { ...state, status: "error" };
    case "addToCart": {
      console.log(state.cart)
      const item = action.payload
      const existingItem = state.cart.find((cartItem) => item.id === cartItem.id)
      if(existingItem){
        return{
          ...state,
          cart: state.cart.map((cartItem) => {
            return cartItem.id ===  item.id ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem
          })
        }
      }
      return{
        ...state, 
        cart: [...state.cart, {...item, quantity: 1}]
      }
      
    };
    case "cartOpen":
      return { ...state, cartOpen: true };
    case "cartClose":
      return { ...state, cartOpen: false };
      case "itemQuantity": {

        return {
          ...state,
          cart: state.cart.map((cartItem) => cartItem.id === action.payload.id ? {...cartItem, quantity: cartItem.quantity + action.payload.add} : cartItem)
        }
      }
    default:
      return state;
  }
}

export default function App() {
  const [{ products, status, cartOpen, cart }, dispatch] = useReducer(
    reducer,
    initialState
  );

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") dispatch({ type: "cartClose" });
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:8000/products");
        if (!response.ok) throw new Error(`HTTP error! ${response.status}`);
        const data = await response.json();
        dispatch({ type: "ready", payload: data });
      } catch (error) {
        console.error("Failed to fetch products:", error.message);
        dispatch({ type: "error" });
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="container">
      <Header dispatch={dispatch} itemCount = {cart.length}/>
      <main>
        {status === "loading" && <Loading />}
        {status === "ready" && <List products={products} dispatch={dispatch} />}
        {status === "error" && (
          <p>Failed to load products. Please try again.</p>
        )}
      </main>
      {cartOpen && <Cart dispatch={dispatch} cart={cart} />}
    </div>
  );
}
