import { createPortal } from "react-dom";

export default function Success({ closeCheckout }) {
  return (
    <>
      <p>Your order was submitted successfully.</p>
      <p>
        We will get back to you with more details via email within the next few
        minutes.
      </p>
      <form method="dialog" className="modal-actions">
        <button className="button">Okay</button>
      </form>
    </>
  );
}
