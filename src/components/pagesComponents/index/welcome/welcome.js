import React, { useRef } from 'react';
import cx from 'classnames';

import { graphql, navigate, useStaticQuery } from 'gatsby';

import TextArrowButton from '../../../buttons/textArrowButton/textArrowButton';

import {
  welcome,
  welcome_section,
  welcome_section_content,
  welcome_image,
  background_heading,
  heading,
  textBlock,
  banner,
  banner_content,
  banner_cta,
  banner_image,
} from './welcome.module.css';
import {
  heading__800,
  heading__700,
  body,
} from '../../../../styles/fonts.module.css';
import { GatsbyImage, getImage, withArtDirection } from 'gatsby-plugin-image';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

const Welcome = () => {
  const data = useStaticQuery(graphql`
    query {
      welcomeImage: file(
        relativePath: { eq: "home/desktop/image-welcome.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(quality: 100, placeholder: BLURRED)
        }
      }
      bannerMobile: file(
        relativePath: { eq: "home/mobile/image-small-team.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(
            layout: FULL_WIDTH
            quality: 100
            placeholder: BLURRED
          )
        }
      }
      bannerTablet: file(
        relativePath: { eq: "home/tablet/image-small-team.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(
            layout: FULL_WIDTH
            quality: 100
            placeholder: BLURRED
          )
        }
      }
      bannerDesktop: file(
        relativePath: { eq: "home/desktop/image-small-team.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(
            layout: FULL_WIDTH
            quality: 100
            placeholder: BLURRED
          )
        }
      }
    }
  `);

  const welcomeImageSrc = getImage(data.welcomeImage);
  const bannerImageSrc = withArtDirection(getImage(data.bannerDesktop), [
    {
      media: '(max-width: 767px)',
      image: getImage(data.bannerMobile),
    },
    {
      media: '(max-width: 1303px)',
      image: getImage(data.bannerTablet),
    },
  ]);

  const headingRef = useRef(null);
  const textRef = useRef(null);
  const contentRef = useRef(null);
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    const mm = gsap.matchMedia();

    const paragraphs = [...textRef.current.children];
    mm.add('(max-width:1303px)', () => {
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          ease: 'power3.inOut',
          duration: 0.75,
          scrollTrigger: {
            trigger: headingRef.current,
            start: '0% 75%',
          },
        },
      );

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
        headingRef.current,
        { opacity: 0, x: 100 },
        {
          opacity: 1,
          x: 0,
          ease: 'power3.inOut',
          duration: 0.75,
          scrollTrigger: {
            trigger: headingRef.current,
            start: '0% 75%',
          },
        },
      );

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

    gsap.fromTo(
      contentRef.current.children,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        ease: 'power3.inOut',
        duration: 0.75,
        scrollTrigger: {
          trigger: contentRef.current,
          start: '0% 50%',
        },
      },
    );
  });

  return (
    <section className={welcome}>
      <div className={welcome_section}>
        <span className={cx(background_heading, heading__800)}>Welcome</span>
        <div className={welcome_section_content}>
          <h1 className={cx(heading, heading__700)} ref={headingRef}>
            Welcome to Arch Studio
          </h1>
          <div className={cx(textBlock, body)} ref={textRef}>
            <p>
              We have a unique network and skillset to help bring your projects
              to life. Our small team of highly skilled individuals combined
              with our large network put us in a strong position to deliver
              exceptional results.
            </p>
            <p>
              Over the past 10 years, we have worked on all kinds of projects.
              From stations to high-rise buildings, we create spaces that
              inspire and delight.
            </p>
            <p>
              We work closely with our clients so that we understand the
              intricacies of each project. This allows us to work in harmony the
              surrounding area to create truly stunning projects that will stand
              the test of time.
            </p>
          </div>
        </div>
        <GatsbyImage
          className={welcome_image}
          image={welcomeImageSrc}
          alt={
            'Minimalist architecture building on water: A sleek, modern structure with clean lines and serene surroundings.'
          }
        />
      </div>
      <div className={banner}>
        <GatsbyImage className={banner_image} image={bannerImageSrc} alt={''} />
        <div className={banner_content} ref={contentRef}>
          <h3 className={heading__700}>Small team, big ideas</h3>
          <TextArrowButton
            additionalClasses={[banner_cta]}
            onClick={() => navigate('/about')}
          >
            About Us
          </TextArrowButton>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
