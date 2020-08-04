import React from "react"
import Layout from "../components/layout"
import styles from "../components/blog.module.css"

const blog = () => {
  return (
    <Layout>
      <div className={styles.page}>
        <h1>this is our blog page</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hic,
          voluptatem! Pariatur ipsam eum quas error. Facilisis ex in hic
          recusandae vitae, voluptatem sint laudantium.
        </p>
      </div>
    </Layout>
  )
}

export default blog
