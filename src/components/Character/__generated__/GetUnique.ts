/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetUnique
// ====================================================

export interface GetUnique_uniqueByName {
  __typename: "Unique";
  name: string;
  levelRequirement: number;
}

export interface GetUnique {
  uniqueByName: GetUnique_uniqueByName | null;
}

export interface GetUniqueVariables {
  name: string;
}
