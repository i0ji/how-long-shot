import clsx from 'clsx';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header
      className={clsx(
        'my-2 h-20 flex items-center p-4 ',
        ' bg-gray-500 rounded'
      )}
    >
      <nav>
        <ul className="flex gap-6">
          <li>
            <NavLink
              to="/home"
              className={({ isActive }) =>
                `px-3 py-2 rounded ${
                  isActive
                    ? 'bg-white text-blue-500'
                    : 'text-white hover:bg-blue-700'
                }`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/timers"
              className={({ isActive }) =>
                `px-3 py-2 rounded ${
                  isActive
                    ? 'bg-white text-blue-500'
                    : 'text-white hover:bg-blue-700'
                }`
              }
            >
              Timers
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/statistics"
              className={({ isActive }) =>
                `px-3 py-2 rounded ${
                  isActive
                    ? 'bg-white text-blue-500'
                    : 'text-white hover:bg-blue-700'
                }`
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
