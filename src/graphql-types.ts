/* eslint-disable */
import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  /** A location in a connection that can be used for resuming pagination. */
  Cursor: any,
  /** 
 * A point in time as described by the [ISO
   * 8601](https://en.wikipedia.org/wiki/ISO_8601) standard. May or may not include a timezone.
 **/
  Datetime: any,
};

export type Build = Node & {
   __typename?: 'Build',
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'],
  id: Scalars['Int'],
  name: Scalars['String'],
  /** Reads and enables pagination through a set of `BuildUnique`. */
  buildUniques: BuildUniquesConnection,
  /** Reads and enables pagination through a set of `Unique`. */
  uniquesByBuildUniqueBuildIdAndUniqueId: UniquesConnection,
};


export type BuildBuildUniquesArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<BuildUniquesOrderBy>>,
  condition?: Maybe<BuildUniqueCondition>
};


export type BuildUniquesByBuildUniqueBuildIdAndUniqueIdArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<UniquesOrderBy>>,
  condition?: Maybe<UniqueCondition>
};

/** A condition to be used against `Build` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type BuildCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: Maybe<Scalars['Int']>,
};

/** An input for mutations affecting `Build` */
export type BuildInput = {
  id?: Maybe<Scalars['Int']>,
  name: Scalars['String'],
};

/** Represents an update to a `Build`. Fields that are set will be updated. */
export type BuildPatch = {
  id?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
};

/** A connection to a list of `Build` values. */
export type BuildsConnection = {
   __typename?: 'BuildsConnection',
  /** A list of `Build` objects. */
  nodes: Array<Maybe<Build>>,
  /** A list of edges which contains the `Build` and cursor to aid in pagination. */
  edges: Array<BuildsEdge>,
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
  /** The count of *all* `Build` you could get from the connection. */
  totalCount: Scalars['Int'],
};

/** A `Build` edge in the connection. */
export type BuildsEdge = {
   __typename?: 'BuildsEdge',
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>,
  /** The `Build` at the end of the edge. */
  node?: Maybe<Build>,
};

/** Methods to use when ordering `Build`. */
export enum BuildsOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

export type BuildUnique = Node & {
   __typename?: 'BuildUnique',
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'],
  buildId: Scalars['Int'],
  uniqueId: Scalars['Int'],
  level: Scalars['Int'],
  slot: SlotType,
  createdAt: Scalars['Datetime'],
  updatedAt: Scalars['Datetime'],
  /** Reads a single `Build` that is related to this `BuildUnique`. */
  build?: Maybe<Build>,
  /** Reads a single `Unique` that is related to this `BuildUnique`. */
  unique?: Maybe<Unique>,
};

/** 
 * A condition to be used against `BuildUnique` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 **/
export type BuildUniqueCondition = {
  /** Checks for equality with the object’s `buildId` field. */
  buildId?: Maybe<Scalars['Int']>,
  /** Checks for equality with the object’s `uniqueId` field. */
  uniqueId?: Maybe<Scalars['Int']>,
  /** Checks for equality with the object’s `level` field. */
  level?: Maybe<Scalars['Int']>,
};

/** An input for mutations affecting `BuildUnique` */
export type BuildUniqueInput = {
  buildId: Scalars['Int'],
  uniqueId: Scalars['Int'],
  level: Scalars['Int'],
  slot: SlotType,
  createdAt?: Maybe<Scalars['Datetime']>,
  updatedAt?: Maybe<Scalars['Datetime']>,
};

/** Represents an update to a `BuildUnique`. Fields that are set will be updated. */
export type BuildUniquePatch = {
  buildId?: Maybe<Scalars['Int']>,
  uniqueId?: Maybe<Scalars['Int']>,
  level?: Maybe<Scalars['Int']>,
  slot?: Maybe<SlotType>,
  createdAt?: Maybe<Scalars['Datetime']>,
  updatedAt?: Maybe<Scalars['Datetime']>,
};

/** A connection to a list of `BuildUnique` values. */
export type BuildUniquesConnection = {
   __typename?: 'BuildUniquesConnection',
  /** A list of `BuildUnique` objects. */
  nodes: Array<Maybe<BuildUnique>>,
  /** A list of edges which contains the `BuildUnique` and cursor to aid in pagination. */
  edges: Array<BuildUniquesEdge>,
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
  /** The count of *all* `BuildUnique` you could get from the connection. */
  totalCount: Scalars['Int'],
};

/** A `BuildUnique` edge in the connection. */
export type BuildUniquesEdge = {
   __typename?: 'BuildUniquesEdge',
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>,
  /** The `BuildUnique` at the end of the edge. */
  node?: Maybe<BuildUnique>,
};

/** Methods to use when ordering `BuildUnique`. */
export enum BuildUniquesOrderBy {
  Natural = 'NATURAL',
  BuildIdAsc = 'BUILD_ID_ASC',
  BuildIdDesc = 'BUILD_ID_DESC',
  UniqueIdAsc = 'UNIQUE_ID_ASC',
  UniqueIdDesc = 'UNIQUE_ID_DESC',
  LevelAsc = 'LEVEL_ASC',
  LevelDesc = 'LEVEL_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** All input for the create `Build` mutation. */
export type CreateBuildInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 **/
  clientMutationId?: Maybe<Scalars['String']>,
  /** The `Build` to be created by this mutation. */
  build: BuildInput,
};

/** The output of our create `Build` mutation. */
export type CreateBuildPayload = {
   __typename?: 'CreateBuildPayload',
  /** 
 * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
 **/
  clientMutationId?: Maybe<Scalars['String']>,
  /** The `Build` that was created by this mutation. */
  build?: Maybe<Build>,
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>,
  /** An edge for our `Build`. May be used by Relay 1. */
  buildEdge?: Maybe<BuildsEdge>,
};


/** The output of our create `Build` mutation. */
export type CreateBuildPayloadBuildEdgeArgs = {
  orderBy?: Maybe<Array<BuildsOrderBy>>
};

/** All input for the create `BuildUnique` mutation. */
export type CreateBuildUniqueInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 **/
  clientMutationId?: Maybe<Scalars['String']>,
  /** The `BuildUnique` to be created by this mutation. */
  buildUnique: BuildUniqueInput,
};

