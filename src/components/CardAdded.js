import complete from "../images/complete.svg";

function CardAdded() {
  return (
    <div className="message__cntr">
      <img src={complete} alt="complete"/>
      <div className="message__text">
        <h1>Thank you!</h1>
        <p>We've added your card details</p>
      </div>  
      <button>Continue</button>
    </div>
  );
};

export default CardAdded;
