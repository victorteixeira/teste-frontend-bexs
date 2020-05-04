import React from 'react';
import './style.scss';

const Button = props => {
  return (
    <button
      className="button"
      onClick={props.onClick}
    >
        CONTINUAR
    </button>
  );
}

Button.defaultProps = {
  className: '',
  onClick: () => {}
}

export default Button;
