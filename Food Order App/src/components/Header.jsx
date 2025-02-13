import { useContext, useRef, useState } from "react";
import reactFoodLogo from "../assets/logo.jpg";
import Cart from "./Cart";
import Modal from "./Modal";
import { CartContext } from "../store/cart-context";
import CartModal from "./CartModal";

export default function Header() {
  const modal = useRef();
  const { items } = useContext(CartContext);

  const totalItems = items.reduce((acc, item) => acc + item.qty, 0);

  function openCart() {
    modal.current.open();
  }

  let modalActions = <button className="text-button">Close</button>;

  if (totalItems > 0) {
    modalActions = (
      <>
        <button className="text-button">Close</button>
        <button className="button">Checkout</button>
      </>
    );
  }

  return (
    <>
      <CartModal ref={modal} title="Your Cart" actions={modalActions} />
      <header id="main-header">
        <div id="title">
          <img src={reactFoodLogo} alt="React Food" />
          <h1>React Food</h1>
        </div>
        <nav>
          <button className="button" onClick={openCart}>
            Cart({totalItems})
          </button>
        </nav>
      </header>
    </>
  );
}
