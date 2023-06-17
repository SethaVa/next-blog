"use client"
import moment from "moment";
import { useState } from "react";
import parse from 'html-react-parser';
const Comment = () => {
    const [comments, setComments] = useState([
        {
            name: "Setha",
            comment: "Thanks for sharing",
            createdAt: new Date()
        },
        {
            name: "Seyha",
            comment: "Thanks for sharing",
            createdAt: new Date()
        }
    ])
    return (
        <>
            {
                comments.length > 0 && (
                    <div className="bg-white shadow-lg rounded-lg p-8 mb-8 pb-12">
                        <h3 className="text-xl font-semibold mb-8 pb-4 border-b ">
                            {
                                comments.length
                            }
                            {' '}
                            Comment
                        </h3>
                        {
                            comments.map((comment, index) => (
                                <div key={index} className="border-b border-gray-100 mb-2 pb-2">
                                    <p className="mb-1">
                                        <span className="font-semibold">{comment.name}</span>
                                        {' '}
                                        on
                                        {' '}
                                        {moment(comment.createdAt).format('MMM DD, YYYY')}
                                    </p>
                                    <p className="text-gray-600 w-full whitespace-pre-line">{parse(comment.comment)}</p>
                                </div>
                            ))
                        }
                    </div>
                )
            }
        </>
    )
}

export default Comment;