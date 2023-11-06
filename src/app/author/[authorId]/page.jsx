import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { parseISO, format } from "date-fns";
import Container from "@/components/Layout/Container";
import CategoryLabel from "@/components/Category";
import getAuthorById from "@/actions/get-author-by-id";
import getPostByAuthorId from "@/actions/get-post-by-auditor-id";
import PostList from "@/components/PostList";

const Author = async ({ params }) => {
  const { authorId } = params;

  const author = await getAuthorById(authorId);

  const posts = await getPostByAuthorId(authorId);
  console.log("author", posts);

  return (
    <>
      <Container>
        <div className="mx-auto max-w-screen-md mt-16">
          <div className="flex justify-center">
            <div className="relative mt-1 h-24 w-24 flex-shrink-0 ">
              {author.photo && (
                <Link href={`/author/${author.slug}`}>
                  <img
                    src={author.photo}
                    alt={author.name}
                    className="rounded-full object-cover"
                    fill
                    sizes="96px"
                  />
                </Link>
              )}
            </div>
          </div>

          <h1 className="text-brand-primary mb-3 mt-2 text-center text-3xl font-semibold tracking-tight dark:text-white lg:text-4xl lg:leading-snug">
            {author.name}
          </h1>

          <div className="flex justify-center">
            <p className="text-lg w-2/3 text-center text-black">{author.bio}</p>
          </div>
        </div>
        <div className="mt-10 grid gap-10 md:grid-cols-2 lg:gap-10 xl:grid-cols-3 ">
          {posts.map((post) => (
            <PostList key={post.id} post={post} aspect="square" />
          ))}
        </div>
      </Container>
    </>
  );
};

export default Author;
