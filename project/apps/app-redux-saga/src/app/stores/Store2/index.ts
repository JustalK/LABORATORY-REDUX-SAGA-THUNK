import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import saga1 from './Sagas/Saga1';
import Slice1 from './Slices/Slice1';
const sagaMiddleware = createSagaMiddleware();
const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];

const store = configureStore({
  reducer: {
    counter: Slice1,
  },
  middleware,
});
sagaMiddleware.run(saga1);

export type AppDispatch = typeof store.dispatch;
export default store;
