import * as React from 'react';
import { Seo } from '../../components/seo';
import Layout from '../../components/layout/layout';
import ContactWelcome from '../../components/pagesComponents/contact/welcome/welcome';
import ContactDetails from '../../components/pagesComponents/contact/details/details';
import ContactForm from '../../components/pagesComponents/contact/form/form';

const ContactPage = ({ location }) => {
  return (
    <Layout title={'Contact'} location={location}>
      <ContactWelcome />
      <ContactDetails />
      <ContactForm />
    </Layout>
  );
};

export default ContactPage;

export const Head = () => (
  <Seo
    title={'Contact'}
    description={`Tell us about your project. We’d love to hear more about your project. Please, leave a message below or give us a call.`}
  />
);
