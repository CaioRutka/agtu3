// components/SplashScreen.js
import React from 'react';
import Image from 'next/image';
import styles from './SplashScreen.module.css';
import Logo from '../../assets/images/logo-icon.png';

const SplashScreen = () => {
  return (
    <div className={styles.splash}>
      <div className={styles.glow}>
        <Image
          src={Logo}
          alt="Logo"
          width={50}
          height={50}
        />
      </div>
    </div>
  );
};

export default SplashScreen;
