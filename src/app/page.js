import { Categories, PostCard, PostWidget } from '@/components'
import Head from 'next/head'
import Image from 'next/image'

const posts = [
  {title: "React", excerpt: "Learn react with me"},
  {title: "Next js", excerpt: "Learn next js with me"},
  {title: "Vue js", excerpt: "Learn vue js with me"}
]
export default function Home() {
  return (
    <div className='container mx-auto px-10 mb-8'>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
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
          <div className='lg:sticky relative tp-8'>
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  )
}
