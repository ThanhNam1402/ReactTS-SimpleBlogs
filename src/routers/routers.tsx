import Home from "../pages/Home";
import ListUser from "../pages/users/ListUser";

export const router = [
  {
    path: "/",
    element: <Home />,
  },
  { path: "users", element: <ListUser /> },
];
