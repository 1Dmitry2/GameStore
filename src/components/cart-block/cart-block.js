import React, { useState } from "react";
import { useSelector } from "react-redux";
import { BiCartAlt } from "react-icons/bi";
import { calcTotalPrice } from "../utils";
import { CartMenu } from "../cart-menu";
import { ItemsInCart } from "../items-in-cart";
import "./cart-block.css";
export const CartBlock = () => {
  const [isCartMenuVisible, setIsCartMenuVisible] = useState(false);
  const items = useSelector((state) => state.cart.itemsInCart);
  const totalPrice = calcTotalPrice(items);
  return (
    <div className="cart-block">
      <ItemsInCart quantity={items.lenght}/>
      <BiCartAlt
        size={25}
        className="cart-block__icon"
        onClick={() => setIsCartMenuVisible(!isCartMenuVisible)}
      />
      {totalPrice > 0 ? (
        <span className="card-block__total-price"> {totalPrice} руб. </span>
      ) : null}
      {isCartMenuVisible && <CartMenu items={items} onClick={() => null} />}
    </div>
  );
};
