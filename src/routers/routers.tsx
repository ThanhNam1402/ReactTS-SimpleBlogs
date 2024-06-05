import Home from "../pages/Home";
import ListUser from "../pages/users/ListUser";
import AddUser from "../pages/users/AddUser";

export const router = [
  {
    path: "/",
    element: <Home />,
  },
  { path: "users", element: <ListUser /> },
  { path: "users/add", element: <AddUser /> },
];
