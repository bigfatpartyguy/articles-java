import React, {useState} from 'react';
import Button from '../Button';
import {BiSun, BiMoon} from 'react-icons/bi';
import styles from './ColorModeButton.module.scss';

const ColorModeButton = ({mode, setMode}) => {
  return (
    <Button
      type="button"
      btnRole={mode === 'light' ? 'circle--light' : 'circle--dark'}
      onClick={() => setMode(prev => (prev === 'light' ? 'dark' : 'light'))}
    >
      <BiSun
        size="1.6em"
        className={`${styles.icon} ${
          mode === 'light' ? styles['sun-visible'] : styles['sun-invisible']
        }`}
      />
      <BiMoon
        size="1.6em"
        className={`${styles.icon} ${
          mode === 'dark' ? styles['moon-visible'] : styles['moon-invisible']
        }`}
      />
    </Button>
  );
};

export default ColorModeButton;
