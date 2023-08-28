function CardForm() {
  return (
    <form className="form__cntr">
      <div className="form__name">
        <label>Cardholder Name</label>
        <input type="text" name="name" placeholder="e.g. Jane Appleseed" required />
      </div>

      <div className="form__number">
        <label>Card Number</label>
        <input type="number" name="number" placeholder="e.g. 1234 5678 9123 0000" maxlength="16" required />
      </div>

      <div className="form__exp">
        <label>Exp. Date (MM/YY)</label>
        <input className="form__exp--month" type="number" name="expmonth" placeholder="MM" required />
        <input className="form__exp--year" type="number" name="expyear" placeholder="YY" required />
        
      </div>

      <div className="form__cvc">
        <label>CVC</label>
        <input type="number" name="cvc" placeholder="e.g. 123" required />
      </div>

      <button type="submit">Confirm</button>
    </form>
  );
};

export default CardForm;