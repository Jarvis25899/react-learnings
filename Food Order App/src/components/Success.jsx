export default function Success({ closeCheckout }) {
  return (
    <>
      <p>Your order was submitted successfully.</p>
      <p>
        We will get back to you with more details via email within the next few
        minutes.
      </p>
      <div className="modal-actions">
        <button className="button" onClick={closeCheckout}>
          Okay
        </button>
      </div>
    </>
  );
}