/** The output of our create `BuildUnique` mutation. */
export type CreateBuildUniquePayload = {
   __typename?: 'CreateBuildUniquePayload',
  /** 
 * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
 **/
  clientMutationId?: Maybe<Scalars['String']>,
  /** The `BuildUnique` that was created by this mutation. */
  buildUnique?: Maybe<BuildUnique>,
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>,
  /** Reads a single `Build` that is related to this `BuildUnique`. */
  build?: Maybe<Build>,
  /** Reads a single `Unique` that is related to this `BuildUnique`. */
  unique?: Maybe<Unique>,
  /** An edge for our `BuildUnique`. May be used by Relay 1. */
  buildUniqueEdge?: Maybe<BuildUniquesEdge>,
};


/** The output of our create `BuildUnique` mutation. */
export type CreateBuildUniquePayloadBuildUniqueEdgeArgs = {
  orderBy?: Maybe<Array<BuildUniquesOrderBy>>
};



/** All input for the `deleteBuildById` mutation. */
export type DeleteBuildByIdInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 **/
  clientMutationId?: Maybe<Scalars['String']>,
  id: Scalars['Int'],
};

/** All input for the `deleteBuild` mutation. */
export type DeleteBuildInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 **/
  clientMutationId?: Maybe<Scalars['String']>,
  /** The globally unique `ID` which will identify a single `Build` to be deleted. */
  nodeId: Scalars['ID'],
};

/** The output of our delete `Build` mutation. */
export type DeleteBuildPayload = {
   __typename?: 'DeleteBuildPayload',
  /** 
 * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
 **/
  clientMutationId?: Maybe<Scalars['String']>,
  /** The `Build` that was deleted by this mutation. */
  build?: Maybe<Build>,
  deletedBuildId?: Maybe<Scalars['ID']>,
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>,
  /** An edge for our `Build`. May be used by Relay 1. */
  buildEdge?: Maybe<BuildsEdge>,
};


/** The output of our delete `Build` mutation. */
export type DeleteBuildPayloadBuildEdgeArgs = {
  orderBy?: Maybe<Array<BuildsOrderBy>>
};

/** All input for the `deleteBuildUniqueByBuildIdAndUniqueIdAndLevelAndSlot` mutation. */
export type DeleteBuildUniqueByBuildIdAndUniqueIdAndLevelAndSlotInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 **/
  clientMutationId?: Maybe<Scalars['String']>,
  buildId: Scalars['Int'],
  uniqueId: Scalars['Int'],
  level: Scalars['Int'],
  slot: SlotType,
};

/** All input for the `deleteBuildUnique` mutation. */
export type DeleteBuildUniqueInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 **/
  clientMutationId?: Maybe<Scalars['String']>,
  /** The globally unique `ID` which will identify a single `BuildUnique` to be deleted. */
  nodeId: Scalars['ID'],
};

/** The output of our delete `BuildUnique` mutation. */
export type DeleteBuildUniquePayload = {
   __typename?: 'DeleteBuildUniquePayload',
  /** 
 * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
 **/
  clientMutationId?: Maybe<Scalars['String']>,
  /** The `BuildUnique` that was deleted by this mutation. */
  buildUnique?: Maybe<BuildUnique>,
  deletedBuildUniqueId?: Maybe<Scalars['ID']>,
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>,
  /** Reads a single `Build` that is related to this `BuildUnique`. */
  build?: Maybe<Build>,
  /** Reads a single `Unique` that is related to this `BuildUnique`. */
  unique?: Maybe<Unique>,
  /** An edge for our `BuildUnique`. May be used by Relay 1. */
  buildUniqueEdge?: Maybe<BuildUniquesEdge>,
};


/** The output of our delete `BuildUnique` mutation. */
export type DeleteBuildUniquePayloadBuildUniqueEdgeArgs = {
  orderBy?: Maybe<Array<BuildUniquesOrderBy>>
};

export type Gem = Node & {
   __typename?: 'Gem',
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'],
  id: Scalars['Int'],
  name: Scalars['String'],
  description: Scalars['String'],
  iconUrl: Scalars['String'],
  statText: Scalars['String'],
  qualityStatText: Scalars['String'],
  levelRequirement: Scalars['Int'],
  primaryAttribute: Scalars['String'],
  strRequirement: Scalars['Int'],
  dexRequirement: Scalars['Int'],
  intRequirement: Scalars['Int'],
  createdAt: Scalars['Datetime'],
  updatedAt: Scalars['Datetime'],
  /** Reads and enables pagination through a set of `GemTag`. */
  gemTags: GemTagsConnection,
  /** Reads and enables pagination through a set of `Tag`. */
  tagsByGemTagGemIdAndTagId: TagsConnection,
};


export type GemGemTagsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<GemTagsOrderBy>>,
  condition?: Maybe<GemTagCondition>
};


export type GemTagsByGemTagGemIdAndTagIdArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<TagsOrderBy>>,
  condition?: Maybe<TagCondition>
};

/** A condition to be used against `Gem` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type GemCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: Maybe<Scalars['Int']>,
  /** Checks for equality with the object’s `name` field. */
  name?: Maybe<Scalars['String']>,
};

/** An input for mutations affecting `Gem` */
export type GemInput = {
  id?: Maybe<Scalars['Int']>,
  name: Scalars['String'],
  description: Scalars['String'],
  iconUrl: Scalars['String'],
  statText: Scalars['String'],
  qualityStatText: Scalars['String'],
  levelRequirement: Scalars['Int'],
  primaryAttribute: Scalars['String'],
  strRequirement: Scalars['Int'],
  dexRequirement: Scalars['Int'],
  intRequirement: Scalars['Int'],
  createdAt?: Maybe<Scalars['Datetime']>,
  updatedAt?: Maybe<Scalars['Datetime']>,
};

