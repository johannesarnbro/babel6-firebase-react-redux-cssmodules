import React from 'react';
import { Link } from 'react-router';
import style from './chapter.css';
import createMarkup from 'create-markup';

const Chapter = ({routeParams, postList}) => {
  const slug = routeParams.chapter;
  const chapter = postList.find((post) => post.get('slug') === slug);

  if (!chapter) {
    return false;
  }

  const heading = createMarkup(chapter.get('title'));
  const content = createMarkup(chapter.get('content'));

  return (
    <div className={style.root}>
      <Link className={style.close} to="/">╳</Link>
      <h2 className={style.heading} dangerouslySetInnerHTML={heading}></h2>
      <div dangerouslySetInnerHTML={content} />
    </div>
  );
};

export default Chapter;
