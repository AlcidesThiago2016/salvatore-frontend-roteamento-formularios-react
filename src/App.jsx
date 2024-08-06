import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Header from './components/Header/Header'
import Create from './Pages/Create'

const router = createBrowserRouter ([
  {
    element:
    (
      <>
        <div>
          <Header />
          <Outlet />
        </div>  
      </>
    ),
    children: [
      {
          path: '/',
          element: <Home />
      },
      {
        path: '/create',
        element: <Create />
    }
    ]
  } 
])

export default function App() {

  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer />
    </>
  )
}
