import { useState } from "react";

function CardForm({ setShowForm, setShowMsg }) {
  const [ card, setCard ] = useState({
    name: "",
    number: "",
    expmonth: "",
    expyear: "",
    cvc: ""
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    console.log("name: " + name, "value: " + value);

    setCard({[name]: value});
  }

  const handleSubmit = (e) => {
    e.prevent.default();

    setCard({name: "", number: "", expmonth: "", expyear: "", cvc: ""});
  }

  const handleClick = (e) => {
    setShowForm(false);
    setShowMsg(true);
  }


  return (
    <form className="form__cntr"
          onSubmit={handleSubmit}
    >
      <div className="form__name">
        <label>Cardholder Name</label>
        <input  type="text" 
                name="name"
                value={card.name} 
                placeholder="e.g. Jane Appleseed" 
                required 
                onChange={handleChange}
        />
      </div>

      <div className="form__number">
        <label>Card Number</label>
        <input  type="number" 
                name="number" 
                value={card.number}
                placeholder="e.g. 1234 5678 9123 0000" 
                required
                onChange={handleChange}
        />
      </div>

      <div className="form__exp">
        <label>Exp. Date (MM/YY)</label>
        <input  className="form__exp--month" 
                type="number" 
                name="expmonth"
                value={card.expmonth}
                placeholder="MM" 
                pattern="[01 - 12]" 
                required 
                onChange={handleChange}
        />
        <input  className="form__exp--year" 
                type="number" 
                name="expyear" 
                value={card.expyear}
                placeholder="YY" 
                maxLength="2"
                required 
                onChange={handleChange}
        />
        
      </div>

      <div className="form__cvc">
        <label>CVC</label>
        <input  type="number" 
                name="cvc" 
                value={card.value}
                placeholder="e.g. 123" 
                maxLength="3" 
                required 
                onChange={handleChange}
        />
      </div>

      <button 
        type="submit"
        onClick={handleClick}
      >Confirm</button>
    </form>
  );
};

export default CardForm;