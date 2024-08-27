// src/routers/Router.jsx
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../home/Home";
import Shop from "../shop/Shop";
import About from "../components/About";
import Contact from "../components/Contact";
import SingleGroup from "../shop/SingleGroup";
import Login from "../components/Login";
import DashboardLayout from "../dashboard/DashboardLayout";
import DashBoard from "../dashboard/DashBoard";
import UploadGroup from "../dashboard/UploadGroup";
import ManageGroups from "../dashboard/ManageGroups";
import EditGroups from "../dashboard/EditGroups";
import Signup from "../components/Signup";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Logout from "../components/Logout";

// Create the router with route configuration
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/shop",
        element: <Shop />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/login",
        element: <Login/>
      },
      {
        path: "/group/:id",
        element: <SingleGroup />,
        loader: ({ params }) => fetch(`http://localhost:5000/group/${params.id}`)
      },
      {
        path: "/sign-up",
        element: <Signup/>
      },
      {
        path: "/logout",
        element: <Logout/>
      }
    ],
  },

  {
    path: "/admin/dashboard",
    element:<DashboardLayout/>,
    children: [
      {
        path: "/admin/dashboard",
        element: <DashBoard/>
      },
      {
        path:  "/admin/dashboard/upload",
        element: <UploadGroup/>
      },
      {
        path:  "/admin/dashboard/manage",
        element: <ManageGroups/>
      },
      {
        path:  "/admin/dashboard/edit-group/:id",
        element: <EditGroups/>,
        loader: ({params}) => fetch(`http://localhost:5000/group/${params.id}`)

      }
     
    ]
      
    
  }
]);

// Export the router instance (not a component)
export default router;

