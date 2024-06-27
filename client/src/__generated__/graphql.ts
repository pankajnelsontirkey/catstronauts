/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

/** The author of a complete track */
export type Author = {
  __typename?: 'Author';
  id: Scalars['ID']['output'];
  /** Author's first and last name */
  name: Scalars['String']['output'];
  /** Author's profile picture url */
  photo?: Maybe<Scalars['String']['output']>;
};

/** A module is a single unit of teaching. A Track can have multiple modules */
export type Module = {
  __typename?: 'Module';
  id: Scalars['ID']['output'];
  /** The length of the module in minutes */
  length?: Maybe<Scalars['Int']['output']>;
  /** The title of the module */
  title?: Maybe<Scalars['String']['output']>;
};

export type Query = {
  __typename?: 'Query';
  /** Fetch a specific track by id */
  track?: Maybe<Track>;
  /** Query to get list of tracks for our homepage grid */
  tracksForHome: Array<Track>;
};


export type QueryTrackArgs = {
  id: Scalars['ID']['input'];
};

/** A track is a group of Modules that teaches about a specific topic */
export type Track = {
  __typename?: 'Track';
  /** The main author of the track */
  author: Author;
  /** The description of the track as shown on the track details page */
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  /** The track's approximate length to complete, in minutes */
  length?: Maybe<Scalars['Int']['output']>;
  /** The tracks complete array of modules */
  modules: Array<Module>;
  /** the number of modules this track contains */
  modulesCount?: Maybe<Scalars['Int']['output']>;
  /** The number of times the track has been viewed */
  numberOfViews?: Maybe<Scalars['Int']['output']>;
  /** The tracks main illustraion to display in track card or track page detail */
  thumbnail?: Maybe<Scalars['String']['output']>;
  /** The title of the track */
  title: Scalars['String']['output'];
};

export type GetTrackQueryVariables = Exact<{
  trackId: Scalars['ID']['input'];
}>;


export type GetTrackQuery = { __typename?: 'Query', track?: { __typename?: 'Track', id: string, title: string, thumbnail?: string | null, length?: number | null, modulesCount?: number | null, numberOfViews?: number | null, description?: string | null, author: { __typename?: 'Author', id: string, name: string, photo?: string | null }, modules: Array<{ __typename?: 'Module', id: string, title?: string | null, length?: number | null }> } | null };

export type GetTracksQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTracksQuery = { __typename?: 'Query', tracksForHome: Array<{ __typename?: 'Track', id: string, title: string, thumbnail?: string | null, length?: number | null, modulesCount?: number | null, author: { __typename?: 'Author', id: string, name: string, photo?: string | null } }> };


export const GetTrackDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetTrack"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"trackId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"track"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"trackId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"photo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"}},{"kind":"Field","name":{"kind":"Name","value":"length"}},{"kind":"Field","name":{"kind":"Name","value":"modulesCount"}},{"kind":"Field","name":{"kind":"Name","value":"numberOfViews"}},{"kind":"Field","name":{"kind":"Name","value":"modules"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"length"}}]}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]} as unknown as DocumentNode<GetTrackQuery, GetTrackQueryVariables>;
export const GetTracksDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetTracks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tracksForHome"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"photo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"}},{"kind":"Field","name":{"kind":"Name","value":"length"}},{"kind":"Field","name":{"kind":"Name","value":"modulesCount"}}]}}]}}]} as unknown as DocumentNode<GetTracksQuery, GetTracksQueryVariables>;