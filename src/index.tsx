import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Dashboard from "./pages/Dashboard"
import Login from './pages/Login';
import Users from './pages/Users';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

export const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <App />,
        children: [
            {
              path: "/",
              element: <Login />
            },
            {
              path: "dashboard",
              element: <Dashboard />,
              children: [
                {
                  path: "users",
                  element: <Users />
                }
              ]
            }
        ]

      }
    ]
);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
