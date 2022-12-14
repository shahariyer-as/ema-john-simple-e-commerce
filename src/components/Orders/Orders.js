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
  const [cart, setCart] = useCart();
  let navigate = useNavigate();

  // remove order item handler
  const handleRemoveProduct = (products) => {
    const rest = cart.filter((product) => product._id !== products._id);
    // console.log(rest);
    setCart(rest);
    removeFromDb(products._id);
  };

  return (
    <div className="shop-container">
      <div className="review-items-container">
        {cart?.map((product) => (
          <ReviewItem
            key={product._id}
            product={product}
            handleRemoveProduct={handleRemoveProduct}
          ></ReviewItem>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}>
          <button onClick={() => navigate("/shipment")}>
            Proceed Shipping
          </button>
        </Cart>
      </div>
    </div>
  );
};

export default Orders;
