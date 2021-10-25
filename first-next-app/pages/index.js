import Linl from "next/link"
import Layout from "../components/layout"

import { getPosts } from "../lib/posts"

export const getStaticProps = async () => {
  return {
    props: {
      posts: getPosts()
    }
  }
}

export default function Home({ posts }) {
  return (
    <Layout pageTitle="Home">
      <Linl href="/about" >
        <a>About</a>
      </Linl>
      <ul>
        {posts.map(({ title }) => {
          return <li>
            {title}
          </li>
        })}
      </ul>
    </Layout>
  )
}

{/* pages/indexedDB.js=> /となる */ }

// hppt:/~~~.~~~/post/first-post