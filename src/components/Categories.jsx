import Link from "next/link";

const categories = [
    {
        "name": "Photography",
        "slug": "photography"
    },
    {
        "name": "Education",
        "slug": "education"
    },
    {
        "name": "Sports",
        "slug": "sports"
    },
    {
        "name": "Astronomy",
        "slug": "astronomy"
    },
    {
        "name": "Web Development",
        "slug": "web-development"
    }
]
const Categories = () => {
    return (
        <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold mb-4 pb-4 border-b">Categories</h3>
            {
                categories.map((category, index) => (
                    <Link key={index} href={`/category/${category.slug}`}>
                        <span className={`cursor-pointer block ${(index === categories.length - 1) ? 'border-b-0' : 'border-b'} pb-3 mb-3`}>
                            {category.name}
                        </span>
                    </Link>
                ))
            }
        </div>
    )
}

export default Categories;