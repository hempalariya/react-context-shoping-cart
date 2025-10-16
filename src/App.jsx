import React, { useEffect, useReducer } from "react";
import Header from "./components/Header";
import Loading from "./components/Loading";
import List from "./components/List";
import Cart from "./components/Cart";

import { cartTotal } from "./helper/total";

import { CartContext } from "./store/shoping-cart-context";

const initialState = {
  products: [],
  status: "loading", // "loading" | "ready" | "error"
  cart: { cartItems: [], cartTotal: 0 },
  cartOpen: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "ready":
      return { ...state, status: "ready", products: action.payload };

    case "error":
      return { ...state, status: "error" };

    case "addToCart": {
      console.log(state.cart);
      const item = action.payload;
      const existingItem = state.cart.cartItems.find(
        (cartItem) => cartItem.id === item.id
      );

      let updatedCartItems;
      if (existingItem) {
        updatedCartItems = state.cart.cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        updatedCartItems = [...state.cart.cartItems, { ...item, quantity: 1 }];
      }

      return {
        ...state,
        cart: {
          cartItems: updatedCartItems,
          cartTotal: cartTotal(updatedCartItems),
        },
      };
    }

    case "cartOpen":
      return { ...state, cartOpen: true };

    case "cartClose":
      return { ...state, cartOpen: false };

    case "itemQuantity": {
      const { id, add } = action.payload;
      const updatedCartItems = state.cart.cartItems
        .map((cartItem) =>
          cartItem.id === id
            ? { ...cartItem, quantity: cartItem.quantity + add }
            : cartItem
        )
        .filter((cartItem) => cartItem.quantity > 0);

      return {
        ...state,
        cart: {
          cartItems: updatedCartItems,
          cartTotal: cartTotal(updatedCartItems),
        },
      };
    }

    case "removeItem": {
      const updatedCartItems = state.cart.cartItems.filter(
        (cartItem) => cartItem.id !== action.payload
      );

      return {
        ...state,
        cart: {
          cartItems: updatedCartItems,
          cartTotal: cartTotal(updatedCartItems),
        },
      };
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
    <CartContext.Provider value={{ products, status, cartOpen, cart, dispatch }}>
      <div className="container">
        <Header/>
        <main>
          {status === "loading" && <Loading />}
          {status === "ready" && (
            <List />
          )}
          {status === "error" && (
            <p>Failed to load products. Please try again.</p>
          )}
        </main>
        {cartOpen && <Cart />}
      </div>
    </CartContext.Provider>
  );
}
