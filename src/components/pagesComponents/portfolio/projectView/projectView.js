import React from 'react';
import cx from 'classnames';
import * as styles from './projectView.module.css';
import { heading__600, body } from '../../../../styles/fonts.module.css';

import { GatsbyImage, getImage, withArtDirection } from 'gatsby-plugin-image';
const ProjectView = ({
  title,
  description,
  date,
  image_alt,
  image_desktop,
  image_tablet,
  image_mobile,
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
    <section className={styles.projectView}>
      <GatsbyImage className={styles.image} image={imageSrc} alt={image_alt} />
      <div className={styles.mask}></div>
      <div className={styles.content}>
        <h1 className={cx(styles.heading, heading__600)}>{title}</h1>
        <p className={cx(styles.description, body)}>{description}</p>
        <span className={cx(styles.date, body)}>{date}</span>
      </div>
    </section>
  );
};

export default ProjectView;
