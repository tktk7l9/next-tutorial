import Layout from '../components/MyLayout.js'
import fetch from 'isomorphic-unfetch'
import Markdown from 'react-markdown'

const Post = (props) => (
    <Layout>
        <h1>{props.show.name}</h1>
        <div className="markdown">
            <p>{props.show.summary.replace(/<[/]?p>/g, '')}</p>
        </div>
        <img src={props.show.image.medium} />
        <style jsx global>{`
            .markdown {
                font-family: 'Arial';
            }

            .markdown a {
                text-decoration: noen;
                color: blue;
            }

            .markdown a:hover {
                opacity: 0.6;
            }

            .markdown h3 {
                margin: 0;
                padding: 0;
                text-transform: uppercase;
            }
        `}
        </style>
    </Layout>
)

Post.getInitialProps = async function (context) {
    const { id } = context.query
    const res = await fetch(`https://api.tvmaze.com/shows/${id}`)
    const show = await res.json()

    console.log(`Fetched show: ${show.name}`)

    return { show }
}

export default Post