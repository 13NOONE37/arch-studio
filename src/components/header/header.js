import React, { useEffect, useRef, useState } from 'react';
import cx from 'classnames';
import Logo from '../../assets/logo.svg';
import HamburgerIcon from '../../assets/icons/icon-hamburger.svg';
import CloseIcon from '../../assets/icons/icon-close.svg';

import { Link } from 'gatsby';
import {
  header,
  header_logo,
  pageIndicator,
  links_element,
  link_text_element,
  link_text_element__active,
  hamburger_element,
  pageMask,
  pageMask__visible,
  mobile_menu,
  mobile_menu_visible,
  mobile_link_element,
} from './header.module.css';
import { body__bold, heading__500 } from '../../styles/fonts.module.css';

export const links = [
  { name: 'Porfolio', path: '/portfolio/' },
  { name: 'About Us', path: '/about/' },
  { name: 'Contact', path: '/contact/' },
];

const Header = ({ title, location }) => {
  const currentPath = location?.pathname;
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);

  const handleMenu = (e) => {
    if (!showMenu || !menuRef.current || menuRef.current.contains(e.target)) {
      return;
    }
    setShowMenu(false);
  };
  useEffect(() => {
    document.addEventListener('click', handleMenu);

    return () => {
      document.removeEventListener('click', handleMenu);
    };
  }, []);

  return (
    <header className={header}>
      <span className={pageIndicator}>{title || ''} </span>
      <Link to={'/'} className={header_logo} aria-label="Go to home page">
        <Logo />
      </Link>
      <MobileMenu menuRef={menuRef} showMenu={showMenu} />
      <div
        className={cx(pageMask, {
          [pageMask__visible]: showMenu,
        })}
      ></div>

      <ul className={links_element}>
        {links.map(({ name, path }) => (
          <li key={`hl_${path}`}>
            <Link
              to={path}
              className={cx(link_text_element, body__bold, {
                [link_text_element__active]: path === currentPath,
              })}
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>
      <button
        className={hamburger_element}
        onClick={(e) => {
          e.stopPropagation();
          setShowMenu((prev) => !prev);
        }}
      >
        {showMenu ? <CloseIcon /> : <HamburgerIcon />}
      </button>
    </header>
  );
};

export default Header;

function MobileMenu({ menuRef, showMenu }) {
  return (
    <ul
      className={cx(mobile_menu, {
        [mobile_menu_visible]: showMenu,
      })}
      ref={menuRef}
    >
      {links.map(({ name, path }) => (
        <li key={`mm_${path}`}>
          <Link to={path} className={cx(mobile_link_element, heading__500)}>
            {name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
