import React, { useEffect } from "react";
import Header from "./components/Header";

export default function App() {
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:8000/products");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);
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
      <main></main>
    </div>
  );
}
