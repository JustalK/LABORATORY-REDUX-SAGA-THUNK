/**
 * The module managing the home page
 * @module Home
 */

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  increment,
  decrement,
  sleepBeforeValueIncremented,
  sleepBeforeValueDecremented,
} from 'apps/app-redux-thunk/src/app/stores/Store3/Slices/Slice1';
import { AppDispatch } from 'apps/app-redux-thunk/src/app/stores/Store3';

const Children = () => {
  const count = useSelector((state: any) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();

  const handleClickIncrement = async () => {
    try {
      const originalPromiseResult = await dispatch(
        sleepBeforeValueIncremented(count)
      )['unwrap']();
      // handle result here
    } catch (rejectedValueOrSerializedError) {
      // handle error here
    }
  };

  const handleClickDecrement = async () => {
    try {
      const originalPromiseResult = await dispatch(
        sleepBeforeValueDecremented(count)
      )['unwrap']();
      // handle result here
    } catch (rejectedValueOrSerializedError) {
      // handle error here
    }
  };

  return (
    <div>
      {count === 3 && <div>You win, the counter reached 3.</div>}
      <div>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrease</button>
      </div>
      <div>
        <button onClick={handleClickIncrement}>Increment With Async</button>
        <button onClick={handleClickDecrement}>Decrement With Async</button>
      </div>
      <div>global count: {count}</div>
    </div>
  );
};

export default Children;
