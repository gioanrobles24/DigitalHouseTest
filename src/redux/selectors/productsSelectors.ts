import {RootState} from '../reducers/rootReducer';

export const getProducts = (state: RootState) => state.products.products;
export const getDefaultProducts = (state: RootState) =>
  state.products.defaultProducts;
export const getTotalPoints = (state: RootState): string =>
  state.products.totalPoints;
export const getLoading = (state: RootState): boolean => state.products.pending;
export const getErrorMessage = (state: RootState): string | null =>
  state.products.error;
