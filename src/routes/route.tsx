import App from "@/App";
import Login from "@/pages/login";
import Task from "@/pages/tasks";
import Users from "@/pages/users";
import { createBrowserRouter } from "react-router-dom";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Task />,
      },
      {
        path: "users",
        element: <Users />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default routes;
