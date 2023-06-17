import { Categories, PostCard, PostWidget } from '@/components'
import FeaturedPosts from '@/sections/FeaturedPosts'
import Head from 'next/head'
import Image from 'next/image'

import 'react-multi-carousel/lib/styles.css';
const posts = [
  {
    title: "Useful Chrome Extensions that you shouldn't Miss Out", 
    excerpt: "Google Chrome is arguably the most popular web browser today, and it’s for a reason. Besides being fast, offering users device sync, and excelling in online security, it provides a wide variety of add-ons to further customize and enhance your user experience.", 
    featuredImage: {
      url: '/bg.jpg'
    },
    createdAt: new Date(), 
    author: {
      name: "Setha"
    }
  },
  {
    title: "Useful Chrome Extensions that you shouldn't Miss Out", 
    excerpt: "Google Chrome is arguably the most popular web browser today, and it’s for a reason. Besides being fast, offering users device sync, and excelling in online security, it provides a wide variety of add-ons to further customize and enhance your user experience.", 
    featuredImage: {
      url: '/bg.jpg'
    },
    createdAt: new Date(), 
    author: {
      name: "Setha"
    }
  },
  {
    title: "Useful Chrome Extensions that you shouldn't Miss Out", 
    excerpt: "Google Chrome is arguably the most popular web browser today, and it’s for a reason. Besides being fast, offering users device sync, and excelling in online security, it provides a wide variety of add-ons to further customize and enhance your user experience.", 
    featuredImage: {
      url: '/bg.jpg'
    },
    createdAt: new Date(), 
    author: {
      name: "Setha"
    }
  }
]
export default function Home() {
  return (
    <div className='container mx-auto px-10 mb-8'>
      <FeaturedPosts />
      <div className='grid grid-cols-1 lg:grid-cols-12 lg:gap-8'>
        <div className='col-span-1 lg:col-span-8'>
          {
            posts.length > 0 && (
              posts.map((post, index) => (
                <PostCard key={index} post={post}/>
              ))
            )
          }
        </div>
        <div className='col-span-1 lg:col-span-4'>
          <div className='lg:sticky relative'>
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  )
}
