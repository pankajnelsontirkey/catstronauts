import gql from 'graphql-tag';

export const typeDefs = gql`
  type Query {
    "Query to get list of tracks for our homepage grid"
    tracksForHome: [Track!]!
    "Fetch a specific track by id"
    track(id: ID!): Track
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
    "The description of the track as shown on the track details page"
    description: String
    "The number of times the track has been viewed"
    numberOfViews: Int
    "The tracks complete array of modules"
    modules: [Module!]!
  }

  "A module is a single unit of teaching. A Track can have multiple modules"
  type Module {
    id: ID!
    "The title of the module"
    title: String
    "The length of the module in minutes"
    length: Int
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
