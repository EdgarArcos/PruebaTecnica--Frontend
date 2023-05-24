import { usePosts } from "../Context/PostContext.jsx";
import { PostCard } from "../components";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar.jsx";
export function Search() {

    const { getPosts, posts } = usePosts()
    const [search, setSearch] = useState("")
    const searcher = (e) => {
        setSearch(e.target.value)
    }

    let results = []
    if (!search) {
        results = posts
    } else {
        results = posts.filter((data) =>
            data.title.toLowerCase().includes(search.toLowerCase())
        )
    }

    useEffect(() => {
        getPosts()
    }, [])
    return (
        <>
            <Navbar />
            <div className="text-center">
                <input className="w-5/12 h-24 text-3xl text-gray-900  border-violet-300 rounded-lg bg-gray-50 pl-16 hover:border-violet-700 border-4" placeholder='Search...' onChange={searcher}></input>
            </div>
            <div className="text-white ">
                <div className=" mx-5 grid grid-cols-4 gap-2">
                    {posts?.length !== 0 && results?.map(post => (
                        <PostCard post={post} key={post._id} />
                    )
                    )}
                </div>
            </div>
        </>
    )
}