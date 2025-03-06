import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./components/Body";
import Browse from "./components/Browse";
import Error from "./components/Error";
import Login from "./components/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/browse",
        element: <Browse />,
        errorElement: <Error />,
      },
      {
        path: "/login",
        element: <Login />,
        errorElement: <Error />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
