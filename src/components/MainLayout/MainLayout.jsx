import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import {clearToken} from '../../services/storage';
import ThemeContext from '../../contexts/ThemeContext';
import Button from '../Button';
import styles from './MainLayout.module.scss';

const MainLayout = ({children}) => {
  const {colorMode} = useContext(ThemeContext);
  return (
    <>
      <header className={styles.header}>
        <h1>Sitename</h1>
        <div className={styles['header__buttons']}>
          <Button
            btnRole={colorMode === 'dark' ? 'primary--dark' : 'primary'}
            onClick={() => {
              clearToken();
              window.location.assign('/');
            }}
          >
            Log out
          </Button>
        </div>
      </header>
      <main className={styles['main-layout']}>{children}</main>
    </>
  );
};

export default MainLayout;
