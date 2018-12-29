/* tslint:disable */
// This file was automatically generated and should not be edited.

import { ModifierType } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: GetUnique
// ====================================================

export interface GetUnique_uniqueByName_modifiers_nodes {
  __typename: "Modifier";
  type: ModifierType;
  text: string;
  optional: boolean;
}

export interface GetUnique_uniqueByName_modifiers {
  __typename: "ModifiersConnection";
  /**
   * A list of `Modifier` objects.
   */
  nodes: GetUnique_uniqueByName_modifiers_nodes[];
}

export interface GetUnique_uniqueByName {
  __typename: "Unique";
  name: string;
  baseType: string;
  iconUrl: string;
  flavourText: string;
  levelRequirement: number;
  /**
   * Reads and enables pagination through a set of `Modifier`.
   */
  modifiers: GetUnique_uniqueByName_modifiers;
}

export interface GetUnique {
  uniqueByName: GetUnique_uniqueByName | null;
}

export interface GetUniqueVariables {
  name: string;
}
