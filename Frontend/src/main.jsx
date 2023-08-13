import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider , createBrowserRouter } from 'react-router-dom';


import RootLayout from './Routes/RootLayout';
import Videos, {loader as VideoListLoader } from './Routes/Videos';
import VideoDetails , {loader as VideoDetailsLoader } from './Routes/VideoDetails.jsx';
import './index.css'



const router = createBrowserRouter([
  { path : '/', element: <RootLayout />,
    children: [
      { path : '/', element: <Videos />, loader : VideoListLoader},
      { path : ':videoID', element:  <VideoDetails />, loader : VideoDetailsLoader,
    }
  ]
},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
