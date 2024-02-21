import * as React from 'react';
import { Seo } from '../../components/seo';
import Layout from '../../components/layout/layout';
import Projects from '../../components/pagesComponents/portfolio/projects/projects';

const PortfolioPage = () => {
  return (
    <Layout title={'Portfolio'}>
      <Projects />
    </Layout>
  );
};

export default PortfolioPage;

export const Head = () => <Seo title={'Portfolio'} />;
