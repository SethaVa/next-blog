import AdjacentPosts from "@/sections/AdjacentPosts"

const { PostDetail, Author, CommentForm, Comment, PostWidget, Categories } = require("@/components")

const post = {
  "title": "Best GitHub Reporsitories every developer should know",
  "excerpt": "Integer porta libero id lorem consequat viverra. Vestibulum nec iaculis dui. Curabitur hendrerit enim rutrum nunc tincidunt efficitur.",
  "featuredImage": {
    "url": "https://media.graphcms.com/3h5WB3AXTCaxXS6g6q6i"
  },
  "author": {
    "name": "JavaScript Mastery",
    "bio": "The purpose of JavaScript Mastery is to help aspiring and established developers to take their development skills to the next level and build awesome apps.",
    "photo": {
      "url": "https://media.graphcms.com/v6zrj0PQGOEo5TdPhwpQ"
    }
  },
  "createdAt": "2021-10-11T15:53:38.607371+00:00",
  "slug": "best-github-reporsitories-every-developer-should-know",
  "content": {
    "raw": {
      "children": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec laoreet dui a turpis tristique auctor. Mauris aliquet a ex eu sodales. Mauris scelerisque leo vel urna ultrices mattis. Quisque facilisis lectus quis porta dignissim. Vestibulum ornare laoreet lobortis. Fusce sit amet maximus sem, a molestie massa. Nunc vitae vestibulum dolor, nec pretium felis. Donec non volutpat eros. Cras nec ipsum euismod, tempor nulla sed, lobortis nisi. Nunc sollicitudin mauris id nibh iaculis maximus. Phasellus at aliquet nulla, et ullamcorper orci. Donec elit odio, cursus non libero suscipit, egestas pharetra ligula."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Pellentesque et mauris consequat, fermentum arcu et, bibendum elit. Ut consequat tristique turpis quis mattis. Phasellus ultricies orci a erat posuere, non convallis elit ornare. Nullam ultricies urna placerat dolor condimentum egestas. Morbi interdum mi eget interdum euismod. Cras purus massa, elementum vel arcu nec, vestibulum auctor lacus. Etiam elit ante, hendrerit ut pulvinar quis, posuere at dolor. Quisque ex odio, suscipit ut dui vel, efficitur dignissim quam. Mauris nulla nisi, malesuada et condimentum consectetur, rhoncus sed justo. Quisque bibendum nisl sit amet accumsan consectetur. Nulla non est nec orci malesuada ultrices id et nibh. Mauris sapien lacus, sodales sit amet eros eu, lacinia cursus mi. Sed maximus lacinia sagittis."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Integer porta libero id lorem consequat viverra. Vestibulum nec iaculis dui. Curabitur hendrerit enim rutrum nunc tincidunt efficitur. Quisque eget rhoncus mi. Fusce aliquet erat neque. Aliquam pretium massa vel lorem dictum, id convallis arcu scelerisque. Aliquam imperdiet ipsum a orci ultrices, a ullamcorper sapien aliquam."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Donec nec magna luctus mauris semper ornare eget ac felis. Nam tempor eu augue quis consectetur. Praesent sem nulla, lacinia tempus elit ut, iaculis tincidunt quam. Praesent tempus tincidunt velit quis pharetra. Suspendisse id dictum urna. Suspendisse mollis ac lorem et aliquet. Aliquam erat est, tincidunt at mattis at, ullamcorper vel dui. Aliquam tristique eleifend neque vitae tristique. Fusce dignissim pellentesque pharetra."
            }
          ]
        }
      ]
    }
  },
  "categories": [
    {
      "name": "Photography",
      "slug": "photography"
    },
    {
      "name": "Web Development",
      "slug": "web-development"
    },
    {
      "name": "Astronomy",
      "slug": "astronomy"
    }
  ]
}
export default function PostDetails({params}) {
    return (
        <>
            <div className="container mx-auto px-10 mb-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    <div className="col-span-1 lg:col-span-8">
                        <PostDetail post={post}/>
                        <Author author={post.author}/>
                        <AdjacentPosts />
                        <CommentForm />
                        <Comment />
                    </div>
                    <div className="col-span-1 lg:col-span-4">
                      <div className="relative lg:sticky top-8">
                        <PostWidget slug={post.slug} categories={post.categories.map((category) => category.slug)}/>
                        <Categories />
                      </div>
                    </div>
                </div>
            </div>
        </>
    )
}


// Fetch data at build time
// export async function getStaticProps({ params }) {
//     const data = await getPostDetails(params.slug);
//     return {
//       props: {
//         post: data,
//       },
//     };
//   }
  
//   // Specify dynamic routes to pre-render pages based on data.
//   // The HTML is generated at build time and will be reused on each request.
//   export async function getStaticPaths() {
//     const posts = await getPosts();
//     return {
//       paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
//       fallback: true,
//     };
//   }