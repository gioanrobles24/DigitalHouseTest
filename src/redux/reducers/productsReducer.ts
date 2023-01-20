import {ProductsActions, ProductsState} from '../types/products';
import Products from '@store/actionTypes';

const initialState: ProductsState = {
  pending: false,
  products: [],
  error: null,
  totalPoints: '0',
  defaultProducts: [],
};

export default (state = initialState, action: ProductsActions) => {
  switch (action.type) {
    case Products.FILTER_PRODUCTS:
      return {
        ...state,
        pending: true,
      };
    case Products.FILTER_PRODUCTS_SUCCESS:
      return {
        ...state,
        pending: false,
        products: action.payload.products,
      };
    case Products.FILTER_PRODUCTS_FAILURE:
      return {
        ...state,
        pending: false,
        error: action.payload.error,
      };
    case Products.GET_PRODUCTS:
      return {
        ...state,
        pending: true,
      };
    case Products.GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        pending: false,
        products: action.payload.products,
        totalPoints: action.payload.totalPoints,
        defaultProducts: action.payload.products,
      };
    case Products.GET_PRODUCTS_FAILURE:
      return {
        ...state,
        pending: false,
        error: action.payload.error,
      };
    default:
      return {
        ...state,
      };
  }
};
