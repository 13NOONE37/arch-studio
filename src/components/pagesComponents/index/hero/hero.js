import React, { useEffect, useRef, useState } from 'react';
import { graphql, navigate, useStaticQuery } from 'gatsby';

import TextArrowButton from '../../../buttons/textArrowButton/textArrowButton';
import TabButton from '../../../buttons/tabButton/tabButton';

import {
  hero,
  carousel_container,
  carousel_elements,
  carousel_element,
  hero_image,
  hero_mask,
  hero_content,
  heroTabButtons,
  hero_cta_button,
} from './hero.module.css';
import { heading__700, body } from '../../../../styles/fonts.module.css';
import { GatsbyImage, getImage, withArtDirection } from 'gatsby-plugin-image';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Hero = () => {
  const data = useStaticQuery(graphql`
    fragment imageFragment on File {
      # name
      # sourceInstanceName
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, quality: 100, placeholder: BLURRED)
      }
    }

    query {
      paramourMobile: file(
        relativePath: { eq: "home/mobile/image-hero-paramour.jpg" }
      ) {
        ...imageFragment
      }
      paramourTablet: file(
        relativePath: { eq: "home/tablet/image-hero-paramour.jpg" }
      ) {
        ...imageFragment
      }
      paramourDesktop: file(
        relativePath: { eq: "home/desktop/image-hero-paramour.jpg" }
      ) {
        ...imageFragment
      }
      seraphMobile: file(
        relativePath: { eq: "home/mobile/image-hero-seraph.jpg" }
      ) {
        ...imageFragment
      }
      seraphTablet: file(
        relativePath: { eq: "home/tablet/image-hero-seraph.jpg" }
      ) {
        ...imageFragment
      }
      seraphDesktop: file(
        relativePath: { eq: "home/desktop/image-hero-seraph.jpg" }
      ) {
        ...imageFragment
      }
      federalMobile: file(
        relativePath: { eq: "home/mobile/image-hero-federal.jpg" }
      ) {
        ...imageFragment
      }
      federalTablet: file(
        relativePath: { eq: "home/tablet/image-hero-federal.jpg" }
      ) {
        ...imageFragment
      }
      federalDesktop: file(
        relativePath: { eq: "home/desktop/image-hero-federal.jpg" }
      ) {
        ...imageFragment
      }
      trinityMobile: file(
        relativePath: { eq: "home/mobile/image-hero-trinity.jpg" }
      ) {
        ...imageFragment
      }
      trinityTablet: file(
        relativePath: { eq: "home/tablet/image-hero-trinity.jpg" }
      ) {
        ...imageFragment
      }
      trinityDesktop: file(
        relativePath: { eq: "home/desktop/image-hero-trinity.jpg" }
      ) {
        ...imageFragment
      }
    }
  `);
  const carousel = [
    {
      name: 'Project Paramour',
      description: `Project made for an art museum near Southwest London. Project Paramour
        is a statement of bold, modern architecture.`,
      alt: 'Picture of building Project Paramour',
      images: withArtDirection(getImage(data.paramourDesktop), [
        {
          media: '(max-width: 767px)',
          image: getImage(data.paramourMobile),
        },
        {
          media: '(max-width: 1303px)',
          image: getImage(data.paramourTablet),
        },
      ]),
    },
    {
      name: 'Seraph Station',
      description: `The Seraph Station project challenged us to design a unique station that would transport people through time. The result is a fresh and futuristic model inspired by space stations.`,
      alt: 'Picture of building Seraph Station',
      images: withArtDirection(getImage(data.seraphDesktop), [
        {
          media: '(max-width: 767px)',
          image: getImage(data.seraphMobile),
        },
        {
          media: '(max-width: 1303px)',
          image: getImage(data.seraphTablet),
        },
      ]),
    },
    {
      name: 'Federal II Tower',
      description: `A sequel theme project for a tower originally built in the 1800s. We achieved this with a striking look of brutal minimalism with modern touches.`,
      alt: 'Picture of building Federal II Tower',
      images: withArtDirection(getImage(data.federalDesktop), [
        {
          media: '(max-width: 767px)',
          image: getImage(data.federalMobile),
        },
        {
          media: '(max-width: 1303px)',
          image: getImage(data.federalTablet),
        },
      ]),
    },
    {
      name: 'Trinity Bank Tower',
      description: `Trinity Bank challenged us to make a concept for a 84 story building located in the middle of a city with a high earthquake frequency. For this project we used curves to blend design and stability to meet our objectives.`,
      alt: 'Picture of building Trinity Bank Tower',
      images: withArtDirection(getImage(data.trinityDesktop), [
        {
          media: '(max-width: 767px)',
          image: getImage(data.trinityMobile),
        },
        {
          media: '(max-width: 1303px)',
          image: getImage(data.trinityTablet),
        },
      ]),
    },
  ];
  const CAROUSEL_INTERVAL = 8000;
  const [currentHero, setHero] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setHero((prev) => (prev + 1) % carousel.length);
    }, CAROUSEL_INTERVAL);
    return () => {
      clearInterval(interval);
    };
  }, [currentHero]);

  const tabButtonsRef = useRef(null);
  const contentRef = useRef(null);
  useGSAP(() => {
    gsap.fromTo(
      tabButtonsRef.current,
      { x: '25%' },
      {
        x: 0,
        ease: 'power3.inOut',
        duration: 0.75,
      },
    );
    gsap.fromTo(
      contentRef.current,
      { opacity: 0, y: -100 },
      {
        opacity: 1,
        y: 0,
        ease: 'power3.inOut',
        duration: 0.75,
      },
    );
  });

  return (
    <section className={hero}>
      <div className={carousel_container}>
        <div
          className={carousel_elements}
          style={{ transform: `translateX(-${currentHero * 25}%)` }}
        >
          {carousel.map(({ images, alt, name, description }, index) => (
            <div className={carousel_element} key={`carousel_${index}`}>
              <GatsbyImage className={hero_image} image={images} alt={alt} />
              <div className={hero_mask}></div>
              <div
                className={hero_content}
                ref={index === 0 ? contentRef : undefined}
              >
                <h1 className={heading__700}>{name}</h1>
                <p className={body}>{description}</p>
                <TextArrowButton
                  onClick={() => navigate('/portfolio')}
                  additionalClasses={[hero_cta_button]}
                  tabIndex={currentHero === index ? 0 : -1}
                  aria-hidden={currentHero !== index ? 'true' : undefined}
                >
                  See Our Portfolio
                </TextArrowButton>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={heroTabButtons} ref={tabButtonsRef}>
        {Array.from({ length: carousel.length }).map((_, index) => (
          <TabButton
            onClick={() => setHero(index)}
            isActive={currentHero === index}
            key={`tabButton_${index}`}
          >{`0${index + 1}`}</TabButton>
        ))}
      </div>
    </section>
  );
};

export default Hero;
