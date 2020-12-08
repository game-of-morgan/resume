import React from 'react';
import classNames from 'classnames';
import styles from './Container.module.css';

const Container = ({
  children, center, boundless, ...otherProps
}) => {
  const classes = classNames(
    styles.Container,
    center && styles.Center,
    boundless && styles.Boundless,
  );

  return (
    <div className={classes} {...otherProps}>
      {children}
    </div>
  );
};

export default Container;
