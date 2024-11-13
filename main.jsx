import React from 'react';
import ReactDOM from 'react-dom/client'; // Update this line
import { createBrowserRouter , createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App'; 
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';

import GitHub from './Components/Git-Hub/Git-Hub';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='/Git-Hub' element={<GitHub />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
);
