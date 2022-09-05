import React from "react";
import useCart from "../../Hooks/useCart";
import useProducts from "../../Hooks/useProducts";

const Orders = () => {
  const [products, setProducts] = useProducts();
  const [cart, setCart] = useCart(products);
  return (
    <div>
      <h1>order{products.length}</h1>
      <p>cart has{cart.length}</p>
    </div>
  );
};

export default Orders;
