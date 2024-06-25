import { Resolvers } from './types';

export const resolvers: Resolvers = {
  Query: {
    // Returns an array of tracks that will be used
    // to populate the homepage grid of our web client
    tracksForHome: (_, __, { dataSources }) => {
      return dataSources.trackAPI.getTracksforHome();
    }
  },
  Track: {
    // Return the author per track using authorId
    author: ({ authorId }, _, { dataSources }) => {
      return dataSources.trackAPI.getAuthor(authorId);
    }
  }
};
