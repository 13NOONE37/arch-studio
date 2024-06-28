import React from 'react';
import cx from 'classnames';
import * as styles from './hamburger.module.css';

const Hamburger = ({ isOpen, onClick }) => {
  return (
    <button
      className={cx(styles.button, {
        [styles.button__opened]: isOpen,
      })}
      onClick={onClick}
      aria-roledescription="Open/Close navigation for mobiles"
    >
      <div className={styles.hamburger}>
        <div className={styles.hamburger__top}></div>
        <div className={styles.hamburger__middle}></div>
        <div className={styles.hamburger__bottom}></div>
      </div>
    </button>
  );
};

export default Hamburger;
