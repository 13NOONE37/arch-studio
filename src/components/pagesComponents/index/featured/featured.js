import React from 'react';
import cx from 'classnames';

import { graphql, navigate, useStaticQuery } from 'gatsby';

import TextArrowButton from '../../../buttons/textArrowButton/textArrowButton';

import { featured, heading, projects, cta } from './featured.module.css';
import {
  heading__800,
  heading__700,
  body,
} from '../../../../styles/fonts.module.css';

const Featured = () => {
  return (
    <section className={featured}>
      <h2 className={heading}>Featured</h2>
      <div className={projects}></div>
      <TextArrowButton
        onClick={() => navigate('/portfolio')}
        additionalClasses={[cta]}
      >
        See all
      </TextArrowButton>
    </section>
  );
};

export default Featured;
