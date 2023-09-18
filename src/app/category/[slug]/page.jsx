import getPostByCategorySlug from "@/actions/get-post-by-category-slug";
import { Categories, PostCard } from "@/components";
import PostList from "./components/PostList";

const CategoryPost = async ({ params }) => {
  const { slug } = params;
  const posts = await getPostByCategorySlug(slug);

  return <PostList posts={posts} />;
};

export default CategoryPost;
