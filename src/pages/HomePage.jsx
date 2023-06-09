import { usePosts } from "../Context/PostContext.jsx";
import { PostCard } from "../components";
import { useEffect } from "react";
import Navbar from "../components/Navbar/Navbar.jsx";
export function HomePage() {

  const { getPosts, posts } = usePosts()

  useEffect(() => {
    getPosts()
  }, [])
  return (
    <>
      <Navbar />
      <div className=" flex justify-center ">
        <img className="w-10/12 object-center h-52  my-4" src="src\assets\Bannermorado.jpg" alt="banner" />
      </div>
      <div className="text-white ">
        <div className=" mx-5 grid grid-cols-4 gap-2">
          {posts?.length !== 0 && posts?.map(post => (
            <PostCard post={post} key={post._id} />
          )
          )}
        </div>
      </div>
    </>
  )
}

