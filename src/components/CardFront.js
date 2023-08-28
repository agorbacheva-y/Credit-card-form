import bgCardFront from '../images/bgCardFront.png';
import cardLogo from '../images/cardLogo.svg';

function CardFront() {
  return (
    <div className="card__front">
      <img src={bgCardFront} alt="front of card" />
      <div className="card__front__cntr">
        <img src={cardLogo} />
        <div className="card__front__text">
          <p className="card__front__text--nr">0000 0000 0000 0000</p>
          <div className="card__front__text--name">
            <span>Jane Appleseed</span>
            <span>00/00</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardFront;