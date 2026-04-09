// import { Outlet, Scripts } from "react-router";
import { NavLink } from 'react-router';

export default function Header() {
  return (
    <header>
      <nav>
        <ul className="bg-stone-500 flex justify-around">
          <li>
            {' '}
            <NavLink
              to="/"
              className={({ isActive }) =>
                `px-3 py-2 rounded ${isActive ? 'bg-white text-blue-500' : 'text-white hover:bg-blue-700'}`
              }
            >
              Timers
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `px-3 py-2 rounded ${isActive ? 'bg-white text-blue-500' : 'text-white hover:bg-blue-700'}`
              }
            >
              Statistics
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
