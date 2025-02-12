import "./Payment.css";
import { useState } from "react";

function Payment() {
  const [paymentMethod, setPaymentMethod] = useState("");
  const [duration, setDuration] = useState("");
  const [total, setTotal] = useState(0);

  

  const handleMethodChange = (event) => {
    const method = event.target.value;
    setPaymentMethod(method);
    if (duration) {
      setTotal(calculateTotal(method, duration));
    }
  };

  const handleDurationChange = (event) => {
    const duration = event.target.value;
    setDuration(duration);
    if (paymentMethod) {
      setTotal(calculateTotal(paymentMethod, duration));
    }
  };

  return (
    <div className="payment-zone">
      <div className="payment-container">
        <p className="payment-header">Choose your preferred payment method</p>
        <select
          name="payment-method"
          id="payment-method"
          className="payment-select"
          onChange={handleMethodChange}
          value={paymentMethod}
        >
          <option value="" disabled>Select a payment method</option>
          <option value="mpesa">Mpesa</option>
          <option value="bank">Bank</option>
          <option value="bank-transfer">Bank Transfer</option>
          <option value="credit-card">Credit Card</option>
        </select>
        <label htmlFor="duration" className="payment-label">Choose duration (in months)</label>
        <input
          type="number"
          id="duration"
          name="duration"
          className="payment-input"
          placeholder="Enter duration"
          value={duration}
          onChange={handleDurationChange}
        />
        <div className="payment-total">
          <p>Total Amount: <span>${total ? "100000": "100000"}</span></p>
        </div>
        <button className="payment-button" >PAY</button>
      </div>
    </div>
  );
}

export default Payment;
