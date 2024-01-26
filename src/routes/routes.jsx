import { useRoutes } from "react-router-dom";
import Login from "../pages/login/index.jsx";
import SecureRoute from "./secureRoute.jsx";
import Dashboard from "../pages/Dashboard/index.jsx";
import RecoverPassword from "../pages/RecoverPassword/index.jsx";

const Routes = () => {
  let route = useRoutes([
    { path: "/login", element: <Login /> },
    { path: "/recover", element: <RecoverPassword /> },
    {
      path: "/",
      element: (
        <SecureRoute>
          <Dashboard />
        </SecureRoute>
      ),
    },
  ]);

  return route;
};

export default Routes;
