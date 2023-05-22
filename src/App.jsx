import { router } from "./routes/router";
import { RouterProvider } from "react-router";
function App() {
  return (
    <div className="bg-neutral-900 min-h-screen grid place-items-center">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
