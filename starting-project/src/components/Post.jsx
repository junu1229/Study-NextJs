import styles from './Post.module.css';

const Post = ({ author, body }) => {

  return (
    <div className={styles.post}>
      <p className={styles.author}>{author}</p>
      <p className={styles.text}>{body}</p>
    </div>
  )
}

export default Post;