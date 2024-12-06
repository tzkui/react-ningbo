import React from 'react';
import { createBrowserRouter, HashRouter, Routes, Route } from 'react-router-dom';

let Home = React.lazy(() => import('../views/home/home'));
let Login = React.lazy(() => import('../views/login/login'));

export default function RouterView() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </HashRouter>
  );
}