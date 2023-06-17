import moment from "moment";
import Link from "next/link";

const AdjacentPost = ({post, position}) => {
    return (
        <>
            <div className="absolute rounded-lg w-full h-72 bg-cover bg-no-repeat bg-center shadow-md inline-block" style={{ backgroundImage: `url('${post.featuredImage.url}')` }} />
            <div className="absolute rounded-lg bg-center bg-gradient-to-b opacity-50 from-gray-400 via-gray-700 to-black w-full h-72" />
            <div className="flex flex-col absolute p-4 items-center justify-center h-full w-full rounded-lg">
                <p className="text-white text-xs font-semibold text-shadow">{moment(post.createdAt).format("MMM DD, YYYY")}</p>
                <p className="text-white font-semibold text-shadow text-2xl text-center">{post.title}</p>
            </div>
            <Link href={`post/${post.slug}`}><span className="z-10 absolute w-full h-full cursor-pointer"></span></Link>
            {
                position === 'LEFT' && (
                    <div className="absolute arrow-btn bg-pink-600 rounded-full bottom-5 left-4 py-3 text-center cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                    </div>
                )
            }
            {
                position === 'RIGHT' && (
                    <div className="absolute arrow-btn bg-pink-600 rounded-full bottom-5 right-4 py-3 text-center cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </div>
                )
            }
        </>
    )
}

export default AdjacentPost;