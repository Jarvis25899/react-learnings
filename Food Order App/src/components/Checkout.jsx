import Input from "./Input";

export default function Checkout({ totalPrice, closeModal }) {
  function onSubmitOrder(event) {
    event.preventDefault();
    const fd = new FormData(event.target);
    const data = Object.fromEntries(fd.entries());
    console.log(data);
  }

  return (
    <form onSubmit={onSubmitOrder}>
      <p>Total Amount: {totalPrice}</p>
      <Input
        type="text"
        label="Full Name"
        id="fullName"
        name="fullName"
        required
      />
      <Input
        type="email"
        label="E-Mail Address"
        id="email"
        name="email"
        required
      />
      <Input type="text" label="Street" id="street" name="street" required />
      <div className="control-row">
        <Input
          type="text"
          label="Postal Code"
          id="postalCode"
          name="postalCode"
          required
        />
        <Input type="text" label="City" id="city" name="city" required />
      </div>
      <div className="modal-actions">
        <button type="reset" className="text-button" onClick={closeModal}>
          Close
        </button>
        <button className="button">Submit Order</button>
      </div>
    </form>
  );
}
