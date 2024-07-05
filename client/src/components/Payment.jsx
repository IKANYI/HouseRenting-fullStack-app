import "./Major.css";
function Payment() {
  return (
    <div className="payment-zone">
      <div>
        <p>Choose your preferred payment method</p>
        <select name="" id="">
          <p>mpesa</p>
          <p>bank</p>
          <p>bank transfer</p>
          <p>credit card</p>
        </select>
        <label htmlFor="choice">Choose duration</label>
        <input type="text" />
        <button>PAY</button>
      </div>
    </div>
  );
}
export default Payment;
