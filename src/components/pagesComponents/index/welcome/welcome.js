import React from 'react';
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

const Welcome = () => {
  const data = useStaticQuery(graphql`
    query {
      welcomeImage: file(
        relativePath: { eq: "home/desktop/image-welcome.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      bannerMobile: file(
        relativePath: { eq: "home/mobile/image-small-team.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
        }
      }
      bannerTablet: file(
        relativePath: { eq: "home/tablet/image-small-team.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
        }
      }
      bannerDesktop: file(
        relativePath: { eq: "home/desktop/image-small-team.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
        }
      }
    }
  `);

  const welcomeImageSrc = getImage(data.welcomeImage);
  const bannerImageSrc = withArtDirection(getImage(data.bannerDesktop), [
    {
      media: '(max-width: 768px)',
      image: getImage(data.bannerMobile),
    },
    {
      media: '(max-width: 1304px)',
      image: getImage(data.bannerTablet),
    },
  ]);

  return (
    <section className={welcome}>
      <div className={welcome_section}>
        <span className={cx(background_heading, heading__800)}>Welcome</span>
        <div className={welcome_section_content}>
          <h2 className={cx(heading, heading__700)}>Welcome to Arch Studio</h2>
          <div className={cx(textBlock, body)}>
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
          alt={'adf'}
        />
      </div>
      <div className={banner}>
        <GatsbyImage className={banner_image} image={bannerImageSrc} alt={''} />
        <div className={banner_content}>
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
