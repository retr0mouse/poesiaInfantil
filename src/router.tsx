import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/News.tsx'
import { RouterProvider, createHashRouter } from 'react-router-dom'
import About from './routes/About.tsx';
import Layout from './Layout.tsx';
import Learn from './routes/Learn.tsx';
import Diff from './routes/Diff.tsx';

const router = createHashRouter(
  [
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/news",
      element: <App />,
    },
    {
      path: "/diff",
      element: <Diff />,
    },
    {
      element: <Layout />,
      children: [
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/learn",
          element: <Learn />,
        },
      ]
    }
  ]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

