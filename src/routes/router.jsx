import { createBrowserRouter } from 'react-router-dom';
import { NotFoundPage, HomePage, CreatePosts } from '../pages/index.js';


export const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />
    },
    {
        path: "*",
        element: <NotFoundPage />
    },
    {
        path: "/posts",
        element: <CreatePosts />
    },
])