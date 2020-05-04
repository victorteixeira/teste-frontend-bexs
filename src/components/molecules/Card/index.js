import React from 'react';
import './style.scss';

const Card = props => {
  return (
    <div className="card">
      <div className="card_inner">

        <div className="card_front">
          <p className="card_front_brand"><img src="/static/images/visa.png" alt=""/></p>
          <p className="card_front_number">{props.numberCard}</p>
          <p className="card_front_owner">{props.ownerCard}</p>
          <p className="card_front_expiration">{props.expirationCard}</p>
        </div>

        <div className="card_back">
          <p className="card_back_cvv">{props.cvvCard}</p>
        </div>

      </div>
    </div>
  );
}

export default Card;
