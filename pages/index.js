import styles from '../styles/Home.module.css'

export const getStaticProps = () => {
  return {
    props: {
      posts: []
    }
  }
}

export default function Home({posts}) {
  return (
    <div className={styles.container}>
      <pre>{JSON.stringify(posts, null, 2)}</pre>
    </div>
  )
}
