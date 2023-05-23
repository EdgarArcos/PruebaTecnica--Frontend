import { usePosts } from "../Context/PostContext.jsx";
import { PostCard, FormPost } from "../components";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButtton from "../components/buttons/LoginButton";
import { useEffect, useState } from "react";
import { ModalLogin } from "../components/ModalLogin";
import Navbar from "../components/Navbar/Navbar.jsx";
export function HomePage() {

  const { getPosts, posts } = usePosts()
  const [showModal, setShowModal] = useState(false)
  const { isAuthenticated, user } = useAuth0()

  useEffect(() => {
    getPosts(user)
  }, [])
  const modalVerify = () => {
    isAuthenticated ? setShowModal(true) : ModalLogin()
  }
  return (
    <>
      <Navbar />
      <img className="w-10/12 ml-36 mt-4" src="src\assets\Banner.gif" alt="banner" />
      <div className="text-white ">
        <button className="ml-5 bg-indigo-600 text-sm px-2 py-1 rounded-sm hover:bg-indigo-500 my-5" onClick={() => modalVerify()}>New Post +</button>
        <div className=" ml-5 grid grid-cols-4 gap-2">
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

