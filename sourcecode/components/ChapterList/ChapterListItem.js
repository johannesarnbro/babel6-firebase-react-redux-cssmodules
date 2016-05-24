import React from 'react';
import { Link } from 'react-router';
import wordCount from 'html-word-count';
import style from './chapterListItem.css';
import createMarkup from 'create-markup';

const ListItem = ({ label, slug, content }) => {
  const words = wordCount(content);
  const minutes = Math.ceil(words / 275);

  return (
    <li>
      <Link className={style.link} activeClassName={style.activeLink} to={slug}>
        <div className={style.root}>
          <span className={style.label} dangerouslySetInnerHTML={createMarkup(label)}></span>
          <span className={style.meta}>{`${minutes} min read`}</span>
        </div>
      </Link>
    </li>
  );
};

ListItem.propTypes = {
  label: React.PropTypes.string,
  slug: React.PropTypes.string,
  content: React.PropTypes.string,
};

export default ListItem;
