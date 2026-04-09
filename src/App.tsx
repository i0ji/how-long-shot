import './App';

import { Header, Timer } from 'components/index';

import clsx from 'clsx';

const timers = [<Timer />, <Timer />, <Timer />];

function App() {
  const handleAddTimer = () => timers.push(<Timer />);
  console.log(timers.length);
  return (
    <section>
      <Header />
      <button
        className={clsx(
          'w-30 h-30',
          'rounded-2xl bg border-4 border-amber-400',
          'transition-transform duration-100 active:scale-95'
        )}
        onClick={handleAddTimer}
      >
        Add timer!
      </button>
      <h3>{timers.length}</h3>
      

      <h1 className="bg-yellow-600">hello</h1>
    </section>
  );
}

export default App;
