import React from 'react';
import style from './chapterList.css';
import { List } from 'immutable';
import ListItem from './ChapterListItem';


const ChapterList = ({ chapters }) => {
  const sortedChapters = chapters.sort((a, b) => {
    const one = a.get('title').replace('Chapter ', '');
    const two = b.get('title').replace('Chapter ', '');
    return parseInt(one, 10) - parseInt(two, 10);
  });

  return (
    <ul className={style.root}>
      {sortedChapters.map((item) => (
          <ListItem
            key={item.get('slug')}
            slug={item.get('slug')}
            label={item.get('title')}
            content={item.get('content')}
          />
        )
      )}
    </ul>
  );
};

ChapterList.propTypes = {
  chapters: React.PropTypes.instanceOf(List),
};


export default ChapterList;
