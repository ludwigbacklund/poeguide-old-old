import { createStore, createTypedHooks } from 'easy-peasy';
import { storeModel, StoreModel } from './model';

export const makeStore = (initialState?: any) => {
  const store = createStore(storeModel, { initialState });
  return store;
};

if (process.env.NODE_ENV === 'development') {
  if (module.hot) {
    module.hot.accept('./model', () => {
      makeStore().reconfigure(storeModel); // 👈 Here is the magic
    });
  }
}

const typedHooks = createTypedHooks<StoreModel>();
export const useStoreActions = typedHooks.useStoreActions;
export const useStoreDispatch = typedHooks.useStoreDispatch;
export const useStoreState = typedHooks.useStoreState;
