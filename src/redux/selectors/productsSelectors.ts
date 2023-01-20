import {RootState} from '../reducers/rootReducer';

export const getProducts = (state: RootState) => state.products.products;
export const getTotalPoints = (state: RootState): number =>
  state.products.totalPoints;
export const getLoading = (state: RootState): boolean => state.products.pending;
