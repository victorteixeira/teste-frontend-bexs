import React, { useState } from 'react';
import './style.scss';

import Steps from 'components/molecules/Steps';
import Card from 'components/molecules/Card';
import DataCard from 'components/molecules/DataCard';

const Checkout = props => {

  const [numberCard, setNumberCard] = useState("**** **** **** ****");
  const [ownerCard, setOwnerCard] = useState("NOME DO TITULAR");
  const [expirationCard, setExpirationCard] = useState("00/00");
  const [cvvCard, setCvvCard] = useState("***");

  return (
  <div className="checkout">
    <div className="checkout_bgBar">
      <div className="checkout_bgBar_changeMethod">
        <p className="back arrow">&lsaquo;</p>
        <p>Alterar forma de pagamento</p>
      </div>
      <div className="checkout_bgBar_addMethod">
        <img src="/static/images/ico_newcard.svg" alt=""/>
        Adicione um novo cartão de crédito
      </div>
      <Card
        numberCard={numberCard}
        ownerCard={ownerCard}
        expirationCard={expirationCard}
        cvvCard={cvvCard}
      />
    </div>
    <div className="checkout_data">
      <Steps/>
      <DataCard
        setNumberCard={setNumberCard}
        setOwnerCard={setOwnerCard}
        setExpirationCard={setExpirationCard}
        setCvvCard={setCvvCard}
      />
    </div>
  </div>
  );
}

export default Checkout;
