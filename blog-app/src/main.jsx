import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import store from '../src/Store/store.js';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import { Provider } from 'react-redux';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx'
import Protected from './Components/AuthLayout.jsx'
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
          <Protected authentication= {false}>
            <Login/>
          </Protected>
        )
      },
      {
        path :"/signup",
        element : (
          <Protected authentication= {false}>
            <Signup/>
          </Protected>
        )
      },
      {
        path : "/allposts",
        element : (
          <Protected authentication= {true}>
            <AllPosts/>
          </Protected>
        )
      },
      {
        path: "/add-posts",
        element : (
          <Protected authentication>
            <AddPosts/>
          </Protected>
        )
      },
      {
        path: "/edit-post/:slug",
        element : (
          <Protected authentication>
            <EditPost/>
          </Protected>
        )
      },
      {
        path:'/post/:slug',
        element : (
          <Protected authentication>
            <Post/>
          </Protected>
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