/** Represents an update to a `Gem`. Fields that are set will be updated. */
export type GemPatch = {
  id?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  iconUrl?: Maybe<Scalars['String']>,
  statText?: Maybe<Scalars['String']>,
  qualityStatText?: Maybe<Scalars['String']>,
  levelRequirement?: Maybe<Scalars['Int']>,
  primaryAttribute?: Maybe<Scalars['String']>,
  strRequirement?: Maybe<Scalars['Int']>,
  dexRequirement?: Maybe<Scalars['Int']>,
  intRequirement?: Maybe<Scalars['Int']>,
  createdAt?: Maybe<Scalars['Datetime']>,
  updatedAt?: Maybe<Scalars['Datetime']>,
};

/** A connection to a list of `Gem` values. */
export type GemsConnection = {
   __typename?: 'GemsConnection',
  /** A list of `Gem` objects. */
  nodes: Array<Maybe<Gem>>,
  /** A list of edges which contains the `Gem` and cursor to aid in pagination. */
  edges: Array<GemsEdge>,
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
  /** The count of *all* `Gem` you could get from the connection. */
  totalCount: Scalars['Int'],
};

/** A `Gem` edge in the connection. */
export type GemsEdge = {
   __typename?: 'GemsEdge',
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>,
  /** The `Gem` at the end of the edge. */
  node?: Maybe<Gem>,
};

/** Methods to use when ordering `Gem`. */
export enum GemsOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

export type GemTag = Node & {
   __typename?: 'GemTag',
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'],
  gemId: Scalars['Int'],
  tagId: Scalars['Int'],
  createdAt: Scalars['Datetime'],
  updatedAt: Scalars['Datetime'],
  /** Reads a single `Gem` that is related to this `GemTag`. */
  gem?: Maybe<Gem>,
  /** Reads a single `Tag` that is related to this `GemTag`. */
  tag?: Maybe<Tag>,
};

/** A condition to be used against `GemTag` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type GemTagCondition = {
  /** Checks for equality with the object’s `gemId` field. */
  gemId?: Maybe<Scalars['Int']>,
  /** Checks for equality with the object’s `tagId` field. */
  tagId?: Maybe<Scalars['Int']>,
};

/** An input for mutations affecting `GemTag` */
export type GemTagInput = {
  gemId: Scalars['Int'],
  tagId: Scalars['Int'],
  createdAt?: Maybe<Scalars['Datetime']>,
  updatedAt?: Maybe<Scalars['Datetime']>,
};

/** Represents an update to a `GemTag`. Fields that are set will be updated. */
export type GemTagPatch = {
  gemId?: Maybe<Scalars['Int']>,
  tagId?: Maybe<Scalars['Int']>,
  createdAt?: Maybe<Scalars['Datetime']>,
  updatedAt?: Maybe<Scalars['Datetime']>,
};

/** A connection to a list of `GemTag` values. */
export type GemTagsConnection = {
   __typename?: 'GemTagsConnection',
  /** A list of `GemTag` objects. */
  nodes: Array<Maybe<GemTag>>,
  /** A list of edges which contains the `GemTag` and cursor to aid in pagination. */
  edges: Array<GemTagsEdge>,
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
  /** The count of *all* `GemTag` you could get from the connection. */
  totalCount: Scalars['Int'],
};

/** A `GemTag` edge in the connection. */
export type GemTagsEdge = {
   __typename?: 'GemTagsEdge',
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>,
  /** The `GemTag` at the end of the edge. */
  node?: Maybe<GemTag>,
};

