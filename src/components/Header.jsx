"use client"
import Link from "next/link";
import { useEffect, useState } from "react";

const Header = () => {
    const [categories, setCategories] = useState([
        {
            name: "Web Development",
            slug: ""
        },
        {
            name: "Data Science",
            slug: ""
        },
        {
            name: "Math",
            slug: ""
        }
    ])

    useEffect(() => {
        // get categories
        // setCategories([
        //     {
        //         name: "Web Development",
        //         slug: ""
        //     },
        //     {
        //         name: "Data Science",
        //         slug: ""
        //     },
        //     {
        //         name: "Math",
        //         slug: ""
        //     }
        // ])
    }, [])
    return (
        <div className="container mx-auto px-8 mb-8">
            <div className="border-b w-full inline-block border-blue-400 py-8">
                <div className="md:float-left block">
                    <Link href="/">
                        <span className="cursor-pointer font-bold text-4xl text-white">Setha Blog</span>
                    </Link>
                </div>
                <div className="hidden md:float-left md:contents">
                    {categories.map((category, index) => (
                        <Link key={index} href={`/category/${category.slug}`}><span className="md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer">{category.name}</span></Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Header;