import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';

export default function Button(props) {
  const {type, btnRole, text, onClick, disabled, ariaLabel} = props;
  /* eslint-disable react/button-has-type */
  const handleClick = evt => {
    evt.target.blur();
    onClick(evt);
  };
  return (
    <button
      disabled={disabled}
      className={styles[btnRole]}
      type={type}
      onClick={handleClick}
      value={text}
      aria-label={ariaLabel}
    >
      {text}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.string,
  btnRole: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  ariaLabel: PropTypes.string,
};

Button.defaultProps = {
  type: 'button',
  btnRole: 'primary',
  text: 'Button',
  onClick: () => {},
  disabled: false,
  ariaLabel: null,
};
