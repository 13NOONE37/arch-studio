import * as React from 'react';
import { Seo } from '../../components/seo';
import Layout from '../../components/layout/layout';
import AboutWelcome from '../../components/pagesComponents/about/welcome/welcome';
import AboutHeritage from '../../components/pagesComponents/about/heritage/heritage';
import AboutLeaders from '../../components/pagesComponents/about/leaders/leaders';

const AboutPage = ({ location }) => {
  return (
    <Layout title={'About Us'} location={location}>
      <AboutWelcome />
      <AboutHeritage />
      <AboutLeaders />
    </Layout>
  );
};

export default AboutPage;

export const Head = () => (
  <Seo
    title={'About Us'}
    description={`Your team of professionals. Our small team of world-class professionals will work with you every step of the way.`}
  />
);
