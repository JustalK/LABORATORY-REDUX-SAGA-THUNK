import { put, takeEvery, all } from 'redux-saga/effects';
import {
  increment,
  decrement,
} from 'apps/app-redux-saga/src/app/stores/Store1/Slices/Slice1';

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

export function* incrementAsync() {
  yield delay(1000);
  yield put(increment());
}

export function* decrementAsync() {
  yield delay(5000);
  yield put(decrement());
}

function* helloSaga() {
  console.log('Hello Sagas!');
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* watchIncrementAsync() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync);
}

export function* watchDecrementAsync() {
  yield takeEvery('DECREMENT_ASYNC', decrementAsync);
}

export default function* saga1() {
  yield all([helloSaga(), watchIncrementAsync(), watchDecrementAsync()]);
}
