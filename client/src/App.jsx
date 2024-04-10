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

const App = () => {
  const role = localStorage.getItem("role");


  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
  
        <Route index path='' element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route path="/auth" element={<PrivateRoute Component={Dashboard} />} >
          <Route index path="dashboard" element={<Profile/>} />
          <Route path="profile" element={<Profile/>} />
          {role ==='admin' && <  Route path="users" element={<User/>} />}
          <Route path="change-password" element={<ChangePassword/>} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
