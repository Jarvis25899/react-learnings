import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import Products from './components/Products';

const ROUTES = [
  {
    path: '',
    element: <Home />,
  },
  {
    path: 'products',
    element: <Products />,
  },
];

const router = createBrowserRouter(ROUTES);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
