import React from "react";
import useProducts from "../../Hooks/useProducts";

const Orders = () => {
  const [products, setProducts] = useProducts();
  return (
    <div>
      <h1>order{products.length}</h1>
    </div>
  );
};

export default Orders;
