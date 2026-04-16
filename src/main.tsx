import './index.css';

import App from './App';

import { Home, Statistics, Timers } from 'pages/index';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename="/how-long-shot/">
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Timers />} />
          <Route path="home" element={<Home />} />
          <Route path="timers" element={<Timers />} />
          <Route path="statistics" element={<Statistics />} />{' '}
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
