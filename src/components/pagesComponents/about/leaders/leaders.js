import React, { useRef } from 'react';
import cx from 'classnames';
import * as styles from './leaders.module.css';
import { heading__500, body } from '../../../../styles/fonts.module.css';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import LinkedinIcon from '../../../../assets/icons/icon-linkedin.svg';
import TwitterIcon from '../../../../assets/icons/icon-twitter.svg';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

const AboutLeaders = () => {
  const data = useStaticQuery(graphql`
    {
      allFile(
        filter: {
          name: {
            in: [
              "avatar-jackson"
              "avatar-jake"
              "avatar-maria"
              "avatar-thompson"
            ]
          }
          relativeDirectory: { eq: "about/desktop" }
        }
      ) {
        nodes {
          name
          childImageSharp {
            gatsbyImageData(quality: 100, placeholder: BLURRED)
          }
        }
      }
    }
  `);
  const getImage = (name) =>
    data.allFile.nodes.find((a) => a.name === name)?.childImageSharp;

  const figures = [
    {
      name: 'Jake Richards',
      role: 'Chief Architect',
      src: getImage('avatar-jake'),
    },
    {
      name: 'Thompson Smith',
      role: 'Head of Finance',
      src: getImage('avatar-thompson'),
    },
    {
      name: 'Jackson Rourke',
      role: 'Lead Designer',
      src: getImage('avatar-jackson'),
    },
    {
      name: 'Maria Simpson',
      role: 'Senior Architect',
      src: getImage('avatar-maria'),
    },
  ];

  const leadersRef = useRef(null);
  useGSAP(() => {
    return;
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      leadersRef.current.children,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        ease: 'power3.inOut',
        duration: 0.5,
        stagger: 0.2,
        scrollTrigger: {
          trigger: leadersRef.current.children,
          start: '0% 75%',
        },
      },
    );
  });

  return (
    <section className={styles.leaders}>
      <h3 className={styles.heading}>The Leaders</h3>
      <div className={styles.figures} ref={leadersRef}>
        {figures.map((data) => (
          <Figure {...data} key={`figure_${data.name}`} />
        ))}
      </div>
    </section>
  );
};

export default AboutLeaders;

function Figure({ name, role, src }) {
  const imageSrc = getImage(src);
  return (
    <div className={styles.figure}>
      <div className={styles.imageContainer}>
        <GatsbyImage
          image={imageSrc}
          className={styles.image}
          alt={`Picture of ${name}`}
        />
        <div className={styles.overlay}>
          <Link to={'#1'} aria-label="Linkedin">
            <LinkedinIcon />
          </Link>
          <Link to={'#2'} aria-label="Twitter">
            <TwitterIcon />
          </Link>
        </div>
      </div>
      <h4 className={cx(heading__500)}>{name}</h4>
      <h5 className={cx(body)}>{role}</h5>
    </div>
  );
}
