import React from 'react';
import { graphcms, allPostsQuery } from 'utils/graphcms';
import { gql } from 'graphql-request';

import { Post } from 'utils/types';
import { GetStaticPaths, GetStaticProps } from 'next';

import Head from 'next/head';
import Link from 'next/link';
import DarkModeButton from 'components/DarkModeButton';
import formatDate from 'utils/formatDate';

const Post = ({ post }: Props) => {
  const creationDate = formatDate(post.createdAt);

  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta property="og:title" content={post.title} />
        <meta
          property="og:description"
          content={`${post.content.slice(0, 30)}...`}
        />
        <meta
          property="og:image"
          content={post.image || `https://picsum.photos/1920/1080`}
        />
      </Head>
      <div className="min-h-screen  text-gray-800 dark:text-gray-200 dark:bg-primary-dark ">
        <header className="p-2">
          <div
            className="relative h-80 rounded-lg bg-cover bg-center w-full lg:w-1/2 lg:mx-auto"
            style={{
              backgroundImage:
                post.image || `url('https://picsum.photos/1920/1080')`,
            }}
          >
            <Link href="/" passHref>
              <button className="cursor-pointer block text-sm absolute top-0 text-white p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
              </button>
            </Link>
            <DarkModeButton right={true} />
            <span className="absolute pl-4 bottom-2 w-full ">
              <h1 className="text-white [text-shadow:1px_1px_#000]  bottom-[10%] text-xl max-w-[70%] text-justify">
                {post.title}
              </h1>
              <span className="[text-shadow:1px_1px_#000] bottom-4 left-4 text-xs text-gray-200 dark:text-gray-100">
                {creationDate} • {post.author || 'Unknown'}
              </span>
            </span>
          </div>
        </header>

        <main className="flex flex-col gap-4 p-4">
          {post &&
            // Text will essentially be only paragraphs so they are all split by newlines
            post.content.split('\n').map((line, idx) => {
              return (
                <p className="font-tinos md:text-lg lg:px-[25vw]" key={idx}>
                  {line}
                </p>
              );
            })}
        </main>
        <footer className="bg-primary-dark dark:bg-gray-100 dark:text-primary-dark text-gray-100 text-center py-4 lg:w-1/2 lg:mx-auto">
          <h3>Thank you for reading</h3>
        </footer>
      </div>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { posts } = await graphcms.request(allPostsQuery);

  const paths = posts.map((post: Post) => ({
    params: {
      id: post.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // Individual graphcms query for current subpage's post
  const query = gql`
    {
      post(where: { slug: "${params?.id}" }) {
        title
        slug
        id
        content
        createdAt
      }
    }
  `;

  const { post } = await graphcms.request(query);

  return {
    props: {
      post,
    },
  };
};

type Props = {
  post: Post;
};

export default Post;
