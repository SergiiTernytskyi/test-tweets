import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

const SharedLayout = lazy(() => import('./SharedLayout/SharedLayout'));
const Home = lazy(() => import('pages/Home'));
const Tweets = lazy(() => import('pages/Tweets'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/tweets" element={<Tweets />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};

export default App;
