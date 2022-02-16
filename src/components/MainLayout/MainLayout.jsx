import React from 'react';
import {Link} from 'react-router-dom';
import {clearToken} from '../../services/storage';
import Button from '../Button';
import styles from './MainLayout.module.scss';

const MainLayout = ({children}) => {
  return (
    <>
      <header className={styles.header}>
        <h1>Sitename</h1>
        <div className={styles['header__buttons']}>
          <Button
            text="Log out"
            btnRole="primary"
            onClick={() => {
              clearToken();
              window.location.assign('/');
            }}
          />
        </div>
      </header>
      <main className={styles['main-layout']}>{children}</main>
    </>
  );
};

export default MainLayout;
