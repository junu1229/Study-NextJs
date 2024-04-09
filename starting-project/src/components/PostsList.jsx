import React, { useState } from 'react';
import Post from './Post';
import styles from './PostsList.module.css';
import NewPost from './NewPost';
import Modal from './Modal';

const PostsList = () => {
  const [enteredBody, setEnteredBody] = useState('');
  const [enteredAuthor, setEnteredAuthor] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(true);

  const closeModalHandler = () => {
    setIsModalOpen(false);
  }

  const bodyChangeHandler = (event) => {
    setEnteredBody(event.target.value);
  }

  const authorChangeHandler = (event) => {
    setEnteredAuthor(event.target.value);
  }


  return (
    <div>
      {
        isModalOpen &&
        <Modal onClose={closeModalHandler}>
          <NewPost onBodyChange={bodyChangeHandler} onAuthorChange={authorChangeHandler} />
        </Modal>
      }
      <ul className={styles.posts}>
        <Post author={enteredAuthor} body={enteredBody} />
      </ul>
    </div>
  )
}

export default PostsList;