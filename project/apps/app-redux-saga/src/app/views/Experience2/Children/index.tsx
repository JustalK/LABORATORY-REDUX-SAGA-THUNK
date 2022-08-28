import store from '../../../stores/Store1';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from 'apps/app-redux-saga/src/app/stores/Store2';
import {
  increment,
  decrement,
} from 'apps/app-redux-saga/src/app/stores/Store2/Slices/Slice1';

export function Experience1() {
  const count = useSelector((state: any) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div>
      {count === 3 && <div>You win, the counter reached 3.</div>}
      <div>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrease</button>
      </div>
      <div>
        <button
          onClick={() => dispatch({ type: 'ASYNC', payload: 'INCREMENT' })}
        >
          Increment With Async
        </button>
        <button
          onClick={() => dispatch({ type: 'ASYNC', payload: 'DECREMENT' })}
        >
          Decrement With Async
        </button>
      </div>
      <div>global count: {count}</div>
    </div>
  );
}

export default Experience1;
