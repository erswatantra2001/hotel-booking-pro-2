import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './components/Login/Login';
import Signuppage from './components/Signup/Signuppage';
import NumVerify from './components/NumberVerification/NumVerify';
import Loggedin from './components/loggedin/Loggedin';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path:"NumVerify",
    element:<NumVerify />,
  },
  {
    path: "Login",
    element: <Login />,
  },
  {
    path: "Signuppage",
    element: <Signuppage />,
  },
  {
    path:"Loggedin",
    element:<Loggedin />
  }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
