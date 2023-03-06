import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './routes/root'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from './routes/home'
import Projects from './routes/projects'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/projects",
        element: <Projects />,
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
