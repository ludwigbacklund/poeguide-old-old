import { buildModel, BuildModel } from './build';

export interface StoreModel {
  build: BuildModel;
}

export const storeModel: StoreModel = {
  build: buildModel,
};
