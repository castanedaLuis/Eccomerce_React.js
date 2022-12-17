import React from 'react'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import '../styles/global.css'
import Layout from '../containers/Layout'
import Home from '../pages/Home';
import Login from '../pages/Login';
import RecoveryPassword from '../pages/RecoveryPassword';
import SendEmail from '../pages/SendEmail';
import NewPassword from '../pages/NewPassword';
import MyAccount from '../pages/MyAccount';
import CreateAccount from '../pages/CreateAccount';
import Checkout from '../pages/Checkout';
import Orders from '../pages/Orders';
import NotFound from '../pages/NotFound';
import Header from '../components/Header';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "login",
      element: <Login />,
    },
    {
      path: "recovery-password",
      element: <RecoveryPassword />,
    },
    {
      path: "send-email",
      element: <SendEmail />,
    },
    {
      path: "new-password",
      element: <NewPassword />,
    },
    {
      path: "account",
      element: <MyAccount />,
    },
    {
      path: "signup",
      element: <CreateAccount />,
    },
    {
      path: "checkout",
      element: <Checkout />,
    },
    {
      path: "orders",
      element: <Orders />,
    }
  ]);
  return (
    <>
      <Header />
      <React.StrictMode>
        <Layout>
          <RouterProvider router={router} />
        </Layout>
      </React.StrictMode>
    </>
  )
}

export default App