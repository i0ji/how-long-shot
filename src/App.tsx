import './App';

import { Header, Timer } from 'components/index';

// import clsx from 'clsx';
import { Outlet } from 'react-router-dom';

const timers = [<Timer />, <Timer />, <Timer />];

function App() {
  
  console.log(timers.length);
  return (
    <section>
      <Header />
      <main className="p-4">
        <Outlet />
      </main>
    </section>
  );
}

export default App;
