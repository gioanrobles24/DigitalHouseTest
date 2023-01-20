import Products from '@store/actionTypes';
import {
  FilterProductsFailure,
  FilterProductsFailurePayload,
  FilterProductsRequest,
  FilterProductsSuccess,
  FilterProductsSuccessPayload,
  GetProductsFailure,
  GetProductsFailurePayload,
  GetProductsRequest,
  GetProductsSuccess,
  GetProductsSuccessPayload,
} from '@store/types/products';

export const getProductsRequest = (): GetProductsRequest => ({
  type: Products.GET_PRODUCTS,
});

export const getProductsSuccess = (
  payload: GetProductsSuccessPayload,
): GetProductsSuccess => ({
  type: Products.GET_PRODUCTS_SUCCESS,
  payload,
});

export const getProductsFailure = (
  payload: GetProductsFailurePayload,
): GetProductsFailure => ({
  type: Products.GET_PRODUCTS_FAILURE,
  payload,
});

export const filterProductsRequest = (): FilterProductsRequest => ({
  type: Products.FILTER_PRODUCTS,
});

export const filterProductsSuccess = (
  payload: FilterProductsSuccessPayload,
): FilterProductsSuccess => ({
  type: Products.FILTER_PRODUCTS_SUCCESS,
  payload,
});

export const filterProductsFailure = (
  payload: FilterProductsFailurePayload,
): FilterProductsFailure => ({
  type: Products.FILTER_PRODUCTS_FAILURE,
  payload,
});
