import React, { useRef } from 'react';
import cx from 'classnames';
import * as styles from './heritage.module.css';
import { heading__500, body } from '../../../../styles/fonts.module.css';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { ScrollTrigger } from 'gsap/all';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const AboutHeritage = () => {
  const data = useStaticQuery(graphql`
    query {
      heritageImage: file(
        relativePath: { eq: "about/desktop/image-heritage.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(quality: 100, placeholder: BLURRED)
        }
      }
    }
  `);

  const imageSrc = getImage(data.heritageImage);

  const textRef = useRef(null);
  useGSAP(() => {
    return;
    gsap.registerPlugin(ScrollTrigger);
    const mm = gsap.matchMedia();
    const paragraphs = textRef.current.children;

    mm.add('(max-width:1303px)', () => {
      gsap.fromTo(
        paragraphs,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          ease: 'power3.inOut',
          duration: 0.75,
          stagger: 0.25,
          scrollTrigger: {
            trigger: paragraphs,
            start: '0% 75%',
          },
        },
      );
    });
    mm.add('(min-width:1304px)', () => {
      gsap.fromTo(
        paragraphs,
        { opacity: 0, x: 100 },
        {
          opacity: 1,
          x: 0,
          ease: 'power3.inOut',
          duration: 0.75,
          stagger: 0.25,
          scrollTrigger: {
            trigger: paragraphs,
            start: '0% 75%',
          },
        },
      );
    });
  });

  return (
    <section className={styles.heritage}>
      <h3 className={cx(styles.heading, heading__500)}>Our Heritage</h3>
      <div className={styles.textBlock} ref={textRef}>
        <p className={cx(styles.description, body)}>
          Founded in 2007, we started as a trio of architects. Our complimentary
          skills and relentless attention to detail turned Arch into one of the
          most sought after boutique firms in the country.
        </p>
        <p className={cx(styles.description, body)}>
          Speciliazing in Urban Design allowed us to focus on creating
          exceptional structures that live in harmony with their surroundings.
          We consider every detail from every surrounding element to inform our
          designs.
        </p>
        <p className={cx(styles.description, body)}>
          Our small team of world-class professionals provides input on every
          project.
        </p>
      </div>
      <div className={styles.image}>
        <GatsbyImage image={imageSrc} alt={'Building'} />
      </div>
    </section>
  );
};

export default AboutHeritage;
