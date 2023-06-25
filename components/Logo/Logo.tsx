import Image from 'next/image';
import * as React from 'react';
import css from './Logo.module.scss';

export default function Logo () {
  return (
    <Image src={require(".//../../resources/images/logo_new.png")} alt="BEYOND EARTH" className={css.headerLogo} />
  );
}
