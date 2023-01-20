import {Product} from '@models/products';
import Products from '@store/actionTypes';

export interface ProductsState {
  pending: boolean;
  products: Product[];
  error: string | null;
  totalPoints: number;
}

export interface GetProductsRequest {
  type: Products.GET_PRODUCTS;
}

export interface FilterProductsRequest {
  type: Products.FILTER_PRODUCTS;
}

export interface GetProductsSuccessPayload {
  products: Product[];
  total_points: string;
}

export interface GetProductsFailurePayload {
  error: string;
}
export type GetProductsFailure = {
  type: Products.GET_PRODUCTS_FAILURE;
  payload: GetProductsFailurePayload;
};

export type GetProductsSuccess = {
  type: Products.GET_PRODUCTS_SUCCESS;
  payload: GetProductsSuccessPayload;
};

export interface FilterProductsSuccessPayload {
  products: Product[];
}

export interface FilterProductsFailurePayload {
  error: string;
}

export type FilterProductsFailure = {
  type: Products.FILTER_PRODUCTS_FAILURE;
  payload: FilterProductsFailurePayload;
};

export type FilterProductsSuccess = {
  type: Products.FILTER_PRODUCTS_SUCCESS;
  payload: FilterProductsSuccessPayload;
};

export type ProductsActions =
  | GetProductsSuccess
  | GetProductsRequest
  | FilterProductsRequest
  | FilterProductsSuccess
  | GetProductsFailure
  | FilterProductsFailure;
