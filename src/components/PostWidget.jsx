import { imageLoader } from "@/util";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";

const relatedPost = [
    {
        "title": "Best GitHub Reporsitories every developer should know",
        "featuredImage": {
            "url": "https://media.graphassets.com/3h5WB3AXTCaxXS6g6q6i"
        },
        "createdAt": "2021-10-11T15:53:38.607371+00:00",
        "slug": "best-github-reporsitories-every-developer-should-know"
    },
    {
        "title": "Make Money as a Developer",
        "featuredImage": {
            "url": "https://media.graphassets.com/2R0icd3CSVOW6L0pjSkS"
        },
        "createdAt": "2021-10-11T15:54:35.982175+00:00",
        "slug": "make-money-as-a-developer"
    },
    {
        "title": "React JS Interview Question and Answers",
        "featuredImage": {
            "url": "https://media.graphassets.com/lIImYwduSwS400sfPMjA"
        },
        "createdAt": "2021-10-11T15:57:22.275081+00:00",
        "slug": "react-js-interview-question-and-answers"
    }
]

const PostWidget = ({categories, slug}) => {
    
    return (
        <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold border-b pb-4 mb-4">{slug? 'Related Posts': "Recent Posts"}</h3>
            {
                relatedPost.map((post, index) => (
                    <div key={index} className={`flex p-2 items-center w-full cursor-pointer hover:bg-slate-100 hover:rounded-lg`}>
                        <div className="w-16 flex-none">
                            <img
                                alt={post.title}
                                width={50}
                                height={50}
                                style={{height: '50px !important'}}
                                src={post.featuredImage.url}
                                className="rounded-full align-middle"
                            ></img>
                        </div>
                        <div className="flex-grow ml-4">
                            <p className="text-gray-500 font-xs">{moment(post.createdAt).format("MMM DD, YYYY")}</p>
                            <Link href={`/post/${post.slug}`} className="text-md" key={index}>
                                {post.title}
                            </Link>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default PostWidget;