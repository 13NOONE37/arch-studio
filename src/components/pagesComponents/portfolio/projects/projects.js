import React, { useRef } from 'react';
import { projects_container } from './projects.module.css';
import { graphql, useStaticQuery } from 'gatsby';
import Project from '../project/project';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Projects = () => {
  const {
    allMdx: { nodes: projects },
  } = useStaticQuery(graphql`
    query {
      allMdx(sort: { frontmatter: { date: DESC } }) {
        nodes {
          id
          frontmatter {
            title
            slug
            date(formatString: "MMMM YYYY")
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

  const containerRef = useRef(null);
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    const elements = [...containerRef.current.children];

    elements.forEach((element) => {
      gsap.fromTo(
        element,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          ease: 'power3.inOut',
          duration: 0.75,
          scrollTrigger: {
            trigger: element,
            start: '0% 100%',
          },
        },
      );
    });
  });

  return (
    <section className={projects_container} ref={containerRef}>
      {projects.map(({ id, frontmatter }) => (
        <Project key={id} {...frontmatter} />
      ))}
    </section>
  );
};

export default Projects;
