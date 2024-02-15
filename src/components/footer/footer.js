import React from 'react';
import cx from 'classnames';
import { footer } from './footer.module.css';
import TextArrowButton from '../buttons/textArrowButton/textArrowButton';
import { Link, navigate } from 'gatsby';
import { links } from '../header/header';
import Logo from '../../assets/logo.svg';

import {
  footer_logo,
  footer_links,
  footer_link,
  footer_cta,
} from './footer.module.css';
import { body__bold } from '../../styles/fonts.module.css';
const Footer = () => {
  return (
    <footer className={footer}>
      <Link to={'/'} className={footer_logo}>
        <Logo />
      </Link>
      <ul className={footer_links}>
        {links.map(({ name, path }) => (
          <li key={`fl_${path}`}>
            <Link to={path} className={cx(footer_link, body__bold)}>
              {name}
            </Link>
          </li>
        ))}
      </ul>
      <TextArrowButton
        additionalClasses={[footer_cta]}
        onClick={() => navigate('/portfolio')}
      >
        See Our Portfolio
      </TextArrowButton>
    </footer>
  );
};

export default Footer;
