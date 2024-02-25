import * as React from 'react';
import { Seo } from '../../components/seo';
import Layout from '../../components/layout/layout';
import Projects from '../../components/pagesComponents/portfolio/projects/projects';

const PortfolioPage = ({ location }) => {
  return (
    <Layout title={'Portfolio'} location={location}>
      <Projects />
    </Layout>
  );
};

export default PortfolioPage;

export const Head = () => (
  <Seo
    title={'Portfolio'}
    description={`Explore our portfolio showcasing the artistry of building design and construction. Immerse yourself in a visual journey of innovative structures, thoughtful architecture, and masterful craftsmanship. Discover how we bring dreams to life through our diverse building projects.`}
  />
);
