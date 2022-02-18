import React, {useState} from 'react';
import Button from '../Button';
import {BiSun, BiMoon} from 'react-icons/bi';
import styles from './ColorModeButton.module.scss';

function useDarkMode() {
  const preferDarkQuery = '(prefers-color-scheme: dark)';
  const [mode, setMode] = React.useState(
    () =>
      window.localStorage.getItem('colorMode') ||
      (window.matchMedia(preferDarkQuery).matches ? 'dark' : 'light')
  );

  React.useEffect(() => {
    const mediaQuery = window.matchMedia(preferDarkQuery);
    const handleChange = () => setMode(mediaQuery.matches ? 'dark' : 'light');
    mediaQuery.addListener(handleChange);
    return () => mediaQuery.removeListener(handleChange);
  }, []);

  React.useEffect(() => {
    window.localStorage.setItem('colorMode', mode);
  }, [mode]);

  return [mode, setMode];
}

const ColorModeButton = () => {
  const [mode, setMode] = useDarkMode();
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
          mode === 'light' ? styles['moon-invisible'] : styles['moon-visible']
        }`}
      />
    </Button>
  );
};

export default ColorModeButton;
