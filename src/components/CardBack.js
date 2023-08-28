import bgCardBack from '../images/bgCardBack.png';

function CardBack() {
  return (
    <div className="card__back">
      <img className="card__back-img" src={bgCardBack} alt='back of card' />
    </div>
  );
};

export default CardBack;