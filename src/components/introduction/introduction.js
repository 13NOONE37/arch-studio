import React, { useRef } from 'react';
import cx from 'classnames';
import * as styles from './introduction.module.css';
import {
  body,
  heading__500,
  heading__800,
} from '../../styles/fonts.module.css';

import { GatsbyImage, getImage, withArtDirection } from 'gatsby-plugin-image';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

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

  const maskRef = useRef(null);
  const contentRef = useRef(null);
  const headingRef = useRef(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();

    const maskTL = gsap.timeline({
      ease: 'power3.inOut',
    });

    maskTL.fromTo(
      headingRef.current,
      {
        opacity: 0,
      },
      { opacity: 1, duration: 0.5 },
    );

    mm.add('(max-width:767px)', () => {
      maskTL
        .from(maskRef.current, {
          scaleX: 1,
          scaleY: 1,
        })
        .to(maskRef.current, {
          scaleY: 0.188,
          duration: 0.5,
        })
        .to(maskRef.current, { scaleX: 0.915, duration: 0.25 });
    });

    mm.add('(min-width:768px) and (max-width:1303px)', () => {
      maskTL
        .from(maskRef.current, {
          scaleX: 1,
          scaleY: 1,
        })
        .to(maskRef.current, {
          scaleY: 0.597,
          duration: 0.5,
        })
        .to(maskRef.current, { scaleX: 0.9, duration: 0.25 });
    });

    mm.add('(min-width:1304px)', () => {
      maskTL
        .from(maskRef.current, {
          scaleX: 1,
          scaleY: 1,
        })

        .to(maskRef.current, {
          scaleY: 0.699,
          duration: 0.5,
        })
        .to(maskRef.current, { scaleX: 0.153, duration: 0.5 });
    });

    maskTL.fromTo(
      contentRef.current,
      { opacity: 0, y: 100, delay: 0.5 },
      { opacity: 1, y: 0 },
    );
  });

  return (
    <section className={styles.welcome}>
      <div className={styles.imageContainer}>
        <div className={styles.imageMask} ref={maskRef}></div>
        <GatsbyImage
          className={styles.image}
          image={imageSrc}
          alt={image_alt}
        />
      </div>
      <span
        className={cx(styles.backgroundHeading, heading__800)}
        ref={headingRef}
      >
        {background_heading}
      </span>
      <div className={styles.content} ref={contentRef}>
        <h1 className={cx(styles.heading, heading__500)}>{heading}</h1>
        <p className={cx(styles.description, body)}>{description}</p>
      </div>
    </section>
  );
};

export default Introduction;
