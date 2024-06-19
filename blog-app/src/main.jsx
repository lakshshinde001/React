import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import store from '../src/Store/store.js';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import { Provider } from 'react-redux';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx'
import AuthLayout from './Components/AuthLayout.jsx'
import Signup from './pages/Signup.jsx';
import AllPosts from './pages/AddPosts.jsx'
import AddPosts from './pages/AddPosts.jsx';
import EditPost from "./pages/EditPost.jsx"
import Post from "./pages/Post.jsx";


const router = createBrowserRouter([
  {
    path : "/",
    element : <App/>,
    children : [
      {
        path : "/",
        element : <Home/>
      },
      {
        path : "/login",
        element : (
          <AuthLayout authentication= {false}>
            <Login/>
          </AuthLayout>
        )
      },
      {
        path :"/signup",
        element : (
          <AuthLayout authentication= {false}>
            <Signup/>
          </AuthLayout>
        )
      },
      {
        path : "/allposts",
        element : (
          <AuthLayout authentication= {true}>
            <AllPosts/>
          </AuthLayout>
        )
      },
      {
        path: "/add-posts",
        element : (
          <AuthLayout authentication>
            <AddPosts/>
          </AuthLayout>
        )
      },
      {
        path: "/edit-post/:slug",
        element : (
          <AuthLayout authentication>
            <EditPost/>
          </AuthLayout>
        )
      },
      {
        path:'/post/:slug',
        element : (
          <AuthLayout authentication>
            <Post/>
          </AuthLayout>
        )
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
