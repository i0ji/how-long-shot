interface TimerModel {
  id: string | null;
  type: 'countdown' | 'elapsed' | null;

  isActive: boolean;

  accumulatedTime: number;
  lastStartTimestamp: number | null;

  targetDate: string | null;
}

interface TimerStateModel {
  timers: TimerModel[];
}

interface TimersState {
  timers: TimerModel[];
}