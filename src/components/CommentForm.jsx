"use client"
import { useState } from "react";

const CommentForm = ({slug}) => {
    const [error, setError] = useState(false);
    const [localStorage, setLocalStorage] = useState(null);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [formData, setFormData] = useState({name: "", email: "", comment: "", storeData: false})

    const onInputChange = (e) => {
        const {type, name, value} = e.target;
        
        if(type === 'checkbox'){
            setFormData((prevState) => ({
                ...prevState,
                [name]: e.target.checked
            }))
        }else{
            setFormData((prevState) => ({
                ...prevState,
                [name]: value    
            }))
        }
    }

    const handleSubmitComment = (e) => {
        setError(false);

        const {name, email, comment, storeData} = formData;
        if(!name || !email || !comment){
            setError(true);
            return;
        }

        if(storeData){
            localStorage.setItem({'name': name})
            localStorage.setItem({'email': email})
        }else{
            localStorage.removeItem('name');
            localStorage.removeItem('email');
        }

        const commentObj = {
            name,
            email,
            comment,
            slug
        }
    }

    return (
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8 pb-12">
            <h3 className="text-xl font-semibold pb-4 mb-8 border-b">Leave a Reply</h3>
            <div className="grid grid-cols-1 mb-4 gap-4">
                <textarea 
                    value={formData.comment}
                    onChange={onInputChange}
                    placeholder="Comment"
                    name="comment"
                    className="h-40 outline-none w-full p-4 bg-gray-100 rounded-lg text-gray-700 focus:ring-2 focus:ring-gray-200"
                ></textarea>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 mb-4 gap-4">
                <input 
                    type="text"
                    value={formData.name}
                    onChange={onInputChange}
                    name="name"
                    placeholder="Name"
                    className="py-2 px-4 outline-none w-full bg-gray-100 rounded-lg text-gray-700 focus:ring-2 focus:ring-gray-200"
                ></input>
                <input
                    type="email"
                    value={formData.email}
                    onChange={onInputChange}
                    name="email"
                    placeholder="Email"
                    className="py-2 px-4 outline-none w-full bg-gray-100 rounded-lg text-gray-700 focus:ring-2 focus:ring-gray-200"
                ></input>
            </div>
            <div className="grid grid-cols-1 mb-4 gap-4">
                <div>
                    <input 
                        checked={formData.storeData}
                        onChange={onInputChange}
                        type="checkbox" 
                        id="storeData" 
                        name="storeData" 
                        value="true"
                    ></input>

                    <label className="text-gray-500 cursor-pointer" htmlFor="storeData">Save my name, email in this browser for the next time I comment.</label>
                </div>
            </div>
            {
                error && (<p className="text-xs text-red-500">All fields are mandatory</p>)
            }
            <div className="mt-8">
                <button
                    type="button"
                    className="transition duration-500 ease hover:bg-indigo-900 inline-block bg-pink-600 text-lg font-semibold rounded-full text-white px-8 py-3 cursor-pointer"
                >
                    Post comment
                </button>
                {
                    showSuccessMessage && (<span className="text-xl float-right font-semibold mt-3 text-gray-500">Comment submitted for review</span>)
                }
            </div>
        </div>
    )
}

export default CommentForm;