import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './index.css'

import App from './App.tsx'
import ErrorPage from './pages/ErrorPage.tsx'
import Home from './pages/Home.tsx'
import Login from './pages/Login.tsx'
import TimeCapsule from './pages/TimeCapsule.tsx'
import TimeCapsuleList from './components/TimeCapsuleList.tsx'
import EditTimeCapsule from './pages/EditTimeCapsule.tsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Login />
      }, 
      {
        path: '/home',
        element: <Home />
      },
      {
        path: '/time-capsule',
        element: <TimeCapsule />
      },
      {
        path: '/time-capsule-list',
        element:<TimeCapsuleList />
      },
      {
        path: '/time-capsule-edit',
        element:<EditTimeCapsule />
      }
    ]
  }
]);

const rootElement = document.getElementById('root');
if(rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <RouterProvider router={router} />
  );
}