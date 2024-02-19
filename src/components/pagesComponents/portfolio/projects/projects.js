import React from 'react';
import { projects_container } from './projects.module.css';
import { graphql, useStaticQuery } from 'gatsby';
import Project from '../project/project';

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

  return (
    <section className={projects_container}>
      {projects.map(({ id, frontmatter }) => (
        <Project key={id} {...frontmatter} />
      ))}
    </section>
  );
};

export default Projects;
