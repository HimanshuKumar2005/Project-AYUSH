import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './components/Login';
import RootLayout from './components/Rootlayout';

const router=createBrowserRouter([
  {path:'login',element:<Login/>},
  {path:'',element:<RootLayout/>,children:[
    {path:'',element:<Home/>}
  ]}
])

function App() {
  return (
    <>
    <RouterProvider router={router}></RouterProvider>
    </>
  );
}


export default App;
