import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Main from "../layouts/Main/Main";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path:'/', 
        element:<Main></Main>,
        
    },
    {
        path:'*',
        element:<ErrorPage></ErrorPage>
    }
])


export default router;