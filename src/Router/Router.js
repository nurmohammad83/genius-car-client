import Main from '../Layout/Main'
import CheckOut from '../Pages/CheckOut';
import Home from '../Pages/Home.jsx'
import Login from '../Pages/Login.jsx'
import Orders from '../Pages/Orders';
import SignUp from '../Pages/SignUp.jsx'
import PrivetRoute from '../Router/PrivetRoute.jsx'
const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>, 
      children: [
        {
            path: '/',
            element:<Home></Home>
        },
        {
          path: '/login', 
          element: <Login></Login>
        },
        {
          path: '/signup', 
          element: <SignUp></SignUp>
        },
        {
          path: '/checkout/:id', 
          element: <PrivetRoute><CheckOut/></PrivetRoute>,
          loader:({params})=>fetch(`http://localhost:4000/services/${params.id}`)
        },
        {
          path:'/orders',
          element:<PrivetRoute><Orders/></PrivetRoute>
        }
      ]
    }
  ]);

  export default router;