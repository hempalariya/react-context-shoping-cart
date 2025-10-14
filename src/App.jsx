import React, { useEffect, useReducer } from "react";
import Header from "./components/Header";
import Loading from "./components/Loading";
import List from "./components/List";

const initialState = {
  products: [],
  status: 'loading', //loading, ready
  cart: []
}

function reducer(state, action){
  switch(action.type){
    case 'ready':
      return {
        ...state,
        status: 'ready',
        products: action.payload
      }
  }
}


export default function App() {

  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:8000/products");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        dispatch({
          type: 'ready',
          payload: data
      })
      } catch (error) {
        console.error("Failed to fetch products:", error.message);
      } finally {
        //set status to false for loading
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <Header />
      <main>
        {state.status === 'loading' && <Loading />}
        {state.status === 'ready' && <List data = {state.products}/>}
      </main>
    </div>
  );
}
