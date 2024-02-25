import React, { useRef } from 'react';
import cx from 'classnames';
import * as styles from './projectView.module.css';
import { heading__600, body } from '../../../../styles/fonts.module.css';

import { GatsbyImage, getImage, withArtDirection } from 'gatsby-plugin-image';
import ArrowButton from '../../../buttons/arrowButton/arrowButton';
import { navigate } from 'gatsby';
import TextArrowButton from '../../../buttons/textArrowButton/textArrowButton';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
const ProjectView = ({
  title,
  description,
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

  const textRef = useRef(null);
  const buttonRef = useRef(null);
  const imageRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      textRef.current,
      {
        opacity: 0,
        yPercent: 100,
        ease: 'power3.inOut',
      },
      {
        opacity: 1,
        yPercent: 0,
        duration: 0.75,
        ease: 'power3.inOut',
      },
    );
    gsap.fromTo(
      buttonRef.current,
      { opacity: 0, yPercent: 100 },
      { opacity: 1, yPercent: 0, delay: 0.75, ease: 'power3.inOut' },
    );
    gsap.fromTo(
      imageRef.current,
      { opacity: 0 },
      { opacity: 1, delay: 0.75, ease: 'power3.inOut' },
    );
  });
  return (
    <section className={styles.projectView}>
      <div className={styles.imageContainer} ref={imageRef}>
        <GatsbyImage
          className={styles.image}
          image={imageSrc}
          alt={image_alt}
        />
        <div className={styles.mask}></div>
      </div>
      <div className={styles.content} ref={textRef}>
        <h1 className={cx(styles.heading, heading__600)}>{title}</h1>
        <p className={cx(styles.description, body)}>{description}</p>
      </div>
      <div ref={buttonRef} className={styles.buttonContainer}>
        <TextArrowButton
          additionalClasses={[styles.returnButton]}
          onClick={() => navigate('/portfolio')}
        >
          See all
        </TextArrowButton>
      </div>
    </section>
  );
};

export default ProjectView;
