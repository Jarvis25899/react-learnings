import { useContext, useState } from "react";
import reactFoodLogo from "../assets/logo.jpg";
import Cart from "./Cart";
import { CartContext } from "../store/cart-context";
import Modal from "./Modal";
import Checkout from "./Checkout";
import Success from "./Success";

export default function Header() {
  const [isCartOpen, setIsCartOpen] = useState();
  const [isCheckoutOpen, setIsCheckoutOpen] = useState();
  const [orderSubmitted, setOrderSubmitted] = useState(false);
  const { items } = useContext(CartContext);

  const totalItems = items.reduce((acc, item) => acc + item.qty, 0);
  const totalPrice = items.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );
  const formattedTotalPrice = `$${totalPrice.toFixed(2)}`;

  function openCart() {
    setIsCartOpen(true);
  }

  function closeCart() {
    setIsCartOpen(false);
  }

  function goToCheckout() {
    setOrderSubmitted(false);
    setIsCheckoutOpen(true);
  }

  function closeCheckout() {
    setIsCheckoutOpen(false);
  }

  function openSuccesMessage() {
    setOrderSubmitted(true);
    setIsCheckoutOpen(false);
  }

  let modalActions = <button className="text-button">Close</button>;

  if (totalItems > 0) {
    modalActions = (
      <>
        <button className="text-button">Close</button>
        <button className="button" onClick={goToCheckout}>
          Go to Checkout
        </button>
      </>
    );
  }

  return (
    <>
      {isCartOpen && (
        <Modal title="Your Cart" open={isCartOpen} onClose={closeCart}>
          <Cart actions={modalActions} totalPrice={formattedTotalPrice} />
        </Modal>
      )}
      {isCheckoutOpen && (
        <Modal title="Checkout" open={isCheckoutOpen} onClose={closeCheckout}>
          <Checkout
            totalPrice={formattedTotalPrice}
            closeModal={closeCheckout}
            onSuccess={openSuccesMessage}
            items={items}
          />
        </Modal>
      )}
      {orderSubmitted && (
        <Modal
          title="Success!"
          open={orderSubmitted}
          onClose={() => setOrderSubmitted(false)}
        >
          <Success />
        </Modal>
      )}
      <header id="main-header">
        <div id="title">
          <img src={reactFoodLogo} alt="React Food" />
          <h1>React Food</h1>
        </div>
        <nav>
          <button className="text-button" onClick={openCart}>
            Cart({totalItems})
          </button>
        </nav>
      </header>
    </>
  );
}
