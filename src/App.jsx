import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Header from './components/Header/Header'

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
