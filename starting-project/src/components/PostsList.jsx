import React from 'react';
import Post from './Post';
import styles from './PostsList.module.css';
import NewPost from './NewPost';

const PostsList = () => {
  return (
    <div>
      <NewPost />
      <ul className={styles.posts}>
        <Post author='junu' body='asdfsadffd' />
        <Post author='junu' body='asdfsadffd' />
        <Post author='junu' body='asdfsadffd' />
      </ul>
    </div>

  )
}

export default PostsList;