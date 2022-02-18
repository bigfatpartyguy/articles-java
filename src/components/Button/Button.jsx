import React, {useRef} from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';

export default function Button(props) {
  const {type, value, btnRole, onClick, disabled, ariaLabel, children} = props;
  const btnRef = useRef();
  /* eslint-disable react/button-has-type */
  const handleClick = evt => {
    btnRef.current.blur();
    onClick(evt);
  };
  return (
    <button
      ref={btnRef}
      disabled={disabled}
      className={styles[btnRole]}
      type={type}
      onClick={handleClick}
      value={value}
      aria-label={ariaLabel}
    >
      {children}
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
