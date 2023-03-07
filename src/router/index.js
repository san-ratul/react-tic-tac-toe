import {createBrowserRouter} from 'react-router-dom'
import MailBox from "../pages/MailBox";
import Login from "../pages/Login";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MailBox />
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/fetch/users',
        element: <h1>users</h1>
    }
]);

export default router;