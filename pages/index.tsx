import type { NextPage } from 'next';
import Head from 'next/head';

import { Post } from 'utils/types';

// GraphCMS setup
import { gql, GraphQLClient } from 'graphql-request';
const graphcms = new GraphQLClient(process.env.API_URL!);
const QUERY = gql`
  {
    posts {
      id
      title
      content
    }
  }
`;

export const getStaticProps = async () => {
  const { posts } = await graphcms.request(QUERY);

  return {
    props: {
      posts,
    },
  };
};

type Props = {
  posts: Post[];
};

const Home: NextPage<Props> = ({ posts }) => {
  return (
    <div>
      <Head>
        <title>Blog App</title>
      </Head>
      <main>
        {posts.map((post) => {
          return (
            <div key={post.id}>
              <h1 className="text-4xl">{post.title}</h1>
              {post.content.split('\n').map((line, idx) => {
                return <p key={idx}>{line}</p>;
              })}
            </div>
          );
        })}
      </main>
    </div>
  );
};

export default Home;
