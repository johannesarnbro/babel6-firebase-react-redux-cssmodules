import React, {Component, PropTypes} from 'react';
import {List} from 'immutable';
import style from './app.css';
import ChapterList from '../ChapterList/ChapterList';

class App extends Component {
  componentDidMount() {
    this.props.subscribeToPostList();
  }

  componentWillUnmount() {
    this.props.unsubscribeToPostList();
  }

  render() {
    const {postList} = this.props;

    return (
      <div className={style.root}>
        <div className={style.sidebar}>
          <ChapterList chapters={postList}/>
        </div>
        <div className={style.main}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  fetchPostList: PropTypes.func,
  postList: PropTypes.instanceOf(List),
  children: PropTypes.object,
};


export default App;
