import { usePosts } from "../Context/PostContext";
import FilteredPostCard from "../components/Cards/FilteredPostCart";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";
import { ModalLogin } from "../components/ModalLogin";
import Navbar from "../components/Navbar/Navbar";
import { FormPost } from "../components";

export function YourCreations() {

    const { getPostsFiltered } = usePosts()
    const [showModal, setShowModal] = useState(false)
    const [filteredPosts, setFilteredPosts] = useState([])
    const { isAuthenticated, user } = useAuth0()
    useEffect(() => {
        const getFilteredPosts = async () => {
            setFilteredPosts(await getPostsFiltered(user))
        }
        getFilteredPosts()
    }, [user, getPostsFiltered])

    const modalVerify = () => {
        isAuthenticated ? setShowModal(true) : ModalLogin()
    }
    return (
        <>
            <Navbar />
            <div className="text-white ml-24 mr-24 mb-24">
                <button className="ml-5 bg-indigo-600 text-sm px-2 py-1 rounded-sm hover:bg-indigo-500 my-5" onClick={() => modalVerify()}>New Post +</button>
                <div className=" grid grid-cols-4 gap-2">
                    {filteredPosts?.length !== 0 && filteredPosts?.map(post => (
                        <FilteredPostCard post={post} key={post._id} />
                    )
                    )}
                </div>
            </div>
            <FormPost isvisible={showModal} onClose={() => setShowModal(false)} />
        </>
    )
}


