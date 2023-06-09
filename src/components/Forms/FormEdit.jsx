import { Formik, Form, Field, ErrorMessage } from "formik";
import { usePosts } from "../../Context/PostContext";
import * as Yup from "yup";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export function FormEdit({ isvisible, onClose, title }) {
    const { getPost, updatePost } = usePosts()
    const navigate = useNavigate()
    const params = useParams()
    const [post, setPost] = useState({
        title: ""
    })
    function handleClose(e) {
        if (e.target.id === "wrapper") onClose()
        navigate('/YourCreations')
    }
    useEffect(() => {
        (async () => {
            if (params.id) {
                const post = await getPost(params.id)
                setPost(post)
            }
        })()
    }, [params.id])
    if (!isvisible) return null

    return (
        <div className=' fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm' id='wrapper' onClick={handleClose}>
            <div className='grid place-items-center mt-40  '>
                <button className='text-white text-xl pl-96' onClick={() => onClose()}>X</button>
                <div className='bg-white p-2 rounded w-96'>
                    <h3 className=" text-black text-center">Edit</h3>
                    <div>
                        <Formik
                            initialValues={post}
                            validationSchema={Yup.object({
                                title: Yup.string().required("Title is Required"),
                            })}
                            onSubmit={(values) => {
                                updatePost(post._id, values)
                                onClose()
                            }}
                            enableReinitialize
                        >
                            {({ handleSubmit }) => (
                                <Form onSubmit={handleSubmit}>
                                    <h3>Title</h3>
                                    <Field name='title' placeholder='title' className="px-3 py-2 focus:outline-none rounded bg-gray-600 text-white w-full" />
                                    <ErrorMessage component="p" className="text-red-400 text-sm" name="title" />
                                    <button type="submit" className=" bg-purple-700 hover:bg-purple-600 text-white font-bold my-2 py-2 px-4 border-b-4 border-purple-900 hover:border-purple-500 rounded">Save</button>
                                </Form>)}
                        </Formik>
                    </div>
                </div>
            </div>
        </div>
    )
}
