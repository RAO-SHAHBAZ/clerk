import React from 'react'
import Home from './pages/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './layout/AppLayout'
import AfterSignin from './pages/AfterSignin'
import Service from './pages/Service'
import ContactUs from './pages/ContactUs'
import About from './pages/About'

const Router = createBrowserRouter([
  {
    element: <AppLayout />,
    path: '/',
    children: [
      {
        element: <Home />,
        path: '/',
      },
      {
        element: <Service />,
        path: '/service',
      },
      {
        element: <ContactUs />,
        path: '/contact-us',
      },
      {
        element: <About />,
        path: '/about',
      },
      {
        element: <AfterSignin />,
        path: '/after-signin',
      },]
  }
])



function App() {
  return (
    <>
      
    <RouterProvider router={Router}/>

    </>
  )
}

export default App
