import { createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';

// Beachte die Pfade: /Ordner/Datei
import Home from './pages/Home/Home';
import Events from './pages/Events/Events';
import Push from './pages/Push/Push';
import AboutUs from './pages/AboutUs/AboutUs';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "lineup", element: <Events /> },
      { path: "push", element: <Push /> },
      { path: "aboutus", element: <AboutUs /> },
    ],
  },
]);