import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css'

import Default from "./components/Default";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import LayoutRoot from './components/LayoutRoot';
import Error from "./components/Error";

const router = createBrowserRouter([
  { 
    path: '/', 
    element: <LayoutRoot />,
    errorElement: <Error />,
    children: [
      { path: '/', element: <Default />},
      { path: '/resume', element: <Resume />},
      { path: '/portfolio', element: <Portfolio /> },
      { path: '/contact', element: <Contact /> },
    ]
  },
]);

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
