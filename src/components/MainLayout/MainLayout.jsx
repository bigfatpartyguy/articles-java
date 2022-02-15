import React from 'react';
import styles from './MainLayout.module.scss';

const MainLayout = ({children}) => {
  return <main className={styles['main-layout']}>{children}</main>;
};

export default MainLayout;
