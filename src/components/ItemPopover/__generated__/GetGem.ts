/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetGem
// ====================================================

export interface GetGem_gemByName {
  name: string;
  description: string;
  iconUrl: string;
  statText: string;
  qualityStatText: string;
  levelRequirement: number;
  strRequirement: number;
  dexRequirement: number;
  intRequirement: number;
}

export interface GetGem {
  gemByName: GetGem_gemByName | null;
}

export interface GetGemVariables {
  name: string;
}
