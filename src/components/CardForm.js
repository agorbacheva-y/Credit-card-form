function CardForm() {



  return (
    <form className="form__cntr">
      <div className="form__name">
        <label>Cardholder Name</label>
        <input type="text" name="name" placeholder="e.g. Jane Appleseed" required />
      </div>

      <div className="form__number">
        <label>Card Number</label>
        <input type="text" name="number" placeholder="e.g. 1234 5678 9123 0000" pattern="[0 - 9]" required />
      </div>

      <div className="form__exp">
        <label>Exp. Date (MM/YY)</label>
        <input className="form__exp--month" type="text" name="expmonth" placeholder="MM" pattern="[01 - 12]" required />
        <input className="form__exp--year" type="text" name="expyear" placeholder="YY" maxlength="2" required />
        
      </div>

      <div className="form__cvc">
        <label>CVC</label>
        <input type="text" name="cvc" placeholder="e.g. 123" maxlength="3" required />
      </div>

      <button type="submit">Confirm</button>
    </form>
  );
};

export default CardForm;