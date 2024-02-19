import React from 'react';
import cx from 'classnames';
import * as styles from './introduction.module.css';
import {
  body,
  heading__500,
  heading__800,
} from '../../styles/fonts.module.css';

import { GatsbyImage, getImage, withArtDirection } from 'gatsby-plugin-image';

const Introduction = ({
  background_heading,
  heading,
  description,
  image_desktop,
  image_tablet,
  image_mobile,
  image_alt,
}) => {
  const imageSrc = withArtDirection(getImage(image_desktop), [
    {
      media: '(max-width: 767px)',
      image: getImage(image_mobile),
    },
    {
      media: '(max-width: 1303px)',
      image: getImage(image_tablet),
    },
  ]);
  return (
    <section className={styles.welcome}>
      <GatsbyImage className={styles.image} image={imageSrc} alt={image_alt} />
      <span className={cx(styles.backgroundHeading, heading__800)}>
        {background_heading}
      </span>
      <div className={styles.content}>
        <h1 className={cx(styles.heading, heading__500)}>{heading}</h1>
        <p className={cx(styles.description, body)}>{description}</p>
      </div>
    </section>
  );
};

export default Introduction;
