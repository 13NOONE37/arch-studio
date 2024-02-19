import React from 'react';
import Introduction from '../../../introduction/introduction';
import { graphql, useStaticQuery } from 'gatsby';

const AboutWelcome = () => {
  const { image_desktop, image_tablet, image_mobile } = useStaticQuery(graphql`
    query {
      image_desktop: file(
        relativePath: { eq: "about/desktop/image-hero.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(
            layout: FULL_WIDTH
            quality: 100
            placeholder: BLURRED
          )
        }
      }
      image_tablet: file(relativePath: { eq: "about/tablet/image-hero.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            layout: FULL_WIDTH
            quality: 100
            placeholder: BLURRED
          )
        }
      }
      image_mobile: file(relativePath: { eq: "about/mobile/image-hero.jpg" }) {
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

  return (
    <div>
      <Introduction
        background_heading={'About'}
        heading={'Your team of professionals'}
        description={`Our small team of world-class professionals will work with you every step of the way. Strong relationships are at the core of everything we do. This extends to the relationship our projects have with their surroundings.`}
        image_desktop={image_desktop}
        image_tablet={image_tablet}
        image_mobile={image_mobile}
        image_alt={
          'A person diligently working on a laptop, focused on blueprints spread out on the table nearby.'
        }
      />
    </div>
  );
};

export default AboutWelcome;
