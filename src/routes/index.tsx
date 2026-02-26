import { createBrowserRouter } from "react-router-dom";

import { LoginPage } from "../features/auth/pages/loginPage";
import { HomePage } from "../features/auth/pages/homePage";
import { AuthLayout } from "../layouts/authLayout";
import { AppLayout } from "../layouts/appLayout";
import { ProtectedRoute } from "./protectedRoute";

export const router = createBrowserRouter([
  {
    element: <AuthLayout />,
    children: [
      {
        path: "/login",
        element: <LoginPage />,
      },
    ],
  },
  {
    element: <ProtectedRoute />,
    children: [
      {
        element: <AppLayout />,
        children: [
          {
            path: "/",
            element: <HomePage />,
          },
        ],
      },
    ],
  },
]);
