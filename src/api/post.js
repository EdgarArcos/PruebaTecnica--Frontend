import axios from "axios";
const API_URL = import.meta.env.VITE_APP_API_URL;
export const getPostsRequests = async () => await axios.get(`${API_URL}/posts`)
export const createPostRequest = async (post) => {
    const form = new FormData();

    for (let key in post) {
        form.append(key, post[key]);
    }
    return await axios.post(`${API_URL}/posts`, form, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    })
}
export const deletePostRequest = async _id => await axios.delete(`${API_URL}/posts/` + _id)
export const getPostRequest = async _id => await axios.get(`${API_URL}/posts/` + _id)
export const updatePostRequest = async (_id, newPost) => { await axios.put(`${API_URL}/posts/` + _id, newPost) }