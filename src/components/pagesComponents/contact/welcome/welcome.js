import React from 'react';
import Introduction from '../../../introduction/introduction';
import { graphql, useStaticQuery } from 'gatsby';

const ContactWelcome = () => {
  const { image_desktop, image_tablet, image_mobile } = useStaticQuery(graphql`
    query {
      image_desktop: file(
        relativePath: { eq: "contact/desktop/image-hero.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(
            layout: FULL_WIDTH
            quality: 100
            placeholder: BLURRED
          )
        }
      }
      image_tablet: file(
        relativePath: { eq: "contact/tablet/image-hero.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(
            layout: FULL_WIDTH
            quality: 100
            placeholder: BLURRED
          )
        }
      }
      image_mobile: file(
        relativePath: { eq: "contact/mobile/image-hero.jpg" }
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

  return (
    <div>
      <Introduction
        background_heading={'Contact'}
        heading={'Tell us about your project'}
        description={`We’d love to hear more about your project. Please, leave a message below or give us a call. We have two offices, one in Texas and one in Tennessee. If you find yourself nearby, come say hello!`}
        image_desktop={image_desktop}
        image_tablet={image_tablet}
        image_mobile={image_mobile}
        image_alt={'Black landline phone'}
      />
    </div>
  );
};

export default ContactWelcome;