/** Methods to use when ordering `GemTag`. */
export enum GemTagsOrderBy {
  Natural = 'NATURAL',
  GemIdAsc = 'GEM_ID_ASC',
  GemIdDesc = 'GEM_ID_DESC',
  TagIdAsc = 'TAG_ID_ASC',
  TagIdDesc = 'TAG_ID_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

export type Modifier = Node & {
   __typename?: 'Modifier',
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'],
  uniqueId: Scalars['Int'],
  type: ModifierType,
  text: Scalars['String'],
  optional: Scalars['Boolean'],
  createdAt: Scalars['Datetime'],
  updatedAt: Scalars['Datetime'],
  /** Reads a single `Unique` that is related to this `Modifier`. */
  unique?: Maybe<Unique>,
};

/** 
 * A condition to be used against `Modifier` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 **/
export type ModifierCondition = {
  /** Checks for equality with the object’s `uniqueId` field. */
  uniqueId?: Maybe<Scalars['Int']>,
};

/** An input for mutations affecting `Modifier` */
export type ModifierInput = {
  uniqueId: Scalars['Int'],
  type: ModifierType,
  text: Scalars['String'],
  optional: Scalars['Boolean'],
  createdAt?: Maybe<Scalars['Datetime']>,
  updatedAt?: Maybe<Scalars['Datetime']>,
};

/** Represents an update to a `Modifier`. Fields that are set will be updated. */
export type ModifierPatch = {
  uniqueId?: Maybe<Scalars['Int']>,
  type?: Maybe<ModifierType>,
  text?: Maybe<Scalars['String']>,
  optional?: Maybe<Scalars['Boolean']>,
  createdAt?: Maybe<Scalars['Datetime']>,
  updatedAt?: Maybe<Scalars['Datetime']>,
};

/** A connection to a list of `Modifier` values. */
export type ModifiersConnection = {
   __typename?: 'ModifiersConnection',
  /** A list of `Modifier` objects. */
  nodes: Array<Maybe<Modifier>>,
  /** A list of edges which contains the `Modifier` and cursor to aid in pagination. */
  edges: Array<ModifiersEdge>,
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
  /** The count of *all* `Modifier` you could get from the connection. */
  totalCount: Scalars['Int'],
};

/** A `Modifier` edge in the connection. */
export type ModifiersEdge = {
   __typename?: 'ModifiersEdge',
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>,
  /** The `Modifier` at the end of the edge. */
  node?: Maybe<Modifier>,
};

/** Methods to use when ordering `Modifier`. */
export enum ModifiersOrderBy {
  Natural = 'NATURAL',
  UniqueIdAsc = 'UNIQUE_ID_ASC',
  UniqueIdDesc = 'UNIQUE_ID_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

export enum ModifierType {
  Explicit = 'EXPLICIT',
  Implicit = 'IMPLICIT'
}

/** The root mutation type which contains root level fields which mutate data. */
export type Mutation = {
   __typename?: 'Mutation',
  /** Creates a single `BuildUnique`. */
  createBuildUnique?: Maybe<CreateBuildUniquePayload>,
  /** Creates a single `Build`. */
  createBuild?: Maybe<CreateBuildPayload>,
  /** Updates a single `BuildUnique` using its globally unique id and a patch. */
  updateBuildUnique?: Maybe<UpdateBuildUniquePayload>,
  /** Updates a single `BuildUnique` using a unique key and a patch. */
  updateBuildUniqueByBuildIdAndUniqueIdAndLevelAndSlot?: Maybe<UpdateBuildUniquePayload>,
  /** Updates a single `Build` using its globally unique id and a patch. */
  updateBuild?: Maybe<UpdateBuildPayload>,
  /** Updates a single `Build` using a unique key and a patch. */
  updateBuildById?: Maybe<UpdateBuildPayload>,
  /** Deletes a single `BuildUnique` using its globally unique id. */
  deleteBuildUnique?: Maybe<DeleteBuildUniquePayload>,
  /** Deletes a single `BuildUnique` using a unique key. */
  deleteBuildUniqueByBuildIdAndUniqueIdAndLevelAndSlot?: Maybe<DeleteBuildUniquePayload>,
  /** Deletes a single `Build` using its globally unique id. */
  deleteBuild?: Maybe<DeleteBuildPayload>,
  /** Deletes a single `Build` using a unique key. */
  deleteBuildById?: Maybe<DeleteBuildPayload>,
  /** Inserts a single `GemTag`; if the record already exists then insteads updates the record. */
  upsertGemTagByGemIdAndTagId?: Maybe<UpsertGemTagPayload>,
  /** Inserts a single `Gem`; if the record already exists then insteads updates the record. */
  upsertGemByName?: Maybe<UpsertGemPayload>,
  /** Inserts a single `Modifier`; if the record already exists then insteads updates the record. */
  upsertModifierByUniqueIdAndTypeAndText?: Maybe<UpsertModifierPayload>,
  /** Inserts a single `Tag`; if the record already exists then insteads updates the record. */
  upsertTagByName?: Maybe<UpsertTagPayload>,
  /** Inserts a single `Unique`; if the record already exists then insteads updates the record. */
  upsertUniqueByName?: Maybe<UpsertUniquePayload>,
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateBuildUniqueArgs = {
  input: CreateBuildUniqueInput
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateBuildArgs = {
  input: CreateBuildInput
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateBuildUniqueArgs = {
  input: UpdateBuildUniqueInput
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateBuildUniqueByBuildIdAndUniqueIdAndLevelAndSlotArgs = {
  input: UpdateBuildUniqueByBuildIdAndUniqueIdAndLevelAndSlotInput
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateBuildArgs = {
  input: UpdateBuildInput
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateBuildByIdArgs = {
  input: UpdateBuildByIdInput
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteBuildUniqueArgs = {
  input: DeleteBuildUniqueInput
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteBuildUniqueByBuildIdAndUniqueIdAndLevelAndSlotArgs = {
  input: DeleteBuildUniqueByBuildIdAndUniqueIdAndLevelAndSlotInput
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteBuildArgs = {
  input: DeleteBuildInput
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteBuildByIdArgs = {
  input: DeleteBuildByIdInput
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpsertGemTagByGemIdAndTagIdArgs = {
  input: UpsertGemTagByGemIdAndTagIdInput
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpsertGemByNameArgs = {
  input: UpsertGemByNameInput
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpsertModifierByUniqueIdAndTypeAndTextArgs = {
  input: UpsertModifierByUniqueIdAndTypeAndTextInput
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpsertTagByNameArgs = {
  input: UpsertTagByNameInput
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpsertUniqueByNameArgs = {
  input: UpsertUniqueByNameInput
};

/** An object with a globally unique `ID`. */
export type Node = {
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'],
};

/** Information about pagination in a connection. */
export type PageInfo = {
   __typename?: 'PageInfo',
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'],
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'],
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['Cursor']>,
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['Cursor']>,
};

/** The root query type which gives access points into the data universe. */
export type Query = Node & {
   __typename?: 'Query',
  /** 
 * Exposes the root query type nested one level down. This is helpful for Relay 1
   * which can only query top level fields if they are in a particular form.
 **/
  query: Query,
  /** The root query type must be a `Node` to work well with Relay 1 mutations. This just resolves to `query`. */
  nodeId: Scalars['ID'],
  /** Fetches an object given its globally unique `ID`. */
  node?: Maybe<Node>,
  /** Reads and enables pagination through a set of `BuildUnique`. */
  buildUniques?: Maybe<BuildUniquesConnection>,
  /** Reads and enables pagination through a set of `Build`. */
  builds?: Maybe<BuildsConnection>,
  /** Reads and enables pagination through a set of `GemTag`. */
  gemTags?: Maybe<GemTagsConnection>,
  /** Reads and enables pagination through a set of `Gem`. */
  gems?: Maybe<GemsConnection>,
  /** Reads and enables pagination through a set of `Modifier`. */
  modifiers?: Maybe<ModifiersConnection>,
  /** Reads and enables pagination through a set of `SearchItem`. */
  searchItems?: Maybe<SearchItemsConnection>,
  /** Reads and enables pagination through a set of `Tag`. */
  tags?: Maybe<TagsConnection>,
  /** Reads and enables pagination through a set of `Unique`. */
  uniques?: Maybe<UniquesConnection>,
  buildUniqueByBuildIdAndUniqueIdAndLevelAndSlot?: Maybe<BuildUnique>,
  buildById?: Maybe<Build>,
  gemTagByGemIdAndTagId?: Maybe<GemTag>,
  gemById?: Maybe<Gem>,
  gemByName?: Maybe<Gem>,
  modifierByUniqueIdAndTypeAndText?: Maybe<Modifier>,
  tagById?: Maybe<Tag>,
  tagByName?: Maybe<Tag>,
  uniqueById?: Maybe<Unique>,
  uniqueByName?: Maybe<Unique>,
  /** Reads and enables pagination through a set of `SearchItem`. */
  search: SearchItemsConnection,
  /** Reads a single `BuildUnique` using its globally unique `ID`. */
  buildUnique?: Maybe<BuildUnique>,
  /** Reads a single `Build` using its globally unique `ID`. */
  build?: Maybe<Build>,
  /** Reads a single `GemTag` using its globally unique `ID`. */
  gemTag?: Maybe<GemTag>,
  /** Reads a single `Gem` using its globally unique `ID`. */
  gem?: Maybe<Gem>,
  /** Reads a single `Modifier` using its globally unique `ID`. */
  modifier?: Maybe<Modifier>,
  /** Reads a single `Tag` using its globally unique `ID`. */
  tag?: Maybe<Tag>,
  /** Reads a single `Unique` using its globally unique `ID`. */
  unique?: Maybe<Unique>,
};


/** The root query type which gives access points into the data universe. */
export type QueryNodeArgs = {
  nodeId: Scalars['ID']
};


/** The root query type which gives access points into the data universe. */
export type QueryBuildUniquesArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<BuildUniquesOrderBy>>,
  condition?: Maybe<BuildUniqueCondition>
};


/** The root query type which gives access points into the data universe. */
export type QueryBuildsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<BuildsOrderBy>>,
  condition?: Maybe<BuildCondition>
};


/** The root query type which gives access points into the data universe. */
export type QueryGemTagsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<GemTagsOrderBy>>,
  condition?: Maybe<GemTagCondition>
};


/** The root query type which gives access points into the data universe. */
export type QueryGemsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<GemsOrderBy>>,
  condition?: Maybe<GemCondition>
};


/** The root query type which gives access points into the data universe. */
export type QueryModifiersArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<ModifiersOrderBy>>,
  condition?: Maybe<ModifierCondition>
};


/** The root query type which gives access points into the data universe. */
export type QuerySearchItemsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<SearchItemsOrderBy>>,
  condition?: Maybe<SearchItemCondition>
};


/** The root query type which gives access points into the data universe. */
export type QueryTagsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<TagsOrderBy>>,
  condition?: Maybe<TagCondition>
};


/** The root query type which gives access points into the data universe. */
export type QueryUniquesArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<UniquesOrderBy>>,
  condition?: Maybe<UniqueCondition>
};


/** The root query type which gives access points into the data universe. */
export type QueryBuildUniqueByBuildIdAndUniqueIdAndLevelAndSlotArgs = {
  buildId: Scalars['Int'],
  uniqueId: Scalars['Int'],
  level: Scalars['Int'],
  slot: SlotType
};


/** The root query type which gives access points into the data universe. */
export type QueryBuildByIdArgs = {
  id: Scalars['Int']
};


/** The root query type which gives access points into the data universe. */
export type QueryGemTagByGemIdAndTagIdArgs = {
  gemId: Scalars['Int'],
  tagId: Scalars['Int']
};


/** The root query type which gives access points into the data universe. */
export type QueryGemByIdArgs = {
  id: Scalars['Int']
};


/** The root query type which gives access points into the data universe. */
export type QueryGemByNameArgs = {
  name: Scalars['String']
};


/** The root query type which gives access points into the data universe. */
export type QueryModifierByUniqueIdAndTypeAndTextArgs = {
  uniqueId: Scalars['Int'],
  type: ModifierType,
  text: Scalars['String']
};


/** The root query type which gives access points into the data universe. */
export type QueryTagByIdArgs = {
  id: Scalars['Int']
};


/** The root query type which gives access points into the data universe. */
export type QueryTagByNameArgs = {
  name: Scalars['String']
};


/** The root query type which gives access points into the data universe. */
export type QueryUniqueByIdArgs = {
  id: Scalars['Int']
};


/** The root query type which gives access points into the data universe. */
export type QueryUniqueByNameArgs = {
  name: Scalars['String']
};


/** The root query type which gives access points into the data universe. */
export type QuerySearchArgs = {
  query?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>
};


/** The root query type which gives access points into the data universe. */
export type QueryBuildUniqueArgs = {
  nodeId: Scalars['ID']
};


/** The root query type which gives access points into the data universe. */
export type QueryBuildArgs = {
  nodeId: Scalars['ID']
};


/** The root query type which gives access points into the data universe. */
export type QueryGemTagArgs = {
  nodeId: Scalars['ID']
};


/** The root query type which gives access points into the data universe. */
export type QueryGemArgs = {
  nodeId: Scalars['ID']
};


/** The root query type which gives access points into the data universe. */
export type QueryModifierArgs = {
  nodeId: Scalars['ID']
};


/** The root query type which gives access points into the data universe. */
export type QueryTagArgs = {
  nodeId: Scalars['ID']
};


/** The root query type which gives access points into the data universe. */
export type QueryUniqueArgs = {
  nodeId: Scalars['ID']
};

export type SearchItem = {
   __typename?: 'SearchItem',
  name?: Maybe<Scalars['String']>,
  iconUrl?: Maybe<Scalars['String']>,
  type?: Maybe<Scalars['String']>,
};

/** 
 * A condition to be used against `SearchItem` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 **/
export type SearchItemCondition = {
  /** Checks for equality with the object’s `name` field. */
  name?: Maybe<Scalars['String']>,
};

/** A connection to a list of `SearchItem` values. */
export type SearchItemsConnection = {
   __typename?: 'SearchItemsConnection',
  /** A list of `SearchItem` objects. */
  nodes: Array<Maybe<SearchItem>>,
  /** A list of edges which contains the `SearchItem` and cursor to aid in pagination. */
  edges: Array<SearchItemsEdge>,
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
  /** The count of *all* `SearchItem` you could get from the connection. */
  totalCount: Scalars['Int'],
};

/** A `SearchItem` edge in the connection. */
export type SearchItemsEdge = {
   __typename?: 'SearchItemsEdge',
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>,
  /** The `SearchItem` at the end of the edge. */
  node?: Maybe<SearchItem>,
};

/** Methods to use when ordering `SearchItem`. */
export enum SearchItemsOrderBy {
  Natural = 'NATURAL',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC'
}

export enum SlotType {
  Helmet = 'HELMET',
  Body = 'BODY'
}

export type Tag = Node & {
   __typename?: 'Tag',
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'],
  id: Scalars['Int'],
  name: Scalars['String'],
  createdAt: Scalars['Datetime'],
  updatedAt: Scalars['Datetime'],
  /** Reads and enables pagination through a set of `GemTag`. */
  gemTags: GemTagsConnection,
  /** Reads and enables pagination through a set of `Gem`. */
  gemsByGemTagTagIdAndGemId: GemsConnection,
};


export type TagGemTagsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<GemTagsOrderBy>>,
  condition?: Maybe<GemTagCondition>
};


export type TagGemsByGemTagTagIdAndGemIdArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<GemsOrderBy>>,
  condition?: Maybe<GemCondition>
};

/** A condition to be used against `Tag` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type TagCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: Maybe<Scalars['Int']>,
  /** Checks for equality with the object’s `name` field. */
  name?: Maybe<Scalars['String']>,
};

/** An input for mutations affecting `Tag` */
export type TagInput = {
  id?: Maybe<Scalars['Int']>,
  name: Scalars['String'],
  createdAt?: Maybe<Scalars['Datetime']>,
  updatedAt?: Maybe<Scalars['Datetime']>,
};

/** Represents an update to a `Tag`. Fields that are set will be updated. */
export type TagPatch = {
  id?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['Datetime']>,
  updatedAt?: Maybe<Scalars['Datetime']>,
};

/** A connection to a list of `Tag` values. */
export type TagsConnection = {
   __typename?: 'TagsConnection',
  /** A list of `Tag` objects. */
  nodes: Array<Maybe<Tag>>,
  /** A list of edges which contains the `Tag` and cursor to aid in pagination. */
  edges: Array<TagsEdge>,
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
  /** The count of *all* `Tag` you could get from the connection. */
  totalCount: Scalars['Int'],
};

/** A `Tag` edge in the connection. */
export type TagsEdge = {
   __typename?: 'TagsEdge',
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>,
  /** The `Tag` at the end of the edge. */
  node?: Maybe<Tag>,
};

/** Methods to use when ordering `Tag`. */
export enum TagsOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

export type Unique = Node & {
   __typename?: 'Unique',
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'],
  id: Scalars['Int'],
  name: Scalars['String'],
  iconUrl: Scalars['String'],
  baseType: Scalars['String'],
  itemType: Scalars['String'],
  flavourText: Scalars['String'],
  levelRequirement: Scalars['Int'],
  strRequirement: Scalars['Int'],
  dexRequirement: Scalars['Int'],
  intRequirement: Scalars['Int'],
  createdAt: Scalars['Datetime'],
  updatedAt: Scalars['Datetime'],
  /** Reads and enables pagination through a set of `Modifier`. */
  modifiers: ModifiersConnection,
  /** Reads and enables pagination through a set of `BuildUnique`. */
  buildUniques: BuildUniquesConnection,
  /** Reads and enables pagination through a set of `Build`. */
  buildsByBuildUniqueUniqueIdAndBuildId: BuildsConnection,
};


export type UniqueModifiersArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<ModifiersOrderBy>>,
  condition?: Maybe<ModifierCondition>
};


export type UniqueBuildUniquesArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<BuildUniquesOrderBy>>,
  condition?: Maybe<BuildUniqueCondition>
};


export type UniqueBuildsByBuildUniqueUniqueIdAndBuildIdArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<BuildsOrderBy>>,
  condition?: Maybe<BuildCondition>
};

/** A condition to be used against `Unique` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type UniqueCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: Maybe<Scalars['Int']>,
  /** Checks for equality with the object’s `name` field. */
  name?: Maybe<Scalars['String']>,
};

/** An input for mutations affecting `Unique` */
export type UniqueInput = {
  id?: Maybe<Scalars['Int']>,
  name: Scalars['String'],
  iconUrl: Scalars['String'],
  baseType: Scalars['String'],
  itemType: Scalars['String'],
  flavourText: Scalars['String'],
  levelRequirement: Scalars['Int'],
  strRequirement: Scalars['Int'],
  dexRequirement: Scalars['Int'],
  intRequirement: Scalars['Int'],
  createdAt?: Maybe<Scalars['Datetime']>,
  updatedAt?: Maybe<Scalars['Datetime']>,
};

/** Represents an update to a `Unique`. Fields that are set will be updated. */
export type UniquePatch = {
  id?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
  iconUrl?: Maybe<Scalars['String']>,
  baseType?: Maybe<Scalars['String']>,
  itemType?: Maybe<Scalars['String']>,
  flavourText?: Maybe<Scalars['String']>,
  levelRequirement?: Maybe<Scalars['Int']>,
  strRequirement?: Maybe<Scalars['Int']>,
  dexRequirement?: Maybe<Scalars['Int']>,
  intRequirement?: Maybe<Scalars['Int']>,
  createdAt?: Maybe<Scalars['Datetime']>,
  updatedAt?: Maybe<Scalars['Datetime']>,
};

/** A connection to a list of `Unique` values. */
export type UniquesConnection = {
   __typename?: 'UniquesConnection',
  /** A list of `Unique` objects. */
  nodes: Array<Maybe<Unique>>,
  /** A list of edges which contains the `Unique` and cursor to aid in pagination. */
  edges: Array<UniquesEdge>,
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
  /** The count of *all* `Unique` you could get from the connection. */
  totalCount: Scalars['Int'],
};

/** A `Unique` edge in the connection. */
export type UniquesEdge = {
   __typename?: 'UniquesEdge',
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>,
  /** The `Unique` at the end of the edge. */
  node?: Maybe<Unique>,
};

/** Methods to use when ordering `Unique`. */
export enum UniquesOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** All input for the `updateBuildById` mutation. */
export type UpdateBuildByIdInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 **/
  clientMutationId?: Maybe<Scalars['String']>,
  /** An object where the defined keys will be set on the `Build` being updated. */
  patch: BuildPatch,
  id: Scalars['Int'],
};

/** All input for the `updateBuild` mutation. */
export type UpdateBuildInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 **/
  clientMutationId?: Maybe<Scalars['String']>,
  /** The globally unique `ID` which will identify a single `Build` to be updated. */
  nodeId: Scalars['ID'],
  /** An object where the defined keys will be set on the `Build` being updated. */
  patch: BuildPatch,
};

