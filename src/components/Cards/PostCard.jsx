export default function PostCard({ post }) {
    return (
        <div className="text-white">
            <div className=" rounded-2xl bg-zinc-800 hover:bg-zinc-700 hover:cursor-pointer ">
                <div className=" px-12 py-5">
                    <div className="text-center">
                        <h2 className=" break-all text-xl uppercase">{post.title}</h2>
                    </div>
                    <div className="inline ">
                        <p className="m-1 break-all">{post.description}</p>
                    </div>
                    <div className="mt-6">
                        <img className="rounded-xl h-60max-w-full" src={post.image.url} />
                    </div>
                </div>
            </div>
        </div>
    )
}
