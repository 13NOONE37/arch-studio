import React from 'react';
import { project, content, image } from './project.module.css';
import { heading__500, body } from '../../../../styles/fonts.module.css';
import { Link } from 'gatsby';
import { GatsbyImage, getImage, withArtDirection } from 'gatsby-plugin-image';
const Project = ({
  title,
  slug,
  date,
  image_alt,
  image_desktop,
  image_tablet,
  image_mobile,
}) => {
  const imageSrc = withArtDirection(getImage(image_desktop), [
    {
      media: '(max-width: 767px)',
      image: getImage(image_mobile),
    },
    {
      media: '(max-width: 1303px)',
      image: getImage(image_tablet),
    },
  ]);

  return (
    <Link to={`/portfolio/${slug}`} className={project}>
      <GatsbyImage className={image} image={imageSrc} alt={image_alt} />
      <div className={content}>
        <h2 className={heading__500}>{title}</h2>
        <span className={body}>{date}</span>
      </div>
    </Link>
  );
};

export default Project;
