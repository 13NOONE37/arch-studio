import React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import { main } from './layout.module.css';

const Layout = ({ title, children }) => {
  return (
    <>
      <Header title={title} />
      <main className={main}>{children}</main>
      <Footer />
    </>
  );
};
export default Layout;
