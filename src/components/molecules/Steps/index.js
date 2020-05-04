import React from 'react';
import './style.scss';


const Steps = props => {
  return (
    <div className="steps">
      <div className="steps_step">
        <i>1</i>
        <span>Carrinho</span>
      </div>
      <p className="arrow">&rsaquo;</p>
      <div className="steps_step">
        <i>2</i>
        <span>Pagamento</span>
      </div>
      <p className="arrow">&rsaquo;</p>
      <div className="steps_step">
        <i>3</i>
        <span>Confirmação</span>
      </div>
    </div>
  );
}

export default Steps;
