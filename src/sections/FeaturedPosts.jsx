'use client'
import { FeaturedPostCard } from '@/components';
import Carousel from 'react-multi-carousel';
const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 1024 },
        items: 5
      },
      desktop: {
        breakpoint: { max: 1024, min: 768 },
        items: 3
      },
      tablet: {
        breakpoint: { max: 768, min: 640 },
        items: 2,
      },
      mobile: {
        breakpoint: { max: 640, min: 0 },
        items: 1
      }
  };

  const featuredPosts = [
    {
      title: "Useful Chrome Extensions", 
      excerpt: "Google Chrome is arguably the most popular web browser today, and it’s for a reason. Besides being fast, offering users device sync, and excelling in online security, it provides a wide variety of add-ons to further customize and enhance your user experience.", 
      featuredImage: {
        url: '/bg.jpg'
      },
      createdAt: new Date(), 
      author: {
        name: "Setha",
        photo: {
            url: '/bg.jpg'
        }
      }
    },
    {
      title: "Useful Chrome Extensions", 
      excerpt: "Google Chrome is arguably the most popular web browser today, and it’s for a reason. Besides being fast, offering users device sync, and excelling in online security, it provides a wide variety of add-ons to further customize and enhance your user experience.", 
      featuredImage: {
        url: '/bg.jpg'
      },
      createdAt: new Date(), 
      author: {
        name: "Setha",
        photo: {
            url: '/bg.jpg'
        }
      }
    },
    {
      title: "Useful Chrome Extensions", 
      excerpt: "Google Chrome is arguably the most popular web browser today, and it’s for a reason. Besides being fast, offering users device sync, and excelling in online security, it provides a wide variety of add-ons to further customize and enhance your user experience.", 
      featuredImage: {
        url: '/bg.jpg'
      },
      createdAt: new Date(), 
      author: {
        name: "Setha",
        photo: {
            url: '/bg.jpg'
        }
      }
    },
    {
        title: "Useful Chrome Extensions", 
        excerpt: "Google Chrome is arguably the most popular web browser today, and it’s for a reason. Besides being fast, offering users device sync, and excelling in online security, it provides a wide variety of add-ons to further customize and enhance your user experience.", 
        featuredImage: {
          url: '/bg.jpg'
        },
        createdAt: new Date(), 
        author: {
          name: "Setha",
          photo: {
              url: '/bg.jpg'
          }
        }
      },
      {
        title: "Useful Chrome Extensions", 
        excerpt: "Google Chrome is arguably the most popular web browser today, and it’s for a reason. Besides being fast, offering users device sync, and excelling in online security, it provides a wide variety of add-ons to further customize and enhance your user experience.", 
        featuredImage: {
          url: '/bg.jpg'
        },
        createdAt: new Date(), 
        author: {
          name: "Setha",
          photo: {
              url: '/bg.jpg'
          }
        }
      },
      {
        title: "Useful Chrome Extensions", 
        excerpt: "Google Chrome is arguably the most popular web browser today, and it’s for a reason. Besides being fast, offering users device sync, and excelling in online security, it provides a wide variety of add-ons to further customize and enhance your user experience.", 
        featuredImage: {
          url: '/bg.jpg'
        },
        createdAt: new Date(), 
        author: {
          name: "Setha",
          photo: {
              url: '/bg.jpg'
          }
        }
      }
  ]
const FeaturedPosts = () => {
    const CustomRight = ({onClick}) => (
        <div onClick={onClick} className="absolute arrow-btn left-0 text-center py-3 cursor-pointer bg-pink-600 rounded-full" style={{position: 'absolute'}}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
        </div>
    );
    const CustomLeft = ({ onClick }) => (
        <div onClick={onClick} style={{position: 'absolute', right: 0}} className="absolute arrow-btn right-0 text-center py-3 cursor-pointer bg-pink-600 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
        </div>
    );

    return (
        <div className="mb-8">
            <Carousel
                responsive={responsive}
                additionalTransfrom={0}
                arrows
                autoPlaySpeed={3000}
                centerMode={false}
                draggable
                focusOnSelect={false}
                infinite
                keyBoardControl
                minimumTouchDrag={80}
                renderButtonGroupOutside={false}
                renderDotsOutside={false}
                showDots={false}
                slidesToSlide={1}
                swipeable
                customRightArrow={<CustomRight />}
                customLeftArrow={<CustomLeft />}
                itemClass="px-4"
            >
                {featuredPosts.map((post, index) => (
                    <FeaturedPostCard key={index} post={post} />
                ))}
          </Carousel>
        </div>
    )
}

export default FeaturedPosts