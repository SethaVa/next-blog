"use client";

import { PostCard } from "@/components";
import Container from "@/components/Layout/Container";

const PostList = ({ posts }) => {
  return (
    <>
      {posts && (
        <Container>
          <div className="grid gap-10 md:grid-cols-2 lg:gap-10 xl:grid-cols-3 ">
            {posts.slice(2, 14).map((post) => (
              <PostCard key={post.id} post={post} aspect="square" />
            ))}
          </div>
        </Container>
      )}
    </>
  );
};

export default PostList;
