import { graphql } from 'gatsby';
import React from 'react';
import Layout from '../../components/layout/layout';
import { Seo } from '../../components/seo';
import ProjectView from '../../components/pagesComponents/portfolio/projectView/projectView';

const PortfolioProject = ({
  data: {
    mdx: { frontmatter },
  },
}) => {
  return (
    <Layout title={'Portfolio'}>
      <ProjectView {...frontmatter} />
    </Layout>
  );
};
export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        description
        date(formatString: "MMMM D, YYYY")
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
`;

export const Head = () => <Seo title={'asdf'} />;

export default PortfolioProject;
