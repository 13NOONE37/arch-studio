import * as React from 'react';
import { Seo } from '../../components/seo';
import Layout from '../../components/layout/layout';
import ContactWelcome from '../../components/pagesComponents/contact/welcome/welcome';

const ContactPage = () => {
  return (
    <Layout title={'Contact'}>
      <ContactWelcome />
    </Layout>
  );
};

export default ContactPage;

export const Head = () => <Seo title={'asdf'} />;
