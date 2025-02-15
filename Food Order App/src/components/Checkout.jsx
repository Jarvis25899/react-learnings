import { useState } from "react";
import { placeOrder } from "../http";
import Input from "./Input";

export default function Checkout({ totalPrice, closeModal, onSuccess, items }) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  function onSubmitOrder(event) {
    event.preventDefault();
    const fd = new FormData(event.target);
    const data = Object.fromEntries(fd.entries());

    async function submitOrder() {
      setIsLoading(true);
      try {
        const order = {
          customer: data,
          items,
        };
        await placeOrder({ order });
        onSuccess();
      } catch (error) {
        setError({
          message:
            error.message || "Could not place order. Please try again later",
        });
      }
      setIsLoading(false);
    }
    submitOrder();
  }

  return (
    <>
      <form onSubmit={onSubmitOrder}>
        <p>Total Amount: {totalPrice}</p>
        <Input
          type="text"
          label="Full Name"
          id="name"
          name="name"
          required
          disabled={isLoading}
        />
        <Input
          type="email"
          label="E-Mail Address"
          id="email"
          name="email"
          required
          disabled={isLoading}
        />
        <Input
          type="text"
          label="Street"
          id="street"
          name="street"
          required
          disabled={isLoading}
        />
        <div className="control-row">
          <Input
            type="text"
            label="Postal Code"
            id="postalCode"
            name="postal-code"
            required
            disabled={isLoading}
          />
          <Input
            type="text"
            label="City"
            id="city"
            name="city"
            required
            disabled={isLoading}
          />
        </div>
        {error && <p className="error">{error.message}</p>}
        <div className="modal-actions">
          <button
            type="reset"
            className="text-button"
            onClick={closeModal}
            disabled={isLoading}
          >
            Close
          </button>
          <button className="button" disabled={isLoading}>
            {isLoading ? "Submitting..." : "Submit Order"}
          </button>
        </div>
      </form>
    </>
  );
}
