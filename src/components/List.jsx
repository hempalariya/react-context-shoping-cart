import React from "react";
import Card from "./Card";

export default function List(data) {
   
  return (
    <div className="list-container">
        
        {
            data.data.map(product => {
                console.log(product)
                return <Card img = {product.image_url} key = {product.id}/>
            })
        }
      

      
    </div>
  );
}
