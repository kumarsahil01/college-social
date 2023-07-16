import React from 'react';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react'

import Navbar from './pages/Navbar';
import Footer from './pages/Footer';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Profile from './components/Profile';
import NewPost from './components/NewPost';
import ReadingList from './components/ReadingList';
import Listings from './components/Listings';
import Podcasts from './components/Podcasts';

function App() {
  const Layout=()=>{
    return(
      <div className='app'>
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        { path: "/", element: <Home /> },
        { path: "/register", element: <Register /> },
        { path: "/login", element: <Login /> },
        { path: "/profile", element: <Profile />},
        { path: "/newpost", element: <NewPost />},
        { path: "/readinglist", element: <ReadingList />},
        { path: "/listings", element: <Listings />},
        { path: "/podcasts", element: <Podcasts />},

      ],
    },
  ]);
  return (
    <ChakraProvider>
    <div className="App">
   <RouterProvider router={router} />
    </div>
    </ChakraProvider>
  );
}

export default App;
