import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import AddTask from "../Pages/AddTask/AddTask/AddTask";
import Login from "../Pages/Authentication/Login/Login";
import Register from "../Pages/Authentication/Register/Register";
import Home from "../Pages/Home/Home/Home";
import MyTask from "../Pages/MyTask/MyTask/MyTask";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "addtask",
        element: <AddTask></AddTask>,
      },
      {
        path: "mytask",
        element: <MyTask></MyTask>,
      },
    ],
  },
]);
export default router;
