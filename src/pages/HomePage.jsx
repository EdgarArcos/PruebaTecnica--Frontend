import { usePosts } from "../Context/PostContext.jsx";
import { PostCard, FormPost } from "../components";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar.jsx";
export function HomePage() {

  const { getPosts, posts } = usePosts()
  const [showModal, setShowModal] = useState(false)
  const { user } = useAuth0()

  useEffect(() => {
    getPosts(user)
  }, [])
  return (
    <>
      <Navbar />
      <img className="w-10/12 ml-36 h-52  my-4" src="src\assets\Bannermorado.jpg" alt="banner" />
      <div className="text-white ">
        <div className=" mx-5 grid grid-cols-4 gap-2">
          {posts?.length !== 0 && posts?.map(post => (
            <PostCard post={post} key={post._id} />
          )
          )}
        </div>
      </div>
      <FormPost isvisible={showModal} onClose={() => setShowModal(false)} />
    </>
  )
}

