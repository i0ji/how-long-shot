import clsx from 'clsx';

export default function Timer() {
  return (
    <div className={clsx('flex flex-col justify-around items-center', 'w-100 h-100', 'bg-red-500')}>
      {/* <h1>{props.timer.name}</h1> */}
      <h5>Start date:</h5>
      "08.04.2026"
    </div>
  );
}