/** The output of our update `Build` mutation. */
export type UpdateBuildPayload = {
   __typename?: 'UpdateBuildPayload',
  /** 
 * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
 **/
  clientMutationId?: Maybe<Scalars['String']>,
  /** The `Build` that was updated by this mutation. */
  build?: Maybe<Build>,
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>,
  /** An edge for our `Build`. May be used by Relay 1. */
  buildEdge?: Maybe<BuildsEdge>,
};


/** The output of our update `Build` mutation. */
export type UpdateBuildPayloadBuildEdgeArgs = {
  orderBy?: Maybe<Array<BuildsOrderBy>>
};

/** All input for the `updateBuildUniqueByBuildIdAndUniqueIdAndLevelAndSlot` mutation. */
export type UpdateBuildUniqueByBuildIdAndUniqueIdAndLevelAndSlotInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 **/
  clientMutationId?: Maybe<Scalars['String']>,
  /** An object where the defined keys will be set on the `BuildUnique` being updated. */
  patch: BuildUniquePatch,
  buildId: Scalars['Int'],
  uniqueId: Scalars['Int'],
  level: Scalars['Int'],
  slot: SlotType,
};

/** All input for the `updateBuildUnique` mutation. */
export type UpdateBuildUniqueInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 **/
  clientMutationId?: Maybe<Scalars['String']>,
  /** The globally unique `ID` which will identify a single `BuildUnique` to be updated. */
  nodeId: Scalars['ID'],
  /** An object where the defined keys will be set on the `BuildUnique` being updated. */
  patch: BuildUniquePatch,
};

