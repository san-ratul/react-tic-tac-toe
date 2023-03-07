import React from "react";
import router from '../router/index'
import {RouterProvider} from "react-router-dom";

function Application(props) {

    return (
        <>
            <React.StrictMode>
                <RouterProvider router={router} />
            </React.StrictMode>
        </>
    );
}

export default Application;