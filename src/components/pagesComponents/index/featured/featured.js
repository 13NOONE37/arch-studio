import React, { useRef } from 'react';
import cx from 'classnames';

import { graphql, navigate, useStaticQuery } from 'gatsby';

import TextArrowButton from '../../../buttons/textArrowButton/textArrowButton';

import {
  featured,
  heading,
  projects,
  project,
  project_content,
  project_counter,
  project_heading,
  project_info,
  project_image,
  cta,
} from './featured.module.css';
import {
  heading__500,
  heading__800,
  body,
} from '../../../../styles/fonts.module.css';
import { GatsbyImage, getImage, withArtDirection } from 'gatsby-plugin-image';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

const Featured = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(
        filter: {
          frontmatter: {
            title: { in: ["Project Del Sol", "228B Tower", "Le Prototype"] }
          }
        }
      ) {
        nodes {
          frontmatter {
            title
            slug
            image_alt
            image_desktop {
              childImageSharp {
                gatsbyImageData(
                  layout: FULL_WIDTH
                  quality: 100
                  placeholder: BLURRED
                )
              }
            }
            image_tablet {
              childImageSharp {
                gatsbyImageData(
                  layout: FULL_WIDTH
                  quality: 100
                  placeholder: BLURRED
                )
              }
            }
            image_mobile {
              childImageSharp {
                gatsbyImageData(
                  layout: FULL_WIDTH
                  quality: 100
                  placeholder: BLURRED
                )
              }
            }
          }
        }
      }
    }
  `);

  const featuredRef = useRef(null);
  useGSAP(() => {
    return;
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      featuredRef.current.children,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        ease: 'power3.inOut',
        duration: 0.75,
        stagger: 0.5,
        scrollTrigger: {
          trigger: featuredRef.current.children,
          start: '0% 75%',
        },
      },
    );
  });

  return (
    <section className={featured}>
      <h2 className={cx(heading, heading__500)}>Featured</h2>
      <div className={projects} ref={featuredRef}>
        {data.allMdx.nodes.map((data, index) => (
          <Project
            data={data.frontmatter}
            index={index}
            key={data.frontmatter.slug}
          />
        ))}
      </div>
      <TextArrowButton
        onClick={() => navigate('/portfolio')}
        additionalClasses={[cta]}
      >
        See all
      </TextArrowButton>
    </section>
  );
};
const Project = ({ data, index }) => {
  const imageSrc = withArtDirection(getImage(data.image_desktop), [
    {
      media: '(max-width: 767px)',
      image: getImage(data.image_mobile),
    },
    {
      media: '(max-width: 1303px)',
      image: getImage(data.image_tablet),
    },
  ]);
  return (
    <div className={project}>
      <div className={project_content}>
        <span className={cx(heading__800, project_counter)}>{index + 1}</span>
        <h3 className={cx(heading__500, project_heading)}>{data.title}</h3>
        <span className={cx(body, project_info)}>View All Projects</span>
      </div>
      <GatsbyImage
        className={project_image}
        image={imageSrc}
        alt={data.image_alt}
      />
    </div>
  );
};
export default Featured;
