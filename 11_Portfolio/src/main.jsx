import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Route, RouterProvider , createBrowserRouter, createRoutesFromElements } from 'react-router-dom' ;
// import Layout from './Layout';
import Home from './Home';
import About from './About';
import ContactUs from './ContactUs';

// const router = createBrowserRouter([
//   {
//     path :'/' ,
//     element: <App/> ,
//     children: [
//       {
//            path: '',
//            element: <Home/>
//       },
//       {
//            path: '/about',
//            element: <About/>
//       },
//       {
//         path: '/contactus',
//         element : <ContactUs/>
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>} >
      <Route path='' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<Contact/>} />
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
)