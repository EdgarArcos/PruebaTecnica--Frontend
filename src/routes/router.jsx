import { createBrowserRouter } from 'react-router-dom';
import { ErrorPage, HomePage, Search, YourCreations } from '../pages/barrel';


export const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />
    },
    {
        path: "*",
        element: <ErrorPage />
    },
    {
        path: "/posts/:id",
        element: <YourCreations />
    },
    {
        path: "/YourCreations",
        element: <YourCreations />
    },
    {
        path: "/Search",
        element: <Search />
    },
])