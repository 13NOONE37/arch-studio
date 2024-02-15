import * as React from 'react';
import { Seo } from '../../components/seo';
import Layout from '../../components/layout/layout';

const AboutPage = () => {
  return <Layout title={'About Us'}>About page</Layout>;
};

export default AboutPage;

export const Head = () => <Seo title={'asdf'} />;
