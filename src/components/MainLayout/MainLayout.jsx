import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import {getToken, clearToken} from '../../services/storage';
import ThemeContext from '../../contexts/ThemeContext';
import ColorModeButton from '../Button/ColorModeButton/ColorModeButton';
import Button from '../Button';
import styles from './MainLayout.module.scss';

const MainLayout = ({children}) => {
  const {colorMode, setColorMode} = useContext(ThemeContext);
  return (
    <>
      <header className={styles.header}>
        <h1>Sitename</h1>
        <div className={styles['header__buttons']}>
          <ColorModeButton mode={colorMode} setMode={setColorMode} />
          {getToken() && (
            <Button
              btnRole={colorMode === 'dark' ? 'primary--dark' : 'primary'}
              onClick={() => {
                clearToken();
                window.location.assign('/');
              }}
            >
              Log out
            </Button>
          )}
        </div>
      </header>
      <main className={styles['main-layout']}>{children}</main>
    </>
  );
};

export default MainLayout;
