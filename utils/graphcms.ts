import { gql, GraphQLClient } from 'graphql-request';

export const graphcms = new GraphQLClient(process.env.API_URL!);
export const allPostsQuery = gql`
  {
    posts {
      id
      title
      slug
      content
    }
  }
`;
