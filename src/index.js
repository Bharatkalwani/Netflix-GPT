import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter,RouterProvider,Outlet } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Body from './components/Body';
import Login from './components/Login';
import Browser from './components/Browser';
import Error from './components/Error';
import ProtectedRoute from './components/common/ProtectedRoute';
import PublicRoute from './components/common/PublicRoute'

const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<App></App>,
    children:[
      {
          path:"/",
          element:<Body></Body>,
      },
      {
        path:"/login",
        element: (
          <PublicRoute>
            <Login/>
          </PublicRoute>
        ),
      },
      {
        path:"",
        element: <ProtectedRoute><Outlet/></ProtectedRoute>,
        children:[
          {
            path:"/browser",
            element:<Browser></Browser>
          }
        ]
      // path:"/browser",
      // element:<Browser></Browser>
      },
    ],
    errorElement:<Error></Error>
  }
])

// const appRouter = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       { path: "/", element: <Body /> },
//       {
//         path: "/login",
//         element: (
//           <PublicRoute>
//             <Login />
//           </PublicRoute>
//         ),
//       },
//     ],
//   },
//   {
//     path: "/browser",
//     element: (
//       <ProtectedRoute>
//         <Browser />
//       </ProtectedRoute>
//     ),
//   },
//   {
//     path: "*",
//     element: <Error />,
//   },
// ]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <RouterProvider router={appRouter}/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
