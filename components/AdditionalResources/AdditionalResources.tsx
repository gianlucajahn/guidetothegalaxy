import * as React from 'react';
import css from './AdditionalResources.module.scss';

export default function AdditionalResources (props) {
  return (
    <ol className={css.addRes}>
      {props.children}
    </ol>
  );
}
