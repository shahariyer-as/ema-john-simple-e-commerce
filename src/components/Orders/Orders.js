import React from "react";
import { Link, useNavigate } from "react-router-dom";
import useCart from "../../Hooks/useCart";
import useProducts from "../../Hooks/useProducts";
import { removeFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";
import "./Orders.css";

const Orders = () => {
  const [products, setProducts] = useProducts();
  const [cart, setCart] = useCart(products);
  let navigate = useNavigate();

  // remove order item handler
  const handleRemoveProduct = (products) => {
    const rest = cart.filter((product) => product.id !== products.id);
    // console.log(rest);
    setCart(rest);
    removeFromDb(products.id);
  };

  return (
    <div className="shop-container">
      <div className="review-items-container">
        {cart?.map((product) => (
          <ReviewItem
            key={product.id}
            product={product}
            handleRemoveProduct={handleRemoveProduct}
          ></ReviewItem>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}>
          <button onClick={() => navigate("/inventory")}>
            Proceed checkOut
          </button>
        </Cart>
      </div>
    </div>
  );
};

export default Orders;
