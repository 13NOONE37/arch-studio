import * as React from 'react';
import { Seo } from '../components/seo';
import Layout from '../components/layout/layout';
import Hero from '../components/pagesComponents/index/hero/hero';
import Welcome from '../components/pagesComponents/index/welcome/welcome';
import Featured from '../components/pagesComponents/index/featured/featured';

const IndexPage = ({ location }) => {
  return (
    <Layout title={'Home'} location={location}>
      <Hero />
      <Welcome />
      <Featured />
    </Layout>
  );
};

export default IndexPage;

export const Head = () => (
  <Seo
    title={'Home'}
    description={`Welcome to Arch Studio. We have a unique network and skillset to help bring your projects to life. Our small team of highly skilled individuals combined with our large network put us in a strong position to deliver exceptional results.`}
  />
);
