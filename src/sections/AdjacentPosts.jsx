import { AdjacentPost } from "@/components";

const adjacentPost = {
    "next": 
        {
            "title": "React JS Interview Question and Answers",
            "featuredImage": {
                "url": "https://media.graphassets.com/lIImYwduSwS400sfPMjA"
            },
            "createdAt": "2021-10-11T15:57:22.275081+00:00",
            "slug": "react-js-interview-question-and-answers"
        }
    ,
    "previous": 
        {
            "title": "How To Think Like a Senior Developer",
            "featuredImage": {
                "url": "https://media.graphassets.com/UM7mT8DvSMK3yqi5xHb3"
            },
            "createdAt": "2021-10-11T15:55:28.086572+00:00",
            "slug": "how-to-think-like-a-senior-developer"
        }
    
}
const AdjacentPosts = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-8 mb-9 gap-12 mb-8">
            {
                adjacentPost.previous && (
                    <div className={`${adjacentPost.next? 'col-span-1 lg:col-span-4': 'col-span-1 lg:col-span-8'} rounded-lg h-72 relative adjacent-post`}>
                        <AdjacentPost post={adjacentPost.previous} position="LEFT" />
                    </div>
                )
            }

            {
                adjacentPost.next && (
                    <div className={`${adjacentPost.previous? 'col-span-1 lg:col-span-4': 'col-span-1 lg:col-span-8'} rounded-lg h-72 relative adjacent-post`}>
                        <AdjacentPost post={adjacentPost.next} position="RIGHT" />
                    </div>
                )
            }
        </div>
    )
}

export default AdjacentPosts;