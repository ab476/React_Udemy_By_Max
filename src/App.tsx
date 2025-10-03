import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { Products } from "./pages/Products";
import RootLayout from "./pages/RootLayout";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/products", element: <Products /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
