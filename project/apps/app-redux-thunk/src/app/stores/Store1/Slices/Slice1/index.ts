import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const sleepBeforeValueIncremented = createAsyncThunk<number, number>(
  'increment',
  async (state: number) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(state + 1);
      }, 2000);
    });
  }
);

export const sleepBeforeValueDecremented = createAsyncThunk<number, number>(
  'decrement',
  async (state: number) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(state - 1);
      }, 2000);
    });
  }
);

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(sleepBeforeValueIncremented.fulfilled, (state, action) => {
      state.value = action.payload;
    });

    builder.addCase(sleepBeforeValueDecremented.fulfilled, (state, action) => {
      state.value = action.payload;
    });
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
