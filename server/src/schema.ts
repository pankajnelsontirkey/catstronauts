import gql from 'graphql-tag';

export const typeDefs = gql`
  type Query {
    "Query to get list of tracks for our homepage grid"
    tracksForHome: [Track!]!
  }

  "A track is a group of Modules that teaches about a specific topic"
  type Track {
    id: ID!
    "The title of the track"
    title: String!
    "The main author of the track"
    author: Author!
    "The tracks main illustraion to display in track card or track page detail"
    thumbnail: String
    "The track's approximate length to complete, in minutes"
    length: Int
    "the number of modules this track contains"
    modulesCount: Int
  }

  "The author of a complete track"
  type Author {
    id: ID!
    "Author's first and last name"
    name: String!
    "Author's profile picture url"
    photo: String
  }
`;
