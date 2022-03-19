import { PostLookup } from 'components/PostLookup';
import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { getAllPosts } from 'utils/graphcms';
import { Post } from 'utils/types';

export const getStaticProps: GetStaticProps = async () => {
  const { posts } = await getAllPosts();
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
      <main className="bg-zinc-800 min-h-screen text-white px-3 py-5">
        <h1>Hello</h1>
        <section className="flex flex-col gap-2">
          {posts.map((post) => {
            return (
              <PostLookup
                key={post.title}
                title={post.title}
                image={post.image || '/test.png'}
                createdAt={post.createdAt}
                slug={post.slug}
              />
            );
          })}
        </section>
      </main>
    </div>
  );
};

export default Home;
