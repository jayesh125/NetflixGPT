import React from 'react';
import './App.css'
import Login from './Components/Login.jsx';
import Browse from './Components/Browse.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login/>
    },
    {
      path: "/browse",
      element: <Browse/>
    }
  ])
  return (
    <RouterProvider router={appRouter}/>
  )
};

export default App
