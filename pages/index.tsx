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
      <main className="bg-primary-dark min-h-screen text-white px-3 py-5">
        <h1 className="text-3xl text-center mb-6">Hi! </h1>
        <h2 className="text-xl mb-4">Latest posts</h2>
        <section className="flex flex-col items-center gap-4">
          {posts.map((post, idx) => {
            // Only show 3 posts
            if (idx < 3) {
              return (
                <PostLookup
                  key={post.title}
                  title={post.title}
                  image={post.image || '/test.jpg'}
                  slug={post.slug}
                  content={post.content}
                />
              );
            }
          })}
        </section>
      </main>
    </div>
  );
};

export default Home;
