import {
  createBrowserRouter,
  RouterProvider,
  // createRoutesFromElements,
  // Route,
} from "react-router-dom";
import Home from "./components/Home";
import Products from "./components/Products";
import RootLayout from "./components/Root";
import ErrorPage from "./pages/Error";
import ProductDetail from "./components/ProductDetail";

// Approach 1
const ROUTES = [
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "products/:id",
        element: <ProductDetail />,
      },
    ],
  },
];

const router = createBrowserRouter(ROUTES);

// Approach 2
// const routeDef = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<Home />}></Route>
//     <Route path="/products" element={<Products />}></Route>
//   </Route>
// );
// const router = createBrowserRouter(routeDef);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
