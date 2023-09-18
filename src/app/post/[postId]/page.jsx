import getPostById from "@/actions/get-post-by-id";
import getRelatedPosts from "@/actions/get-related-post";
import PostDetail from "./components/PostDetail";

const PostDetails = async ({ params }) => {
  const { postId } = params;

  const post = await getPostById(postId);
  return (
    <>
      <PostDetail post={post} />
    </>
  );
};

export default PostDetails;
