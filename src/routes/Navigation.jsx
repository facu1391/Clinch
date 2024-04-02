import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Loader from '../components/Loader/Loader';

const Home = lazy(() => import("../pages/Home/Home"));
const Candidates = lazy(() => import("../pages/Candidates/Candidates"));
const NotFound = lazy(() => import("../pages/NotFound/NotFound"));

const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loader/>}>
        <Home />
      </Suspense>
    ),
  },
  {
    path: "/candidatos",
    element: (
      <Suspense fallback={<Loader/>}>
        <Candidates />
      </Suspense>
    ),
  },
  {
    path: "/*",
    element: (
      <Suspense fallback={<Loader/>}>
        <NotFound />
      </Suspense>
    ),
  },
]);

const Navigation = () => {
  return <RouterProvider router={routes} />;
};

export default Navigation;