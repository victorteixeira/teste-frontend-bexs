import React from 'react';
import './style.scss';

import Button from 'components/atoms/Button';

const DataCard = props => {

  const changeNumberCard = e => {
    e.preventDefault();
    let value = e.target.value.replace(/\s/g, '');

    if (value.length !== 0 && value.length % 4 === 0 && value.length < 16) {
      e.target.value = e.target.value + ' ';
    }
    props.setNumberCard(e.target.value);

    if (e.target.value.length === 19) {
      e.target.closest('label').nextElementSibling.querySelector('input').focus();
    }

    const el = document.querySelector('.card');
    if (value.length >= 4) {
      el.classList.add('active');
    } else {
      el.classList.remove('active');
    }
  }

  const changeOwnerCard = e => {
    e.preventDefault();

    props.setOwnerCard(e.target.value);
  }

  const changeExpirationCard = e => {
    e.preventDefault();

    props.setExpirationCard(e.target.value);
  }

  const changeCvvCard = e => {
    e.preventDefault();

    props.setCvvCard(e.target.value);
  }

  const focus = e => {
    let cvv = e.target.name.includes('cvv');
    const el = document.querySelector('.card');

    if (cvv) {
      el.classList.add('back');
    } else {
      el.classList.remove('back');
    }
  }

  return (
    <div className="dataCard">
      <label className="dataCard_label">
        <div className="dataCard_label_title">Número do cartão</div>
        <input name="dataCard_label_number" onChange={changeNumberCard} onFocus={focus} maxLength="19"/>
        <div className="dataCard_label_txt">Número de cartão inválido</div>
      </label>

      <label className="dataCard_label">
        <div className="dataCard_label_title">Nome (igual ao cartão)</div>
        <input name="dataCard_label_owner" onChange={changeOwnerCard} onFocus={focus}/>
        <div className="dataCard_label_txt">Insira seu nome completo</div>
      </label>

      <label className="dataCard_label lb_half">
        <div className="dataCard_label_title">Validade</div>
        <input name="dataCard_label_expiration" onChange={changeExpirationCard} onFocus={focus} maxLength="5"/>
        <div className="dataCard_label_txt">Data inválida</div>
      </label>

      <label className="dataCard_label lb_half no-margin">
        <div className="dataCard_label_title">CVV</div>
        <input name="dataCard_label_cvv" onChange={changeCvvCard} onFocus={focus} maxLength="4"/>
        <div className="dataCard_label_txt">Código inválido</div>
      </label>

      <label className="dataCard_label">
        <div className="dataCard_label_title"></div>
        <select>
          <option>Número de parcelas</option>
        </select>
        <div className="dataCard_label_txt">Insira seu nome completo</div>
      </label>

      <Button/>
    </div>
  );
}

export default DataCard;
