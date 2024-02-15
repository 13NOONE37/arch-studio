import * as React from 'react';
import { Seo } from '../components/seo';
import Layout from '../components/layout/layout';
import Hero from '../components/pagesComponents/index/hero/hero';
import Welcome from '../components/pagesComponents/index/welcome/welcome';
import Featured from '../components/pagesComponents/index/featured/featured';

const IndexPage = () => {
  return (
    <Layout title={'Home'}>
      <Hero />
      <Welcome />
      <Featured />
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <Seo title={'Home'} />;
