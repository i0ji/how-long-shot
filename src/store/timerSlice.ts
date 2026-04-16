import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: TimersState = {
  timers: [],
};

const timersSlice = createSlice({
  name: 'timers',
  initialState,
  reducers: {
    addTimer: (state, action: PayloadAction<TimerModel>) => {
      state.timers.push(action.payload);
    },

    removeTimer: (state, action: PayloadAction<string>) => {
      state.timers = state.timers.filter(t => t.id !== action.payload);
    },

    startTimer: (state, action: PayloadAction<string>) => {
      const timer = state.timers.find(t => t.id === action.payload);
      if (!timer || timer.isActive) return;

      timer.isActive = true;
      timer.lastStartTimestamp = Date.now();
    },

    stopTimer: (state, action: PayloadAction<string>) => {
      const timer = state.timers.find(t => t.id === action.payload);
      if (!timer  !timer.isActive  !timer.lastStartTimestamp) return;

      const now = Date.now();

      timer.accumulatedTime += now - timer.lastStartTimestamp;
      timer.lastStartTimestamp = null;
      timer.isActive = false;
    },

    resetTimer: (state, action: PayloadAction<string>) => {
      const timer = state.timers.find(t => t.id === action.payload);
      if (!timer) return;

      timer.accumulatedTime = 0;
      timer.lastStartTimestamp = null;
      timer.isActive = false;
    },

    setTargetDate: (
      state,
      action: PayloadAction<{ id: string; date: string }>
    ) => {
      const timer = state.timers.find(t => t.id === action.payload.id);
      if (!timer) return;

      timer.targetDate = action.payload.date;
    },
  },
});

export const {
  addTimer,
  removeTimer,
  startTimer,
  stopTimer,
  resetTimer,
  setTargetDate,
} = timersSlice.actions;

export default timersSlice.reducer;