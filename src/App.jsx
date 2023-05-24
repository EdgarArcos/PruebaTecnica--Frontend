import { router } from "./routes/router";
import { RouterProvider } from "react-router";
import { PostProvider } from "./Context/PostContext";
import { Toaster } from "react-hot-toast";
import { Auth0Provider } from "@auth0/auth0-react";

const domain = import.meta.env.VITE_APP_AUTH0_DOMAIN
const clientId = import.meta.env.VITE_APP_AUTH0_CLIENT_ID

function App() {
  return (
    <div className="bg-gradient-to-b from-violet-500 to-fuchsia-500">
      <div className="bg-gray-900 min-h-screen grid mx-96">
        <Auth0Provider
          domain={domain}
          clientId={clientId}
          authorizationParams={{
            redirect_uri: window.location.origin,
          }}>
          <PostProvider>
            <RouterProvider router={router} />
            <Toaster />
          </PostProvider>
        </Auth0Provider>
      </div>
    </div>

  )
}

export default App