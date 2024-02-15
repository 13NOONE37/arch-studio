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
  link_element,
  link_text_element,
  hamburger_element,
  pageMask,
  mobile_menu,
  mobile_menu_visible,
  mobile_link,
  mobile_link_element,
} from './header.module.css';
import { body__bold, heading__500 } from '../../styles/fonts.module.css';

export const links = [
  { name: 'Porfolio', path: '/portfolio' },
  { name: 'About Us', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

const Header = ({ title }) => {
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
  }, [showMenu]);

  return (
    <header className={header}>
      <span className={pageIndicator}>{title || ''} </span>
      <Link to={'/'} className={header_logo}>
        <Logo />
      </Link>
      <div className={pageMask}></div>
      <MobileMenu menuRef={menuRef} showMenu={showMenu} />

      <ul className={links_element}>
        {links.map(({ name, path }) => (
          <li className={link_element} key={`hl_${path}`}>
            <Link to={path} className={cx(link_text_element, body__bold)}>
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
        <li className={mobile_link} key={`mm_${path}`}>
          <Link to={path} className={cx(mobile_link_element, heading__500)}>
            {name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
