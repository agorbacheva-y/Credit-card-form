import complete from "../images/complete.svg";

function CardAdded({ setShowForm, setShowMsg }) {
  const handleClick = () => {
    setShowForm(true);
    setShowMsg(false);
  }

  return (
    <div className="message__cntr">
      <img src={complete} alt="complete"/>
      <div className="message__text">
        <h1>Thank you!</h1>
        <p>We've added your card details</p>
      </div>  
      <button
        type="submit"
        onClick={handleClick}
      >Continue</button>
    </div>
  );
};

export default CardAdded;
