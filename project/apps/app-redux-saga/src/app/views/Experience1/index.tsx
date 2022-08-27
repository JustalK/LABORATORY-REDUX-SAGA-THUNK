import store from 'apps/app-redux-saga/src/app/stores/Store1';
import { Provider } from 'react-redux';
import Children from './Children';

export function Experience1() {
  return (
    <Provider store={store}>
      <Children />
    </Provider>
  );
}

export default Experience1;
