import * as React from 'react';
import Hero_de from '../hero/hero_de';
import Manifest_de from '../manifest/manifest_de';
import styles from './landing.module.scss';

export default function Landing_de () {

  return (
    <div className={styles.container}>
        <div><Hero_de /></div>
        <div><Manifest_de /></div>
    </div>
  );
}
