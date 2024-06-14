import React from "react";
import Layout from "./components/Layout";
import Login from "./components/Login";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import Signup from "./components/Signup";
import PageNotFound from "./components/PageNotFound";
import PrivateRoute from "./components/private/PrivateRoute";
import Dashboard from "./components/private/Dashboard";
import Profile from "./components/private/Profile";
import ChangePassword from "./components/private/ChangePassword";
import User from "./components/private/User";
import Home from "./components/private/Home";
import ResetPassword from "./components/ResetPassword";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/user/change-password/:token"
          element={<ResetPassword />}
        />

        {/* Private Routes */}
        <Route path="/auth" element={<PrivateRoute Component={Dashboard} />}>
          <Route
            index
            path="dashboard"
            element={<PrivateRoute Component={Home} />}
          />
          <Route
            path="profile"
            element={<PrivateRoute Component={Profile} />}
          />
          {<Route path="users" element={<PrivateRoute Component={User} />} />}
          <Route
            path="change-password"
            element={<PrivateRoute Component={ChangePassword} />}
          />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
