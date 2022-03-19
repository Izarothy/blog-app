import React from 'react';

import { graphcms, allPostsQuery } from 'utils/graphcms';
import { gql } from 'graphql-request';

import { Post } from 'utils/types';
import { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';

const Post = ({ post }: Props) => {
  return (
    <div className="min-h-screen bg-zinc-800 p-4">
      <Link href="/" passHref>
        <button className="cursor-pointer block text-zinc-800 bg-white rounded-lg px-4 py-1 text-sm">
          Go back
        </button>
      </Link>
      <h1 className="text-center text-3xl">{post.title}</h1>
      {post &&
        // Text will essentially be only paragraphs so they are all split by newlines
        post.content.split('\n').map((line, idx) => {
          return <p key={idx}>{line}</p>;
        })}
    </div>
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
