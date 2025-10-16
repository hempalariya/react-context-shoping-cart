import React, { useContext } from "react";
import { CartContext } from "../store/shoping-cart-context";
import Card from "./Card";

export default function List() {
  
  const {products , dispatch} = useContext(CartContext)

  return (
    <div className="list-container">
        
        {
            products.map(product => {
                return <Card product = {product} key = {product.id} dispatch = {dispatch}/>
            })
        }
      

      
    </div>
  );
}
