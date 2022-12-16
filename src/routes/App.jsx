import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import '../styles/global.css'
import Layout from '../containers/Layout'
import Login from '../containers/Login'
import RecoveryPassword from '../containers/RecoveryPassword'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/recovery-password",
      element: <RecoveryPassword />,
    }
  ]);
  return (
    <>
      <React.StrictMode>
        <Layout>
          <RouterProvider router={router} />
        </Layout>
      </React.StrictMode>
    </>
  )
}

export default App