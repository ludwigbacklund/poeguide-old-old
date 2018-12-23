/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetSearch
// ====================================================

export interface GetSearch_search_nodes {
  __typename: "SearchItem";
  id: number | null;
  name: string | null;
  iconUrl: string | null;
}

export interface GetSearch_search {
  __typename: "SearchItemsConnection";
  /**
   * A list of `SearchItem` objects.
   */
  nodes: (GetSearch_search_nodes | null)[];
}

export interface GetSearch {
  /**
   * Reads and enables pagination through a set of `SearchItem`.
   */
  search: GetSearch_search;
}

export interface GetSearchVariables {
  query: string;
}
