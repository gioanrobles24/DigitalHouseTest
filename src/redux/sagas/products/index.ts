import {takeLatest, all, call, put, select} from 'redux-saga/effects';
import {Product} from '@models/products';
import {
  filterProductsFailure,
  filterProductsSuccess,
  getProductsFailure,
  getProductsSuccess,
} from '@store/actions/products/productAction';
import Products from '@store/actionTypes';
import {FilterProductsRequest, filterTypes} from '@store/types/products';
import {getDefaultProducts} from '@store/selectors/productsSelectors';

const getProductRequest = async () => {
  const response = fetch(
    'https://6222994f666291106a29f999.mockapi.io/api/v1/products',
    {
      method: 'GET',
    },
  ).then(res => res.json());
  return response;
};

function* getProducts(): Generator<any> {
  try {
    const response: Product[] = (yield call(() =>
      getProductRequest(),
    )) as Product[];
    const totalPoints = response
      .reduce((acc, prod) => acc + (prod.is_redemption ? prod.points : 0), 0)
      .toFixed(2)
      .replace(/\d(?=(\d{3})+\.)/g, '$&,');
    yield put(
      getProductsSuccess({
        products: response,
        totalPoints: totalPoints,
      }),
    );
  } catch (error: any) {
    yield put(
      getProductsFailure({
        error: error.message,
      }),
    );
  }
}

function* filterProducts(action: FilterProductsRequest): Generator<any> {
  try {
    const productsDefault = (yield select(getDefaultProducts)) as Product[];
    if (action.filterType === filterTypes.redeemed) {
      const filtered = productsDefault.filter(
        product => product.is_redemption !== false,
      );
      yield put(filterProductsSuccess({products: filtered}));
    } else if (action.filterType === filterTypes.wined) {
      const filtered = productsDefault.filter(
        product => product.is_redemption !== true,
      );
      yield put(filterProductsSuccess({products: filtered}));
    } else {
      yield put(filterProductsSuccess({products: productsDefault}));
    }
  } catch (error: any) {
    yield put(filterProductsFailure({error: error.message}));
  }
}

function* ProductsSaga() {
  yield all([
    takeLatest([Products.GET_PRODUCTS], getProducts),
    takeLatest([Products.FILTER_PRODUCTS], filterProducts),
  ]);
}

export default ProductsSaga;