/** The output of our update `BuildUnique` mutation. */
export type UpdateBuildUniquePayload = {
   __typename?: 'UpdateBuildUniquePayload',
  /** 
 * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
 **/
  clientMutationId?: Maybe<Scalars['String']>,
  /** The `BuildUnique` that was updated by this mutation. */
  buildUnique?: Maybe<BuildUnique>,
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>,
  /** Reads a single `Build` that is related to this `BuildUnique`. */
  build?: Maybe<Build>,
  /** Reads a single `Unique` that is related to this `BuildUnique`. */
  unique?: Maybe<Unique>,
  /** An edge for our `BuildUnique`. May be used by Relay 1. */
  buildUniqueEdge?: Maybe<BuildUniquesEdge>,
};


/** The output of our update `BuildUnique` mutation. */
export type UpdateBuildUniquePayloadBuildUniqueEdgeArgs = {
  orderBy?: Maybe<Array<BuildUniquesOrderBy>>
};

/** All input for the `upsertGemByName` mutation. */
export type UpsertGemByNameInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 **/
  clientMutationId?: Maybe<Scalars['String']>,
  /** The `Gem` to be created by this mutation. */
  gem: GemInput,
  /** An object where the defined keys will be set on the `Gem` being updated. */
  patch: GemPatch,
};

