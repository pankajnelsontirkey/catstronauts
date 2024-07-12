import { Resolvers } from './types';

export const resolvers: Resolvers = {
  Query: {
    // Returns an array of tracks that will be used
    // to populate the homepage grid of our web client
    tracksForHome: (_, __, { dataSources }) => {
      return dataSources.trackAPI.getTracksforHome();
    },
    // Returns a single track by its ID for track page
    track: (_, { id }, { dataSources }) => {
      return dataSources.trackAPI.getTrack(id);
    },
    module: (_, { id }, { dataSources }) => {
      return dataSources.trackAPI.getModule(id);
    }
  },
  Track: {
    // Return the author per track using authorId
    author: ({ authorId }, _, { dataSources }) => {
      return dataSources.trackAPI.getAuthor(authorId);
    },
    // Return the modules for trackID
    modules: ({ id }, _, { dataSources }) => {
      return dataSources.trackAPI.getTrackModules(id);
    }
  }
};
