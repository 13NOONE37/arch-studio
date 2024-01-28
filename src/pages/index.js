import * as React from 'react';
import { Seo } from '../components/seo';
import Button from '../components/button/button';

const IndexPage = () => {
  return (
    <main>
      asdf
      <Button hasArrow>Button 1</Button>
    </main>
  );
};

export default IndexPage;

export const Head = () => <Seo title={'Welcome to Arch Studio'} />;
