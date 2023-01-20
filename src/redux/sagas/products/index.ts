import {Product} from '@models/products';
import {
  getProductsFailure,
  getProductsSuccess,
} from '@store/actions/products/productAction';
import Products from '@store/actionTypes';
import {takeLatest, all, call, put} from 'redux-saga/effects';

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
      .reduce((acc, prod) => acc + prod.points, 0)
      .toFixed(2)
      .replace(/\d(?=(\d{3})+\.)/g, '$&,');
    yield put(
      getProductsSuccess({
        products: response,
        total_points: totalPoints,
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

function* filterProducts(): Generator<any> {
  try {
    console.log('action');
  } catch (error: any) {}
}

function* ProductsSaga() {
  yield all([
    takeLatest([Products.GET_PRODUCTS], getProducts),
    takeLatest([Products.FILTER_PRODUCTS], filterProducts),
  ]);
}

export default ProductsSaga;
