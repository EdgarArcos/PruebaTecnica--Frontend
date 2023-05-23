import { usePosts } from "../Context/PostContext.jsx";
import { PostCard, FormPost } from "../components";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButtton from "../components/buttons/LoginButton";
import { useEffect, useState } from "react";
import ProfileButton from "../components/buttons/ProfileButton";
import { ModalLogin } from "../components/ModalLogin";

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

  if (isAuthenticated === false) {
    return (
      <>
        <div className=" mt-5" >{<LoginButtton />}</div>
        <div className="text-white ml-24 mr-24 mb-24">
          <button className=" bg-indigo-600 text-sm px-2 py-1 rounded-sm hover:bg-indigo-500 my-5" onClick={() => modalVerify()}>New Post +</button>
        </div>
      </>)

  } else {
    return (
      <>
        <div className="mt-5 " ><ProfileButton /></div>
        <div className="text-white ml-24 mr-24 mb-24">
          <button className="ml-5 bg-indigo-600 text-sm px-2 py-1 rounded-sm hover:bg-indigo-500 my-5" onClick={() => modalVerify()}>New Post +</button>
          <div className=" grid grid-cols-4 gap-2">
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
}
