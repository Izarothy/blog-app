import React from 'react';

import { graphcms, allPostsQuery } from 'utils/graphcms';
import { gql } from 'graphql-request';

import { Post } from 'utils/types';
import { GetStaticPaths, GetStaticProps } from 'next';

const Post = ({ post }: Props) => {
  return (
    <div>
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
      id: post.id,
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
      post(where: { id: "${params?.id}" }) {
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
