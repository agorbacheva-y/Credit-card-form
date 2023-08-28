function CardForm() {
  return (
    <form>
      <div className="form__name">
        <label>Cardholder Name</label>
        <input type="text" name="name" placeholder="e.g. Jane Appleseed" />
      </div>

      <div className="form__number">
        <label>Card Number</label>
        <input type="number" name="number" placeholder="e.g. 1234 5678 9123 0000" />
      </div>

      <div className="form__exp">
        <label>Exp. Date (MM/YY)</label>
        <input type="number" name="expmonth" placeholder="MM" />
        <input type="number" name="expyear" placeholder="YY" />
      </div>

      <div className="form__cvc">
        <label>CVC</label>
        <input type="number" name="cvc" placeholder="e.g. 123" />
      </div>

      <button type="submit">Confirm</button>
    </form>
  );
};

export default CardForm;