/** The output of our upsert `Gem` mutation. */
export type UpsertGemPayload = {
   __typename?: 'UpsertGemPayload',
  /** 
 * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
 **/
  clientMutationId?: Maybe<Scalars['String']>,
  /** The `Gem` that was upserted by this mutation. */
  gem?: Maybe<Gem>,
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>,
  /** An edge for our `Gem`. May be used by Relay 1. */
  gemEdge?: Maybe<GemsEdge>,
};


/** The output of our upsert `Gem` mutation. */
export type UpsertGemPayloadGemEdgeArgs = {
  orderBy?: Maybe<Array<GemsOrderBy>>
};

/** All input for the `upsertGemTagByGemIdAndTagId` mutation. */
export type UpsertGemTagByGemIdAndTagIdInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 **/
  clientMutationId?: Maybe<Scalars['String']>,
  /** The `GemTag` to be created by this mutation. */
  gemTag: GemTagInput,
  /** An object where the defined keys will be set on the `GemTag` being updated. */
  patch: GemTagPatch,
};

/** The output of our upsert `GemTag` mutation. */
export type UpsertGemTagPayload = {
   __typename?: 'UpsertGemTagPayload',
  /** 
 * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
 **/
  clientMutationId?: Maybe<Scalars['String']>,
  /** The `GemTag` that was upserted by this mutation. */
  gemTag?: Maybe<GemTag>,
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>,
  /** Reads a single `Gem` that is related to this `GemTag`. */
  gem?: Maybe<Gem>,
  /** Reads a single `Tag` that is related to this `GemTag`. */
  tag?: Maybe<Tag>,
  /** An edge for our `GemTag`. May be used by Relay 1. */
  gemTagEdge?: Maybe<GemTagsEdge>,
};


/** The output of our upsert `GemTag` mutation. */
export type UpsertGemTagPayloadGemTagEdgeArgs = {
  orderBy?: Maybe<Array<GemTagsOrderBy>>
};

/** All input for the `upsertModifierByUniqueIdAndTypeAndText` mutation. */
export type UpsertModifierByUniqueIdAndTypeAndTextInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 **/
  clientMutationId?: Maybe<Scalars['String']>,
  /** The `Modifier` to be created by this mutation. */
  modifier: ModifierInput,
  /** An object where the defined keys will be set on the `Modifier` being updated. */
  patch: ModifierPatch,
};

/** The output of our upsert `Modifier` mutation. */
export type UpsertModifierPayload = {
   __typename?: 'UpsertModifierPayload',
  /** 
 * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
 **/
  clientMutationId?: Maybe<Scalars['String']>,
  /** The `Modifier` that was upserted by this mutation. */
  modifier?: Maybe<Modifier>,
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>,
  /** Reads a single `Unique` that is related to this `Modifier`. */
  unique?: Maybe<Unique>,
  /** An edge for our `Modifier`. May be used by Relay 1. */
  modifierEdge?: Maybe<ModifiersEdge>,
};


