import {all, fork} from 'redux-saga/effects';
import ProductsSaga from './products';

export function* rootSaga() {
  yield all([fork(ProductsSaga)]);
}
