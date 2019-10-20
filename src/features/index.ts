import { createStore, createTypedHooks } from 'easy-peasy';

import { TimelineModel, timelineModel } from './timeline';

interface StoreModel {
  timeline: TimelineModel;
}

const storeModel = {
  timeline: timelineModel,
};

export const makeStore = (initialState: any) => {
  const store = createStore(storeModel, { initialState });
  return store;
};

const typedHooks = createTypedHooks<StoreModel>();
export const useStoreActions = typedHooks.useStoreActions;
export const useStoreDispatch = typedHooks.useStoreDispatch;
export const useStoreState = typedHooks.useStoreState;