/** The output of our upsert `Modifier` mutation. */
export type UpsertModifierPayloadModifierEdgeArgs = {
  orderBy?: Maybe<Array<ModifiersOrderBy>>
};

/** All input for the `upsertTagByName` mutation. */
export type UpsertTagByNameInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 **/
  clientMutationId?: Maybe<Scalars['String']>,
  /** The `Tag` to be created by this mutation. */
  tag: TagInput,
  /** An object where the defined keys will be set on the `Tag` being updated. */
  patch: TagPatch,
};

/** The output of our upsert `Tag` mutation. */
export type UpsertTagPayload = {
   __typename?: 'UpsertTagPayload',
  /** 
 * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
 **/
  clientMutationId?: Maybe<Scalars['String']>,
  /** The `Tag` that was upserted by this mutation. */
  tag?: Maybe<Tag>,
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>,
  /** An edge for our `Tag`. May be used by Relay 1. */
  tagEdge?: Maybe<TagsEdge>,
};


/** The output of our upsert `Tag` mutation. */
export type UpsertTagPayloadTagEdgeArgs = {
  orderBy?: Maybe<Array<TagsOrderBy>>
};

/** All input for the `upsertUniqueByName` mutation. */
export type UpsertUniqueByNameInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 **/
  clientMutationId?: Maybe<Scalars['String']>,
  /** The `Unique` to be created by this mutation. */
  unique: UniqueInput,
  /** An object where the defined keys will be set on the `Unique` being updated. */
  patch: UniquePatch,
};

/** The output of our upsert `Unique` mutation. */
export type UpsertUniquePayload = {
   __typename?: 'UpsertUniquePayload',
  /** 
 * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
 **/
  clientMutationId?: Maybe<Scalars['String']>,
  /** The `Unique` that was upserted by this mutation. */
  unique?: Maybe<Unique>,
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>,
  /** An edge for our `Unique`. May be used by Relay 1. */
  uniqueEdge?: Maybe<UniquesEdge>,
};


/** The output of our upsert `Unique` mutation. */
export type UpsertUniquePayloadUniqueEdgeArgs = {
  orderBy?: Maybe<Array<UniquesOrderBy>>
};
export type GetUniqueQueryVariables = {
  name: Scalars['String']
};


export type GetUniqueQuery = { __typename?: 'Query', uniqueByName: Maybe<{ __typename?: 'Unique', name: string, levelRequirement: number }> };

export type PopoverUniqueQueryVariables = {
  name: Scalars['String']
};


export type PopoverUniqueQuery = { __typename?: 'Query', uniqueByName: Maybe<{ __typename?: 'Unique', name: string, baseType: string, iconUrl: string, flavourText: string, levelRequirement: number, strRequirement: number, dexRequirement: number, intRequirement: number, modifiers: { __typename?: 'ModifiersConnection', nodes: Array<Maybe<{ __typename?: 'Modifier', type: ModifierType, text: string, optional: boolean }>> } }> };

export type SearchQueryVariables = {
  query: Scalars['String']
};


export type SearchQuery = { __typename?: 'Query', search: { __typename?: 'SearchItemsConnection', nodes: Array<Maybe<{ __typename?: 'SearchItem', name: Maybe<string>, iconUrl: Maybe<string>, type: Maybe<string> }>> } };

export const GetUniqueDocument = gql`
    query GetUnique($name: String!) {
  uniqueByName(name: $name) {
    name
    levelRequirement
  }
}
    `;

    export function useGetUniqueQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetUniqueQuery, GetUniqueQueryVariables>) {
      return ApolloReactHooks.useQuery<GetUniqueQuery, GetUniqueQueryVariables>(GetUniqueDocument, baseOptions);
    }
      export function useGetUniqueLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetUniqueQuery, GetUniqueQueryVariables>) {
        return ApolloReactHooks.useLazyQuery<GetUniqueQuery, GetUniqueQueryVariables>(GetUniqueDocument, baseOptions);
      }
      
export type GetUniqueQueryHookResult = ReturnType<typeof useGetUniqueQuery>;
export type GetUniqueQueryResult = ApolloReactCommon.QueryResult<GetUniqueQuery, GetUniqueQueryVariables>;
export const PopoverUniqueDocument = gql`
    query PopoverUnique($name: String!) {
  uniqueByName(name: $name) {
    name
    baseType
    iconUrl
    flavourText
    levelRequirement
    strRequirement
    dexRequirement
    intRequirement
    modifiers {
      nodes {
        type
        text
        optional
      }
    }
  }
}
    `;

    export function usePopoverUniqueQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<PopoverUniqueQuery, PopoverUniqueQueryVariables>) {
      return ApolloReactHooks.useQuery<PopoverUniqueQuery, PopoverUniqueQueryVariables>(PopoverUniqueDocument, baseOptions);
    }
      export function usePopoverUniqueLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<PopoverUniqueQuery, PopoverUniqueQueryVariables>) {
        return ApolloReactHooks.useLazyQuery<PopoverUniqueQuery, PopoverUniqueQueryVariables>(PopoverUniqueDocument, baseOptions);
      }
      
export type PopoverUniqueQueryHookResult = ReturnType<typeof usePopoverUniqueQuery>;
export type PopoverUniqueQueryResult = ApolloReactCommon.QueryResult<PopoverUniqueQuery, PopoverUniqueQueryVariables>;
export const SearchDocument = gql`
    query Search($query: String!) {
  search(query: $query, first: 5) {
    nodes {
      name
      iconUrl
      type
    }
  }
}
    `;

    export function useSearchQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<SearchQuery, SearchQueryVariables>) {
      return ApolloReactHooks.useQuery<SearchQuery, SearchQueryVariables>(SearchDocument, baseOptions);
    }
      export function useSearchLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SearchQuery, SearchQueryVariables>) {
        return ApolloReactHooks.useLazyQuery<SearchQuery, SearchQueryVariables>(SearchDocument, baseOptions);
      }
      
export type SearchQueryHookResult = ReturnType<typeof useSearchQuery>;
export type SearchQueryResult = ApolloReactCommon.QueryResult<SearchQuery, SearchQueryVariables>;