import classes from './NewPost.module.css';
import { useState } from 'react';

const NewPost = () => {

  const changeBodyHandler = (event) => {
    setCurrentBody(event.target.value);
  }

  const [currentBody, setCurrentBody] = useState('');

  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={changeBodyHandler} />
      </p>
      <p>
        {currentBody}
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required />
      </p>
    </form>
  );
}

export default NewPost;