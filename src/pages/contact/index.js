import * as React from 'react';
import { Seo } from '../../components/seo';
import Layout from '../../components/layout/layout';
import ContactWelcome from '../../components/pagesComponents/contact/welcome/welcome';
import ContactDetails from '../../components/pagesComponents/contact/details/details';
import ContactForm from '../../components/pagesComponents/contact/form/form';

const ContactPage = () => {
  return (
    <Layout title={'Contact'}>
      <ContactWelcome />
      <ContactDetails />
      <ContactForm />
    </Layout>
  );
};

export default ContactPage;

export const Head = () => <Seo title={'Contact'} />;
