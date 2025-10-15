import React from "react";
import Card from "./Card";

export default function List({products}) {
   console.log(products)
  return (
    <div className="list-container">
        
        {
            products.map(product => {
                return <Card product = {product} key = {product.id}/>
            })
        }
      

      
    </div>
  );
}
