import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/News.tsx'
import { RouterProvider, createHashRouter } from 'react-router-dom'
import About from './routes/About.tsx';
import Layout from './Layout.tsx';
import Learn from './routes/Learn.tsx';
import Diff, { loader as diffLoader } from './routes/Diff.tsx';

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
      path: "/diff/:screenSize",
      element: <Diff />,
      loader: ({ params }) => diffLoader({ params: { screenSize: String(params.screenSize) } }),

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

