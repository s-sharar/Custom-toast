import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';
import { ToastContext } from '../ToastProvider'

function ToastShelf() {
  const { toasts } = React.useContext(ToastContext);
  return (
    <ol role="region" aria-live="polite" aria-label="Notification" className={styles.wrapper}>
    {toasts.map((item) => {
        return (
          <li key={item.id} className={styles.toastWrapper}>
            <Toast id={item.id} variant={item.variant} message={item.message} />
          </li>
        )
      })}
    </ol>
  );
}

export default ToastShelf;
