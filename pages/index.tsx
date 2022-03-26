import { NavBar } from 'components/NavBar';
import { PostLookup } from 'components/PostLookup';
import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import formatDate from 'utils/formatDate';
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
      <NavBar />
      <main className="dark:bg-primary-dark bg-gray-100 min-h-screen dark:text-white text-primary-dark px-3 py-5">
        <h1 className="text-3xl text-center mb-6">Hi! </h1>
        <h2 className="text-xl mb-4">Latest posts</h2>
        <section className="flex flex-col items-center gap-4">
          {posts.reverse().map((post, idx) => {
            // Only show 3 posts
            if (idx < 3) {
              return (
                <PostLookup
                  key={post.title}
                  title={post.title}
                  image={`https://picsum.photos/1200/108${idx}`}
                  slug={post.slug}
                  currentDate={formatDate(post.createdAt)}
                  author={post.author || 'Unknown'}
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
