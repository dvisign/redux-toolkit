import React, { Suspense } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Loading from 'components/common/Loading';
const Home = React.lazy(() => import('pages/Home'));
const Join = React.lazy(() => import('pages/Join'));
const Login = React.lazy(() => import('pages/Login'));
const Private = React.lazy(() => import('pages/Private'));

function App() {
  return (
    <BrowserRouter>
      <Suspense
        fallback={<Loading />}
      >
        <Routes>
          <Route 
            path="/*" 
            element={<Home />} 
          />
          <Route 
            path="Join/*" 
            element={<Join />} 
          />
          <Route 
            path="Login/*" 
            element={<Login />} 
          />
          <Route 
            path="Private/*" 
            element={<Private />} 
          />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
