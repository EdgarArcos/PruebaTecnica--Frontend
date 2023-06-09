import { usePosts } from "../Context/PostContext";
import FilteredPostCard from "../components/Cards/FilteredPostCart";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";
import { ModalLogin } from "../components/Login/ModalLogin";
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
            <div className="text-white mx-5 mb-24">
                <button className="bg-purple-700 hover:bg-purple-600 text-white font-bold mt-3 py-2 px-4 border-b-4 border-purple-900 hover:border-purple-500 rounded" onClick={() => modalVerify()}>New Post +</button>
                <div className=" pt-3 grid grid-cols-4 gap-2">
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


