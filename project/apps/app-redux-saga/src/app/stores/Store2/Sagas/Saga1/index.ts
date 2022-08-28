import {
  put,
  takeEvery,
  all,
  take,
  call,
  actionChannel,
} from 'redux-saga/effects';
import {
  increment,
  decrement,
} from 'apps/app-redux-saga/src/app/stores/Store1/Slices/Slice1';

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

export function* incrementAsync() {
  console.log('Increase Fired.');
  yield delay(1000);
  yield put(increment());
}

export function* decrementAsync() {
  console.log('Decrease Fired.');
  yield delay(3000);
  yield put(decrement());
}

function* helloSaga() {
  console.log('Hello Sagas!');
}

export function* watchIncrementAsync() {
  // @ts-ignore
  const requestChan = yield actionChannel('ASYNC');

  while (true) {
    const { payload } = yield take(requestChan);
    if (payload === 'INCREMENT') {
      yield call(incrementAsync);
    } else {
      yield call(decrementAsync);
    }
  }
}

export default function* saga1() {
  yield all([helloSaga(), watchIncrementAsync()]);
}
