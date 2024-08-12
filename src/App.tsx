import React from 'react'
import { HomeScreens } from './pages'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import OnbordingScreen from './pages/onbording_screens';


const router = createBrowserRouter( [
  {path: '/', element: <OnbordingScreen />},
  {path: '/home', element: <HomeScreens />}
]) 

const tele = window.Telegram.WebApp;

function App() {

  React.useEffect(()=>{
    tele.ready()
  },[]);


  return (
    <RouterProvider router={router} />
  )
}

export default App