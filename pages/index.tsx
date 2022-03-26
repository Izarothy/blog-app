import { Footer } from 'components/Footer';
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
        <meta property="og:title" content={`Blog App`} />
        <meta property="og:description" content={`CMS blog app`} />
        <meta property="og:image" content={`https://picsum.photos/1920/1080`} />
      </Head>
      <NavBar />
      <main className="dark:bg-primary-dark bg-gray-100 min-h-screen dark:text-white text-primary-dark px-3 py-5">
        <h1 className="text-3xl text-center mb-6">Hi! </h1>
        <section className="w-2/3 lg:w-full mx-auto">
          <h2 className="text-xl mb-4 lg:text-center">Latest posts</h2>
          <div className="grid place-items-center grid-rows-3 lg:grid-rows-5 gap-4">
            {posts.reverse().map((post, idx) => {
              // Only show 3 posts
              if (idx < 5) {
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
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
