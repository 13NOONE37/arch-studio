import React from 'react';
import { useSiteMetadata } from '../hooks/useSiteMetadata';

export const Seo = ({ title, children }) => {
  const { title: defaultTitle, siteUrl } = useSiteMetadata();

  const seo = {
    title: title || defaultTitle,
  };

  return (
    <>
      <title>{seo.title}</title>
      {children}
    </>
  );
};
