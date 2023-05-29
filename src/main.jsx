import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Components/Layout/Main.jsx';
import Home from './Components/Home/Home.jsx';
import Order from './Components/Order/Order.jsx';
import LogIn from './Components/LogIn/LogIn.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element:<Main></Main>,
    children:[
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('data.json')
      },
      {
        path:'order',
        element: <Order></Order>
      },
      {
        path:'login',
        element: <LogIn></LogIn>
      },
      {
        path:'order',
        element: <Order></Order>
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
