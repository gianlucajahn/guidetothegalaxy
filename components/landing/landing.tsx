import * as React from 'react';
import Hero from '../hero/hero';
import Manifest from '../manifest/manifest';
import styles from './landing.module.scss';

export default function Landing () {

  return (
    <div className={styles.container}>
        <div><Hero /></div>
        <div><Manifest /></div>
    </div>
  );
}
