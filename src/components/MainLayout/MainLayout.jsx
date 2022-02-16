import React from 'react';
import Button from '../Button';
import styles from './MainLayout.module.scss';

const MainLayout = ({children}) => {
  return (
    <main className={styles['main-layout']}>
      <header>
        <h1>Sitename</h1>
        <Button text="New article" btnRole="primary" />
      </header>
      {children}
    </main>
  );
};

export default MainLayout;
