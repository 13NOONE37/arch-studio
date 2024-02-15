import * as React from 'react';
import { Seo } from '../../components/seo';
import Layout from '../../components/layout/layout';

const ContactPage = () => {
  return <Layout title={'Contact'}>contact page</Layout>;
};

export default ContactPage;

export const Head = () => <Seo title={'asdf'} />;
