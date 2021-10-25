//http://~~.~~/posts/[id]
import Layout from "../../components/layout";
import { getIds, getPostById } from "../../lib/posts"

export const getStaticPaths = async () => {
    return {
        paths: getIds(),
        fallback: false
    }
}

export const getStaticProps = async ({ params }) => {
    return {
        props: {
            post: getPostById(params.id)
        }
    }
}

export default function post({ post }) {
    return (
        <Layout pageTitle={"Article"}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
        </Layout>
    )
}